import { supabase } from "@/lib/supabase";

const GOOGLE_SHEETS_ENDPOINTS = {
  employers: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_EMPLOYERS_ENDPOINT!,
  jobSeekers: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_JOBSEEKERS_ENDPOINT!,
};

// Best-effort: lands the same employer submission in the CRM (Employer
// Inquiries) via a SECURITY DEFINER RPC, so recruiters can triage it and
// convert to a Client/Mandate without ever opening the Google Sheet. This
// runs alongside the existing Google Sheets submission below, not instead
// of it -- if Supabase is misconfigured or the call fails for any reason,
// it only logs a warning and the employer's submission still goes through
// to Google Sheets as it always has.
const submitToCrm = async (data: Record<string, unknown>, source: "employers_page" | "contact_page") => {
  if (!supabase) {
    console.warn("Supabase env vars not configured -- skipping CRM employer inquiry sync.");
    return;
  }
  try {
    const { error } = await supabase.rpc("submit_employer_inquiry", {
      payload: {
        company_name: data.companyName ?? "",
        industry: data.industry ?? "",
        custom_industry: data.customIndustry ?? "",
        full_name: data.fullName ?? "",
        designation: data.designation ?? "",
        work_email: data.workEmail ?? "",
        mobile_number: data.mobileNumber ?? "",
        source,
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error("Error syncing employer inquiry to CRM (Google Sheets submission unaffected):", error);
  }
};

// Helper function to convert file to base64
const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = error => reject(error);
  });
};

export interface EmployerFormData {
  // Section 1: Company Details
  companyName: string;
  website?: string;
  industry: string;
  companySize?: string;
  
  // Section 2: Contact Person
  fullName: string;
  designation: string;
  workEmail: string;
  mobileNumber: string;
  jobDescription?: File;
  
  timestamp?: string;
}

export interface JobSeekerFormData {
  // Section 1: Personal Information
  fullName: string;
  email: string;
  mobile: string;
  currentCity?: string;
  preferredJobLocations: string;
  linkedinProfile?: string;
  employmentStatus: string;
  
  // Section 2: Professional Summary
  currentCompany?: string;
  currentDesignation: string;
  totalExperience: string;
  functionalExpertise: string;
  industriesWorked: string;
  resume?: File;
  professionalSummary?: string;
  
  // Section 3: Education & Certifications
  highestQualification: string;
  specialization?: string;
  certifications?: string;
  
  // Section 4: Career Preferences
  preferredFunctionalArea: string;
  targetRoles?: string;
  preferredIndustries?: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  
  timestamp?: string;
}

export const submitEmployerForm = async (inputFormData: FormData): Promise<void> => {
  try {
    
    // Convert FormData to regular object for easier handling
    const data: Record<string, string | { name: string; size: number; type: string; data?: string }> = {};
    
    for (const [key, value] of inputFormData.entries()) {
      if (value instanceof File) {
        // Convert file to base64 for upload
        const base64Data = await convertFileToBase64(value);
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
          data: base64Data
        };
      } else {
        data[key] = value;
      }
    }

    // Add timestamp
    data.timestamp = new Date().toISOString();

    // Land the same submission in the CRM as an Employer Inquiry. Fired
    // alongside (not blocking) the Google Sheets POST below.
    void submitToCrm(data as Record<string, unknown>, "employers_page");

    // Send to Google Sheets using form data to avoid CORS preflight
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }


    const response = await fetch(GOOGLE_SHEETS_ENDPOINTS.employers, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
    }

    const responseText = await response.text();
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      throw new Error(`Invalid JSON response: ${responseText}`);
    }
    
    if (result.error) {
      throw new Error(result.error);
    }

  } catch (error) {
    console.error('Error submitting employer form:', error);
    throw error;
  }
};

export const submitJobSeekerForm = async (inputFormData: FormData): Promise<void> => {
  try {
    // Convert FormData to regular object for easier handling
    const data: Record<string, string | { name: string; size: number; type: string; data?: string }> = {};
    
    for (const [key, value] of inputFormData.entries()) {
      if (value instanceof File) {
        // Convert file to base64 for upload
        const base64Data = await convertFileToBase64(value);
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
          data: base64Data
        };
      } else {
        data[key] = value;
      }
    }

    // Add timestamp
    data.timestamp = new Date().toISOString();

    // Send to Google Sheets using form data to avoid CORS preflight
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }

    const response = await fetch(GOOGLE_SHEETS_ENDPOINTS.jobSeekers, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
    }

    const responseText = await response.text();
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      throw new Error(`Invalid JSON response: ${responseText}`);
    }
    
    if (result.error) {
      throw new Error(result.error);
    }

  } catch (error) {
    console.error('Error submitting job seeker form:', error);
    throw error;
  }
};

