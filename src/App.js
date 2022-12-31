import React from 'react';
import { ThemeProvider } from '@mui/material';
import TopAppBar from './Components/App Bar/TopAppBar';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { Body } from './Components/Styled MUI components/Body';
import { Route, Routes } from 'react-router-dom';
import OngoingProjects from './Components/Projects Feed/Ongoing Projects/OngoingProjects';
import FinishedProjects from './Components/Projects Feed/Finished Projects/FinishedProjects';
import AbortedProjects from './Components/Projects Feed/Aborted Projects/AbortedProjects';
import About from './Pages/About';
import OngoingOpenCard from './Components/Projects Feed/Ongoing Projects/OngoingOpenCard';
import Auth from './Components/Auth/Auth';
import { AuthProvider } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import Home from './Pages/Home';

function App() {
  const { isDarkMode } = useTheme()

  document.body.style.background = isDarkMode ? 'linear-gradient(90deg, rgba(14,11,4,1) 0%, rgba(52,34,8,1) 50%, rgba(14,11,4,1) 100%)' : 'linear-gradient(90deg, rgba(250,246,237,1) 0%, rgba(255,234,203,1) 50%, rgba(250,246,237,1) 100%)'
  // document.body.style.backgroundColor = isDarkMode ? '#0e0b04' : '#faf6ed'
  document.body.style.color = isDarkMode ? '#b6b4b4' : '#3b3b3b'
  return (
    <AuthProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Body>
          <TopAppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ongoing' element={<OngoingProjects />} />
            <Route path='/ongoing/:projectId' element={<OngoingOpenCard />} />
            <Route path='/finished' element={<FinishedProjects />} />
            <Route path='/aborted' element={<AbortedProjects />} />
            <Route path='/about' element={<About />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Body>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
