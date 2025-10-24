// Google Sheets integration utilities
// Configure these endpoints based on your Google Apps Script deployment

const GOOGLE_SHEETS_ENDPOINTS = {
  employers: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=employers',
  jobSeekers: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=jobseekers',
};

export interface EmployerFormData {
  name: string;
  company: string;
  email?: string;
  phone?: string;
  roleToHire: string;
  industry: string;
  jobDescription?: File;
  message?: string;
  timestamp?: string;
}

export interface JobSeekerFormData {
  name: string;
  email?: string;
  phone?: string;
  experience: string;
  resume?: File;
  timestamp?: string;
}

export const submitEmployerForm = async (formData: FormData): Promise<void> => {
  try {
    // Convert FormData to regular object for easier handling
    const data: Record<string, string | { name: string; size: number; type: string }> = {};
    
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Handle file uploads - convert to base64 or send file info
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
          // Note: For actual file upload, you'd need to convert to base64
          // or use a separate file storage service
        };
      } else {
        data[key] = value;
      }
    }

    // Add timestamp
    data.timestamp = new Date().toISOString();

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_ENDPOINTS.employers, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }

    console.log('Employer form submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting employer form:', error);
    throw error;
  }
};

export const submitJobSeekerForm = async (formData: FormData): Promise<void> => {
  try {
    // Convert FormData to regular object for easier handling
    const data: Record<string, string | { name: string; size: number; type: string }> = {};
    
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Handle file uploads - convert to base64 or send file info
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
          // Note: For actual file upload, you'd need to convert to base64
          // or use a separate file storage service
        };
      } else {
        data[key] = value;
      }
    }

    // Add timestamp
    data.timestamp = new Date().toISOString();

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_ENDPOINTS.jobSeekers, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }

    console.log('Job seeker form submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting job seeker form:', error);
    throw error;
  }
};

// Example Google Apps Script code for the backend:
/*
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = e.parameter.sheet;
    
    var spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    var worksheet;
    
    if (sheet === 'employers') {
      worksheet = spreadsheet.getSheetByName('Employers') || spreadsheet.insertSheet('Employers');
      
      // Set headers if empty
      if (worksheet.getLastRow() === 0) {
        worksheet.getRange(1, 1, 1, 8).setValues([['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Role to Hire', 'Industry', 'Message']]);
      }
      
      // Add data
      var row = [
        data.timestamp,
        data.name,
        data.company,
        data.email,
        data.phone,
        data.roleToHire,
        data.industry,
        data.message
      ];
      
      worksheet.appendRow(row);
      
    } else if (sheet === 'jobseekers') {
      worksheet = spreadsheet.getSheetByName('JobSeekers') || spreadsheet.insertSheet('JobSeekers');
      
      // Set headers if empty
      if (worksheet.getLastRow() === 0) {
        worksheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Name', 'Email', 'Phone', 'Experience', 'Resume']]);
      }
      
      // Add data
      var row = [
        data.timestamp,
        data.name,
        data.email,
        data.phone,
        data.experience,
        data.resume ? data.resume.name : ''
      ];
      
      worksheet.appendRow(row);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: 'StaffAnchor Forms API'}))
    .setMimeType(ContentService.MimeType.JSON);
}
*/