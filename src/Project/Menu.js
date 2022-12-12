import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
export default function menu() {
  return (
    <div>
    <List sx="margin-top:0%; margin-right:94%; color:white; background-color:green;" component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Trash" />
    </ListItem>
    <Divider light />
    <ListItem button>
      <ListItemText primary="Spam" />
    </ListItem>
  </List>
    </div>
  )
}
