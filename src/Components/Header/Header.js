import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="container text-start py-3">
                <h2 className="text-light pb-4"><span className="text-white fw-bold">Blusterous</span> youth association !</h2>
                <p className="text-light"> Hey There, we are <span className="text-white fw-bold">Blusterous!</span> We work to help our brothers who growing in an Orphanage <br /> and our target is to donate as much as we can, here is the budget of our that we are going to donate <span className="text-white fw-bold">$10,000</span></p>
            </div>
        </div>
    );
};

export default Header;