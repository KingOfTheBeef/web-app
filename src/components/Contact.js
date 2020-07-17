import React from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import img from './test.png';

const Contact = () => {
    const useStyles = makeStyles({
        root: {
            maxWidth: "300px",
        },
        jobTitle: {
            fontSize: "13px",
            color: "grey",
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            margin: "10px",
        },
    });

    const classes = useStyles();
    return (
        <Container>
            <div style={{padding: "1em"}}/>
            <Typography>Contact us:</Typography>
            <br/>
            <Card raised={true} className={classes.root}>
                <CardContent>
                    <Typography variant="h6">Mr. Owl Flynn</Typography>
                    <Typography className={classes.jobTitle}>Head Management</Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Phone: </b>0123456789<br/>
                        <b>Email: </b>owl.flynn@mail.com
                    </Typography>
                </CardContent>
            </Card>
            <br/>
            <Card raised={true} className={classes.root}>
                <CardContent>
                    <Typography variant="h6">Mr. Owl Flynn</Typography>
                </CardContent>
            </Card>
            <br/>
            <Card raised={true} className={classes.root}>
                <CardContent>
                    <Typography variant="h6">Mr. Owl Flynn</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Contact;