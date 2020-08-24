import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    logo: {
        maxWidth: 160,
    },
    rightButton: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    toolbar: {
        paddingLeft: 16,
        backgroudColor: '#ff5252',
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
    appBar:{
        background: '#69d0c3',
    },
});

function Header() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="title" color="inherit" style={{ flex: 1 }}> Animal Health
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;