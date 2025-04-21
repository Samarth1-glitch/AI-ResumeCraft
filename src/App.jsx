import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { ResumeProvider } from './contexts/ResumeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CreateResume from './pages/CreateResume'
import PreviewResume from './pages/PreviewResume'
import SavedResumes from './pages/SavedResumes'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ResumeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <AnimatePresence mode="wait">
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create" element={<CreateResume />} />
                  <Route path="/preview" element={<PreviewResume />} />
                  <Route path="/saved" element={<SavedResumes />} />
                </Routes>
              </main>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </ResumeProvider>
    </ChakraProvider>
  )
}

export default App
