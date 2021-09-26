import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="container text-start py-3">
                <h2 className="text-light pb-4">Online PC Builder</h2>
                <p className="text-light"> Hey There, This is our <span className="text-white fw-bold">Online PC Builder!</span> <br /> Website here you can select product and you can build you dream pc under <span className="text-white fw-bold">200,000</span> Lakh's Taka</p>
            </div>
        </div>
    );
};

export default Header;