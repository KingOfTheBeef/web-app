import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const dictionary ={
    "apple" : {
        name: "Apple-Dapple",
        desc: "The apple dapple is the coolest apple dapple in the world"
    },
    "bike" : {
        name: "Bike",
        desc: "A ride my bike ever'day"
    }

};

class Product extends React.Component {
    render () {
        var p1 = dictionary[this.props.match.params.product_name];
        if (p1 == null) {
            return (
                <Container maxWidth="sm">
                    <h2>{"Error: No product found for "+ this.props.match.params.product_name}</h2>
                </Container>
            )
        }
        return (
            <Container maxWidth="sm"><h1>{p1.name}</h1><Typography>{p1.desc}</Typography></Container>
        )
    }
}

export default Product;