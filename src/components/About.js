import React from 'react';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";


const About = () => {
    return (
        <Container maxWidth="sm">
                <h1>About this Website</h1>
                <p>This website is my training ground</p>
                <Button color="primary" variant="outlined">Fancy button?</Button>
        </Container>
    );
};
export default About;