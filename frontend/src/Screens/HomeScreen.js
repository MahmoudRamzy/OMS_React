import { Box, Typography } from '@mui/material';
import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';

function HomeScreen() {
  return (
    <Box>
      <Box flex='row'>
        <Typography variant='h5'>Home</Typography>
        <Breadcrumb />
      </Box>
    </Box>
  );
}

export default HomeScreen;
