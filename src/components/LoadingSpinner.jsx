import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
      />
    </div>
  )
}

export default LoadingSpinner
