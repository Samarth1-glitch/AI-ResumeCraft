import { useResume } from '../contexts/ResumeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SavedResumes() {
  const { state, loadResume, deleteResume } = useResume();

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
      >
        Your Saved Resumes
      </motion.h1>

      {state.savedResumes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            You haven't saved any resumes yet.
          </p>
          <Link
            to="/create"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create New Resume
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.savedResumes.map((resume, index) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {resume.personalInfo.name || 'Untitled Resume'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Created: {new Date(resume.createdAt).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => loadResume(resume.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  Load
                </button>
                <Link
                  to="/preview"
                  className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Preview
                </Link>
                <button
                  onClick={() => deleteResume(resume.id)}
                  className="px-4 py-2 text-red-600 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
