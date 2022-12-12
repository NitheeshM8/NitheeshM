import  React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Project.css';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 5}}>
      <AppBar position="static" sx={{color:'#AAE1C2'}}>
        <Toolbar variant='dense'>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
           <Button style={{color:'green', backgroundColor:'white'}}>Login</Button>
           </Toolbar>
           </AppBar>
           </Box>
      );
}
