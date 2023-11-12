import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import EditDoc from './Pages/EditDoc';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Manrope'
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/editor' element={<EditDoc />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
