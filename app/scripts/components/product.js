/**
 * This file will hold the Product that lives at the Page
 * 
 */
 import React from 'react';

class Product extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='product'>
                <img alt={this.props.product.name} src={this.props.product.picture} />
            </div>
        );
    }
 }
 
 // Export out the React Component
module.exports = Product;