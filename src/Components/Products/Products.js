import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = props => {
    // main products info destructuring here 
    const {img, name, brand, generation, speed, price} = props.products
    // button function destructuring here 
    const {addToDetailsList} = props;
    return (
        <div className="py-3">
            <div className="card h-100">
                {/*  product image here  */}
                <img src={img} className="img-thumbnail" alt="..." />
                <div className="card-body">
                    {/* all the product info here */}
                    <h5 className="product-title">{name}</h5>
                    <p>Brand: {brand}</p>
                    <p>Generation: {generation}</p>
                    <p>Speed: {speed}</p>
                    <h6>Price: {price}</h6>
                </div>
                {/* button here  */}
                <div className="card-footer border-0 bg-white text-center">
                    <button onClick={() => addToDetailsList(props.products)} className="btn custom-btn-color text-light"> <FontAwesomeIcon icon={faCartPlus} /> Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default Products;