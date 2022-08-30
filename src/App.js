import React, { useState } from 'react';
import { Stack, ThemeProvider } from '@mui/material';
import TopAppBar from './Components/App Bar/TopAppBar';
import LeftNavbar from './Components/Left Navbar/LeftNavbar';
import RightSideLinks from './Components/Right Side/RightSideLinks';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { Body } from './Components/Styled MUI components/Body';
import { Route, Routes } from 'react-router-dom';
import OngoingProjects from './Components/Projects Feed/Ongoing Projects/OngoingProjects';
import FinishedProjects from './Components/Projects Feed/Finished Projects/FinishedProjects';
import AbortedProjects from './Components/Projects Feed/Aborted Projects/AbortedProjects';
import About from './Pages/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Body>
        <TopAppBar />
        <Stack direction="row" spacing={2} justifyContent="space-between" height="100%" width="100vw">
          <LeftNavbar />
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/ongoing' element={<OngoingProjects />} />
            <Route path='/finished' element={<FinishedProjects />} />
            <Route path='/aborted' element={<AbortedProjects />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <RightSideLinks setIsDarkMode={setIsDarkMode} />
        </Stack>
      </Body>
    </ThemeProvider>
  );
}

export default App;
