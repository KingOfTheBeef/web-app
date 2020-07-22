import React from 'react';
import '../App.css';
import { Slide } from 'react-slideshow-image';
import img1 from '../images/DSC_0977.jpg';
import img2 from '../images/DSC_0978.jpg';
import img3 from '../images/DSC_0979.jpg';
import baker from "../images/baker.jpg";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

const slideImages = [
    '../images/DSC_0977.jpg',
    '../images/DSC_0978.jpg',
    '../images/DSC_0979.jpg'
];

const styles = theme => ({
    root: {
        backgroundColor: "red"
    },
    media: {
        height: 1000,
        margin: "10px",
    },
});


class Slideshow extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={{width: "90%"}}>
                <Slide>
                    <div className="each-slide">
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={img1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Phone: </b>0123456789<br/>
                                    <b>Email: </b>owl.flynn@mail.com
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="each-slide">
                        <Card style={{backgroundColor: "transparent"}}>
                            <img src={img2} alt="Baker" style={{width: "100%"}}/>
                        </Card>
                    </div>
                    <div className="each-slide">
                        <Card style={{backgroundColor: "transparent"}}>
                            <img src={img3} alt="Baker" style={{width: "100%"}}/>
                        </Card>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Slideshow);