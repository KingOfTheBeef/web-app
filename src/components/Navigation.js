import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png'
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        height: "5%",
        width: "5%",
    },
    title: {
        flexGrow: 1,
    },
    button: {
        padding: 25,
        maxWidth: "20%",
        color: "inherit",
    }
}));

const navigations = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Menu",
        link: "/Menu"
    },
    {
        name: "About",
        link: "/About"
    },
    {
        name: "Contact",
        link: "/contact"
    },
];

function NavigationButton(name, link){
    const classes = useStyles();
        return(
            <Button className={classes.button} component={Link} to={link}>
                <Typography variant="h6" className={classes.title}>{name}</Typography>
            </Button>
        )
}

const Navigation = () => {
    const classes = useStyles();
    const navigationButtons = [];
    for (let i = 0; i < navigations.length; i++) {
        navigationButtons.push(NavigationButton(navigations[i].name, navigations[i].link))
    }
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            size="small"
                        >
                            <img src={logo} alt="logo" style={{width: "100%", height: "100%"}}/>
                        </IconButton>
                        {navigationButtons}
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default Navigation;