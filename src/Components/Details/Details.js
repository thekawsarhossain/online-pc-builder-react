import React from 'react';
import DisplayDetails from '../DisplayDetails/DisplayDetails';
import './Details.css';

const Details = props => {
    const {details} = props;

    let totalCost = 0
    for(const detail of details){
        totalCost = totalCost + detail.price
    }

    return (
        <div className=" border p-3 mt-3">
            {/* title here  */}
            <h2 className="text-center title">Details Here</h2>
            <div className="border mt-3 px-2">
            <p className="lead m-0 mt-2">Total Items: {details.length}</p>
            <p className="lead">Total Costs: {totalCost}</p>
            </div>
            {
                details.map(detail => <DisplayDetails 
                key = {detail.id}
                data={detail}
                ></DisplayDetails>)
            }
        </div>
    );
};

export default Details;
