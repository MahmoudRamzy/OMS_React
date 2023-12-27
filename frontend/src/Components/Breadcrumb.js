import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb() {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' href='/'>
        MUI
      </Link>
      <Link
        underline='hover'
        color='inherit'
        href='/material-ui/getting-started/installation/'
      >
        Core
      </Link>
      <Typography color='text.primary'>Breadcrumbs</Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
