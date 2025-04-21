import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI-Powered Resume Builder
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Create professional resumes in minutes with AI assistance. Stand out from the crowd and land your dream job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/create"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Create Your Resume
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/saved"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              View Saved Resumes
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {[
          {
            icon: '✨',
            title: 'AI Suggestions',
            desc: 'Get AI-powered content recommendations for your resume sections'
          },
          {
            icon: '📄',
            title: 'Multiple Templates',
            desc: 'Choose from professional, modern and creative designs'
          },
          {
            icon: '📱',
            title: 'Mobile Friendly',
            desc: 'Works perfectly on all devices'
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
