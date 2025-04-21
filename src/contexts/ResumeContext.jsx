import React, { createContext, useReducer, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ResumeContext = createContext()

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
  },
  education: [],
  workExperience: [],
  skills: [],
  selectedTemplate: 'modern',
  savedResumes: [],
}

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } }
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, action.payload] }
    case 'UPDATE_EDUCATION':
      const updatedEducation = state.education.map((edu, index) =>
        index === action.payload.index ? action.payload.education : edu
      )
      return { ...state, education: updatedEducation }
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter((_, index) => index !== action.payload) }
    case 'ADD_WORK_EXPERIENCE':
      return { ...state, workExperience: [...state.workExperience, action.payload] }
    case 'UPDATE_WORK_EXPERIENCE':
      const updatedWork = state.workExperience.map((work, index) =>
        index === action.payload.index ? action.payload.work : work
      )
      return { ...state, workExperience: updatedWork }
    case 'REMOVE_WORK_EXPERIENCE':
      return { ...state, workExperience: state.workExperience.filter((_, index) => index !== action.payload) }
    case 'ADD_SKILL':
      return { ...state, skills: [...state.skills, action.payload] }
    case 'REMOVE_SKILL':
      return { ...state, skills: state.skills.filter((_, index) => index !== action.payload) }
    case 'SET_TEMPLATE':
      return { ...state, selectedTemplate: action.payload }
    case 'SAVE_RESUME':
      return { ...state, savedResumes: [...state.savedResumes, action.payload] }
    case 'LOAD_RESUME':
      return { ...state, ...action.payload }
    case 'RESET_RESUME':
      return initialState
    default:
      return state
  }
}

export function ResumeProvider({ children }) {
  const [storedResumes, setStoredResumes] = useLocalStorage('resumes', [])
  const [state, dispatch] = useReducer(resumeReducer, {
    ...initialState,
    savedResumes: storedResumes,
  })

  const saveResume = (resumeData) => {
    const newResume = {
      id: Date.now(),
      ...resumeData,
      createdAt: new Date().toISOString(),
    }
    const updatedResumes = [...state.savedResumes, newResume]
    setStoredResumes(updatedResumes)
    dispatch({ type: 'SAVE_RESUME', payload: newResume })
  }

  const loadResume = (id) => {
    const resumeToLoad = state.savedResumes.find((resume) => resume.id === id)
    if (resumeToLoad) {
      dispatch({ type: 'LOAD_RESUME', payload: resumeToLoad })
    }
  }

  const deleteResume = (id) => {
    const updatedResumes = state.savedResumes.filter((resume) => resume.id !== id)
    setStoredResumes(updatedResumes)
    dispatch({ type: 'LOAD_RESUME', payload: { savedResumes: updatedResumes } })
  }

  return (
    <ResumeContext.Provider value={{ state, dispatch, saveResume, loadResume, deleteResume }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
