import { useResume } from '../contexts/ResumeContext';
import PreviewTemplate from '../components/PreviewTemplate';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PreviewResume() {
  const { state } = useResume();

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Resume Preview</h1>
        <div className="flex gap-4">
          <Link to="/create">
            <Button colorScheme="blue" variant="outline">
              Edit Resume
            </Button>
          </Link>
          <Button colorScheme="blue" onClick={() => window.print()}>
            Export as PDF
          </Button>
        </div>
      </motion.div>

      <div className="bg-white p-8 shadow-lg rounded-lg">
        <PreviewTemplate
          personalInfo={state.personalInfo}
          education={state.education}
          workExperience={state.workExperience}
          skills={state.skills}
          template={state.selectedTemplate}
        />
      </div>
    </div>
  );
}
