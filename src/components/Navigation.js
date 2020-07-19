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

const Navigation = () => {
    const classes = useStyles();
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

                        <Button className={classes.button} component={Link} to="/">
                            <Typography variant="h6" className={classes.title}>Home</Typography>
                        </Button>
                        <Button className={classes.button} component={Link} to="/Menu">
                            <Typography variant="h6" className={classes.title}>Menu</Typography>
                        </Button>
                        <Button className={classes.button} component={Link} to="/about">
                            <Typography variant="h6" className={classes.title}>About</Typography>
                        </Button>

                        <Button className={classes.button} component={Link} to="/contact">
                            <Typography variant="h6" className={classes.title}>Contact</Typography>
                        </Button>

                        <Button className={classes.button} component={Link} to="/products/baguette">
                            <Typography variant="h6" className={classes.title}>Bread Rolls</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default Navigation;