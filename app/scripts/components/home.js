/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import Product from './product';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    {this.props.products.map(product => (
                        <Product key={product._id} product={product}/>
                    ))}
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;