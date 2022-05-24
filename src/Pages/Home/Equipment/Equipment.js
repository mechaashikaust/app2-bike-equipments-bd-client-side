import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Equipment.css';

const Equipment = ({ equipment }) => {
    const { _id, name, img, description, price, minimumOrderQuantity, availableQuantity } = equipment;
    const navigate = useNavigate();
    const handleNavigateToEquipmentDetail = id => {
        navigate(`/equipment/${id}`);
    }
       
    return (
        <div className='equipment bg-secondary'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Minimum Order: {minimumOrderQuantity}</p>
            <p>Available : {availableQuantity}</p>
            <p><small>Description : {description}</small></p>
            <button onClick={() => handleNavigateToEquipmentDetail(_id)} className='btn btn-dark btn-gradient'>Purchase</button>
            
        </div>
    );
};

export default Equipment;