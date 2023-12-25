import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container, Box, Grid } from '@mui/material';

import Footer from './Components/Footer';
import Drawer from './Components/Drawer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import Projects from './Screens/Projects';
import Invoices from './Screens/Invoices';
import Payments from './Screens/Payments';
import Shipments from './Screens/Shipments';

function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawerHandler = () => {
    setOpen(!open);
  };
  return (
    <Router basename='/'>
      <Box sx={{ display: 'flex' }}>
        <Header handleToggleDrawer={toggleDrawerHandler} open={open} />
        <Drawer handleToggleDrawer={toggleDrawerHandler} open={open} />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Box sx={{ mt: 8, mb: 4, ml: 2, minHeight: 600 }}>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/projects/' element={<Projects />} />
              <Route path='/invoices/' element={<Invoices />} />
              <Route path='/payments/' element={<Payments />} />
              <Route path='/shipments/' element={<Shipments />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
