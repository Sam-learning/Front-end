import React from 'react';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core'
import useStyles from './style'


const Topbar = () => {
    const classes = useStyles()
    return (
        <Container  maxWidth='lg'>
            <AppBar className={classes.Appbar} position="static" color='default'>
                <Toolbar color='default'>
                <Typography  variant="h4" >
                    To-Do App
                </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Topbar;