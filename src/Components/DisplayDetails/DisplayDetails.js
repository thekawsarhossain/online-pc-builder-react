import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import './DisplayDetails.css';

const DisplayDetails = props => {
    const {img, name, price} = props.data;
    
    return (
        <div>
            {/* selected item details here  */}
            <div className="d-flex align-items-center justify-content-around custom-style p-2">
                <img className="w-25" src={img} alt="" />
                <h6>{name}</h6>
                <h6>{price}</h6>
            </div>
        </div>
    );
};

export default DisplayDetails;