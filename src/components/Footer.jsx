import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          © {new Date().getFullYear()} ResumeGenius - AI-Powered Resume Builder
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
