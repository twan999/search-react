/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';

import fetchProducts from '../utils/fetchProducts';

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Main constructor for the App Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            products: []
        };
        this.setProducts = this.setProducts.bind(this);
        
        fetchProducts('')
            .then(res => this.setProducts(res))
            .catch(e => console.log(e));
    }

    setProducts(products) {
        this.setState({
            products: products
        });
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu setProducts={this.setProducts}/>
                <Home products={this.state.products}/>
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
