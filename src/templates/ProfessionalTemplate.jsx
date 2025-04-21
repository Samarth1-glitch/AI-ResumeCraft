import { useColorModeValue } from '@chakra-ui/react';

export default function ProfessionalTemplate({ personalInfo, education, workExperience, skills }) {
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <div className="p-8" style={{ color: textColor }}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <div className="flex justify-center flex-wrap gap-4 text-gray-600 dark:text-gray-400">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </header>

        <div className="space-y-8">
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ borderColor }}>EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </p>
                  </div>
                  <p className="italic">{edu.degree} in {edu.field}</p>
                  {edu.description && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {workExperience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ borderColor }}>EXPERIENCE</h2>
              {workExperience.map((work, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{work.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {work.startDate} - {work.endDate || 'Present'}
                    </p>
                  </div>
                  <p className="font-medium">{work.position}</p>
                  {work.description && (
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      {work.description.split('\n').map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ borderColor }}>SKILLS</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
