export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  sections: ServiceContentSection[];
}

interface ServiceContentSection {
  heading: string;
  items?: string[];
  content?: string;
  subsections?: {
    title?: string;
    content: string;
  }[];
}

interface ServiceSectionProps {
  service: ServiceData;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div id={service.id} className="scroll-mt-20">
      {/* Title & Subtitle */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
            isEven ? 'bg-blue-900' : 'bg-teal-600'
          }`}>
            <span className="text-white font-bold text-lg">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-gray-900">
            {service.title}
          </h2>
        </div>
        <p className="text-xl text-teal-600 font-medium ml-16">
          {service.subtitle}
        </p>
      </div>

      {/* Main Description */}
      <div className={`rounded-2xl p-8 lg:p-10 mb-8 ${
        isEven ? 'bg-blue-50' : 'bg-gray-50'
      }`}>
        <p className="text-xl text-gray-900 font-medium mb-4">
          {service.description}
        </p>
        {service.content.map((paragraph, idx) => (
          <p key={idx} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {service.sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {section.heading}
            </h3>
            
            {/* Bullet Items */}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start space-x-3">
                    <svg 
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        isEven ? 'text-blue-900' : 'text-teal-600'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Content String */}
            {section.content && (
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-4 mt-4">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    {subsection.title && (
                      <p className="font-semibold text-gray-900 mb-2">
                        {subsection.title}
                      </p>
                    )}
                    <p className="text-gray-700 leading-relaxed">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
