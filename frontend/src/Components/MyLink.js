import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

const MyLink = ({ route, text }) => {
  return (
    <Button
      sx={{ textDecoration: 'none', color: 'inherit' }}
      component={RouterLink}
      to={route}
    >
      {text}
    </Button>
  );
};

export default MyLink;
