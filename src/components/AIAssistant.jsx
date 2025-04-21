import { useState } from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Textarea, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const AIAssistant = ({ section, onGenerate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Prompt required',
        description: 'Please enter some details to generate content',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call (replace with actual OpenAI API call)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock response based on section
      let mockResponse = {}
      if (section === 'education') {
        mockResponse = {
          institution: 'University of Example',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          startDate: '2018-09',
          endDate: '2022-05',
          description: 'Graduated with honors. Specialized in software engineering and data structures. Completed capstone project on machine learning applications.',
        }
      } else if (section === 'work') {
        mockResponse = {
          company: 'Tech Solutions Inc.',
          position: 'Software Developer',
          startDate: '2022-06',
          endDate: '2023-12',
          description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented new features that improved user engagement by 30%.',
        }
      } else if (section === 'skills') {
        mockResponse = {
          skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS']
        }
      }

      onGenerate(mockResponse)
      setIsOpen(false)
      setPrompt('')
      
      toast({
        title: 'Content generated',
        description: 'AI has created content based on your prompt',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          colorScheme="purple"
          variant="outline"
          onClick={() => setIsOpen(true)}
        >
          AI Assistant
        </Button>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AI Assistant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Tell me about your {section} and I'll generate content for your resume.
              </p>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`Describe your ${section} (e.g., for work: "I worked as a developer at a startup for 2 years building web apps")`}
                rows={5}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              colorScheme="purple"
              onClick={handleGenerate}
              isLoading={isLoading}
              loadingText="Generating..."
            >
              Generate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AIAssistant
