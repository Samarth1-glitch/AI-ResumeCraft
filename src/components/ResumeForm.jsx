import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Input, Textarea, Button, Select, FormControl, FormLabel, FormErrorMessage, Box } from '@chakra-ui/react'
import { useResume } from '../contexts/ResumeContext'
import AIAssistant from './AIAssistant'

const ResumeForm = () => {
  const { state, dispatch } = useResume()
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm()
  const [activeSection, setActiveSection] = useState('personal')
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    // Initialize form with existing data
    reset(state.personalInfo)
  }, [state.personalInfo, reset])

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: data })
  }

  const addEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
      payload: {
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    })
  }

  const updateEducation = (index, field, value) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: {
        index,
        education: {
          ...state.education[index],
          [field]: value,
        },
      },
    })
  }

  const removeEducation = (index) => {
    dispatch({ type: 'REMOVE_EDUCATION', payload: index })
  }

  const addWorkExperience = () => {
    dispatch({
      type: 'ADD_WORK_EXPERIENCE',
      payload: {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    })
  }

  const updateWorkExperience = (index, field, value) => {
    dispatch({
      type: 'UPDATE_WORK_EXPERIENCE',
      payload: {
        index,
        work: {
          ...state.workExperience[index],
          [field]: value,
        },
      },
    })
  }

  const removeWorkExperience = (index) => {
    dispatch({ type: 'REMOVE_WORK_EXPERIENCE', payload: index })
  }

  const addSkill = (skill) => {
    if (skill.trim() !== '') {
      dispatch({ type: 'ADD_SKILL', payload: skill })
    }
  }

  const removeSkill = (index) => {
    dispatch({ type: 'REMOVE_SKILL', payload: index })
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="sticky top-24 space-y-2">
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'personal' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('personal')}
            >
              Personal Info
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'education' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'work' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('work')}
            >
              Work Experience
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'skills' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('skills')}
            >
              Skills
            </motion.button>
          </div>
        </div>

        <div className="md:w-3/4">
          {activeSection === 'personal' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Personal Information</h2>
                
                <FormControl isInvalid={errors.name}>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                    {...register('phone')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="123 Main St, City, Country"
                    {...register('address')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>LinkedIn</FormLabel>
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    {...register('linkedin')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>GitHub</FormLabel>
                  <Input
                    type="url"
                    placeholder="https://github.com/username"
                    {...register('github')}
                  />
                </FormControl>

                <Button type="submit" colorScheme="blue" className="w-full">
                  Save Personal Info
                </Button>
              </form>
            </motion.div>
          )}

          {activeSection === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Education</h2>
              
              {state.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormControl>
                      <FormLabel>Institution</FormLabel>
                      <Input
                        value={edu.institution}
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        placeholder="University of Example"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Degree</FormLabel>
                      <Input
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        placeholder="Bachelor of Science"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Field of Study</FormLabel>
                      <Input
                        value={edu.field}
                        onChange={(e) => updateEducation(index, 'field', e.target.value)}
                        placeholder="Computer Science"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Dates</FormLabel>
                      <div className="flex gap-2">
                        <Input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                        />
                        <Input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <FormControl className="mt-4">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      value={edu.description}
                      onChange={(e) => updateEducation(index, 'description', e.target.value)}
                      placeholder="Describe your education experience, achievements, etc."
                      rows={3}
                    />
                  </FormControl>
                  <div className="mt-4 flex justify-end">
                    <Button
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-between items-center mt-6">
                <Button onClick={addEducation} colorScheme="blue">
                  Add Education
                </Button>
                <AIAssistant
                  section="education"
                  onGenerate={(text) => {
                    const newEducation = {
                      institution: text.institution || '',
                      degree: text.degree || '',
                      field: text.field || '',
                      startDate: text.startDate || '',
                      endDate: text.endDate || '',
                      description: text.description || '',
                    }
                    dispatch({ type: 'ADD_EDUCATION', payload: newEducation })
                  }}
                />
              </div>
            </motion.div>
          )}

          {activeSection === 'work' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Work Experience</h2>
              
              {state.workExperience.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormControl>
                      <FormLabel>Company</FormLabel>
                      <Input
                        value={work.company}
                        onChange={(e) => updateWorkExperience(index, 'company', e.target.value)}
                        placeholder="Tech Corp Inc."
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Position</FormLabel>
                      <Input
                        value={work.position}
                        onChange={(e) => updateWorkExperience(index, 'position', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Dates</FormLabel>
                      <div className="flex gap-2">
                        <Input
                          type="month"
                          value={work.startDate}
                          onChange={(e) => updateWorkExperience(index, 'startDate', e.target.value)}
                        />
                        <Input
                          type="month"
                          value={work.endDate}
                          onChange={(e) => updateWorkExperience(index, 'endDate', e.target.value)}
                        />
                      </div>
                    </FormControl>
                  </div>
                  <FormControl className="mt-4">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      value={work.description}
                      onChange={(e) => updateWorkExperience(index, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements"
                      rows={4}
                    />
                  </FormControl>
                  <div className="mt-4 flex justify-end">
                    <Button
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeWorkExperience(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-between items-center mt-6">
                <Button onClick={addWorkExperience} colorScheme="blue">
                  Add Work Experience
                </Button>
                <AIAssistant
                  section="work"
                  onGenerate={(text) => {
                    const newWork = {
                      company: text.company || '',
                      position: text.position || '',
                      startDate: text.startDate || '',
                      endDate: text.endDate || '',
                      description: text.description || '',
                    }
                    dispatch({ type: 'ADD_WORK_EXPERIENCE', payload: newWork })
                  }}
                />
              </div>
            </motion.div>
          )}

          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Skills</h2>
              
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <Input
                    type="text"
                    placeholder="Add a skill (e.g., JavaScript, Photoshop)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        addSkill(e.target.value)
                        e.target.value = ''
                      }
                    }}
                    className="flex-grow"
                  />
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      const input = document.querySelector('input[placeholder="Add a skill"]')
                      if (input.value.trim()) {
                        addSkill(input.value)
                        input.value = ''
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {state.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                    >
                      <span>{skill}</span>
                      <button
                        onClick={() => removeSkill(index)}
                        className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
                      >
                        ×
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <AIAssistant
                  section="skills"
                  onGenerate={(text) => {
                    if (text.skills && Array.isArray(text.skills)) {
                      text.skills.forEach(skill => addSkill(skill))
                    }
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResumeForm
