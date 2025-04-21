import { useColorModeValue } from '@chakra-ui/react';

export default function ModernTemplate({ personalInfo, education, workExperience, skills }) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.600', 'blue.400');

  return (
    <div className="p-8" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>{personalInfo.name}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </header>

        {education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ borderColor: accentColor }}>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.degree} in {edu.field}</p>
                {edu.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {workExperience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ borderColor: accentColor }}>Experience</h2>
            {workExperience.map((work, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{work.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {work.startDate} - {work.endDate || 'Present'}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{work.position}</p>
                {work.description && (
                  <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                    {work.description.split('\n').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ borderColor: accentColor }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1
