import { useResume } from '../contexts/ResumeContext'
import { Button, Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import TemplateSelector from './TemplateSelector'

const ModernTemplate = ({ personalInfo, education, workExperience, skills }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.600', 'blue.400')

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
           
