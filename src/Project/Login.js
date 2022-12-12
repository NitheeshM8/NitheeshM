import  React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 5}}>
      <AppBar position="static" sx="background-color:green; text-align:left;">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          <Link href="/Home/Menu" sx="color:white; "><MenuIcon sx="color:white"></MenuIcon></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/Home" sx="color:white; text-decoration:none">Home</Link>
          </Typography>
           <Link href="/Aboutus"><Button sx="text-align:right; color:white;">Login</Button></Link>
           </Toolbar>
           </AppBar>
           </Box>
      );
}
