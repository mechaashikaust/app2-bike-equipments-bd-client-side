import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EquipmentQuantity = ({ equipment }) => {

    // const { id } = useParams();

    const { minimumOrderQuantity, availableQuantity } = equipment;

    let moq = parseInt(minimumOrderQuantity);
    

    const [count, setCount] = useState(moq);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        if (count > 0)
            setCount(count - 1);
    }

    if(count > availableQuantity){
        toast('stoppppppp');
        return;
    }
    if(count < minimumOrderQuantity){
        toast('stoppppppp');
        return;
    }

    // const equipmentQuantity = {count};

    // const url = `http://localhost:5000/equipment/${id}`
    // fetch(url, {
    //     method: 'PUT', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(equipmentQuantity),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //         alert('Users added successfully');
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });


    console.log(count);

    return (
        <div>
            <button className='btn btn-primary mt-4 mr-5' onClick={inc} >+</button>
            <span>{count}</span>
            <button className='btn btn-warning ml-5' onClick={dec}>-</button>
        </div>
    );
};

export default EquipmentQuantity;