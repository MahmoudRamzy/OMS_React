import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AutoAwesomeMosaic as AutoAwesomeMosaicIcon,
  Note as NoteIcon,
  LocalShipping as LocalShippingIcon,
  PriceChange as PriceChangeIcon,
  CoPresent as CoPresentIcon,
} from '@mui/icons-material';
import Button from '@mui/material/Link';

import { drawerWidth } from '../Constants';

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MyDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function Drawer({ handleToggleDrawer, open }) {
  const theme = useTheme();
  return (
    <MyDrawer variant='permanent' open={open}>
      <DrawerHeader>
        <IconButton onClick={handleToggleDrawer}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem key={'projects'} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={RouterLink}
            to='/projects/'
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <AutoAwesomeMosaicIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Projects</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key={'invoices'} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={RouterLink}
            to='/invoices/'
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <NoteIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Invoices</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key={'shipments'} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={RouterLink}
            to='/shipments/'
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
              Shipments
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key={'payments'} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={RouterLink}
            to='/payments/'
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <PriceChangeIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Payments</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key={'vendors'} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              textDecoration: 'none',
              color: 'inherit',
            }}
            component={RouterLink}
            to='/vendors/'
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <CoPresentIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Vendors</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </MyDrawer>
  );
}

export default Drawer;
