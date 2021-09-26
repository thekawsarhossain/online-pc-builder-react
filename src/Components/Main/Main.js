import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Products from '../Products/Products';
import './Main.css';

const Main = () => {

    // getting api data here 
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('./products.JSON')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    // getting button's data here 
    const [details, setDetails] = useState([]);
    const addToDetailsList = productInfo => {
        const items = [...details, productInfo];
        setDetails(items);
    }

    return (
        <div className="container text-start py-4">
            {/* main area title here */}
            <h2 className="title">Select You Dream PC Parts Here</h2>
            {/* main container start here */}
            <div className="main-container">
                {/* products area */}
                <div className="row row-cols-md-3 pt-4 pe-4">
                    {
                        // sending data to the Products component 
                        products.map(product => <Products 
                        key = {product.id}
                        products = {product}
                        addToDetailsList = {addToDetailsList}
                        ></Products>)
                    }
                </div>
                {/* details area */}
                <div className="details-container pt-4"> 
                    <Details details={details}></Details>
                </div>
            </div>
        </div>
    );
};

export default Main;