import { useResume } from '../contexts/ResumeContext';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import SimpleTemplate from '../templates/SimpleTemplate';

export default function PreviewTemplate() {
  const { state } = useResume();
  const { personalInfo, education, workExperience, skills, selectedTemplate } = state;

  const templates = {
    modern: (
      <ModernTemplate
        personalInfo={personalInfo}
        education={education}
        workExperience={workExperience}
        skills={skills}
      />
    ),
    professional: (
      <ProfessionalTemplate
        personalInfo={personalInfo}
        education={education}
        workExperience={workExperience}
        skills={skills}
      />
    ),
    simple: (
      <SimpleTemplate
        personalInfo={personalInfo}
        education={education}
        workExperience={workExperience}
        skills={skills}
      />
    )
  };

  return (
    <div className="resume-preview">
      {templates[selectedTemplate]}
    </div>
  );
}
