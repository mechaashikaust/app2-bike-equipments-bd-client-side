import React from 'react';
import image from '../../../images/bike-parts.jpg'

const Section1 = () => {
    return (
        <div className="hero min-h-screen
        ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Best Manufacturing Place for your Valuable Bike Parts!</h1>
                    <p className="py-6">We’ve been Selling Genuine Motorcycle Parts and Accessories for the last 3 years. We present The Best Shopping site to Buy Motorcycle Parts online in Bangladesh. If you choose our website for Buy Motorcycle Parts you not mistaken, and we always treat customers with respect.</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Section1;