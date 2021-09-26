import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Main.css';

const Main = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('./products.JSON')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className="container text-start py-4">
            <h2 className="title">Select You Dream PC Parts Here</h2>
            <div className="main-container">
                <div className="row row-cols-md-3 pt-4">
                    {
                        products.map(product => <Products 
                        key = {product.id}
                        products = {product}
                        ></Products>)
                    }
                </div>
                <div className="details-container"> 

                </div>
            </div>
        </div>
    );
};

export default Main;