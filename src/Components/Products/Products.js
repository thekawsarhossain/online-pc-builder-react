import React from 'react';
import './Products.css';

const Products = props => {
    const {img, name, brand, generation, speed, price} = props.products
    return (
        <div className="py-3">
            <div class="card h-100">
                <img src={img} class="img-thumbnail" alt="..." />
                <div class="card-body">
                    <h5 class="product-title">{name}</h5>
                    <p>Brand: {brand}</p>
                    <p>Generation: {generation}</p>
                    <p>Speed: {speed}</p>
                    <h6>Price: {price}</h6>
                </div>
                <div class="card-footer border-0 bg-white text-center">
                    <button className="btn custom-btn-color text-light">Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default Products;