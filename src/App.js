import React from 'react';
import { Stack, ThemeProvider } from '@mui/material';
import TopAppBar from './Components/App Bar/TopAppBar';
import LeftNavbar from './Components/Left Navbar/LeftNavbar';
import RightSideLinks from './Components/Right Side/RightSideLinks';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { Body } from './Components/Styled MUI components/Body';
import { Route, Routes, useLocation } from 'react-router-dom';
import OngoingProjects from './Components/Projects Feed/Ongoing Projects/OngoingProjects';
import FinishedProjects from './Components/Projects Feed/Finished Projects/FinishedProjects';
import AbortedProjects from './Components/Projects Feed/Aborted Projects/AbortedProjects';
import About from './Pages/About';
import OngoingOpenCard from './Components/Projects Feed/Ongoing Projects/OngoingOpenCard';
import Auth from './Components/Auth/Auth';
import { AuthProvider } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const location = useLocation()
  const currentPath = location.pathname

  return (
      <AuthProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Body>
            <TopAppBar />
            <Stack direction="row" spacing={2} justifyContent="space-between" height="100vh" width="100vw">
              {currentPath === '/auth' || <LeftNavbar />}
              <Routes>
                <Route path='/' element={<></>} />
                <Route path='/ongoing' element={<OngoingProjects />} />
                <Route path='/ongoing/:projectName' element={<OngoingOpenCard />} />
                <Route path='/finished' element={<FinishedProjects />} />
                <Route path='/aborted' element={<AbortedProjects />} />
                <Route path='/about' element={<About />} />
                <Route path='/auth' element={<Auth />} />
              </Routes>
              {currentPath === '/auth' || <RightSideLinks isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
            </Stack>
          </Body>
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
