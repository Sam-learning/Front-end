import React from 'react';
import {ListItemIcon, ListItem, List, ListItemText, Container, Button} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style'
import db from '../firebase';

const TotalList = (props) => {
  const classes = useStyles()

  const handle_click = ()=>{
    return(
      db.collection('todos').doc(props.text.id).delete()
    )
  }

    return (
        <Container  maxWidth='md'>
            <List className={classes.list} component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={props.text.todo} />
                <Button className={classes.btn} onClick={handle_click}>
                  <DeleteIcon />
                </Button>
              </ListItem>
            </List>
        </Container>
    );
};

export default TotalList;

