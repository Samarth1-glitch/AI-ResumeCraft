import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip label={colorMode === 'light' ? 'Dark mode' : 'Light mode'} placement="bottom">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
          variant="ghost"
          rounded="full"
        />
      </motion.div>
    </Tooltip>
  )
}

export default DarkModeToggle
