export default function SimpleTemplate({ personalInfo, education, workExperience, skills }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
        <div className="flex flex-wrap gap-3 text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </header>

      <div className="space-y-6">
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{edu.institution}</h3>
                  <span className="text-gray-500">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </span>
                </div>
                <p>{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </section>
        )}

        {workExperience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Experience</h2>
            {workExperience.map((work, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{work.company}</h3>
                  <span className="text-gray-500">
                    {work.startDate} - {work.endDate || 'Present'}
                  </span>
                </div>
                <p className="italic">{work.position}</p>
                {work.description && (
                  <ul className="mt-1 pl-5 list-disc text-gray-600">
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
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
