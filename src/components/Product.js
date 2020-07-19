import React from 'react';


class Product extends React.Component {
    render () {
        var p1 = this.props.match.params.product_name;
                return(
            <div>{p1}</div>
                )
    }
}

export default Product;