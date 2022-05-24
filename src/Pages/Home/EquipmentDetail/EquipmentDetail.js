import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
// import ManageInventorySection from '../ManageInventorySection/ManageInventorySection'

const EquipmentDetail = () => {


    // const { id } = useParams();
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);



    const { equipmentId } = useParams();
    // const [equipment, setEquipment] = useState({});

    // useEffect(() => {
    //     const url = `http://localhost:5000/equipment/${equipmentId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setEquipment(data));
    // }, [])

    const { isLoading, refetch, data: equipment } = useQuery(['equipment', equipmentId], () =>
        fetch(`http://localhost:5000/equipment/${equipmentId}`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>







    // const { isLoading2, refetch2, data: user } = useQuery(['equipment', id], () =>
    //     fetch(`http://localhost:5000/equipment/${id}`)
    //         .then(res => res.json())
    // )
    // if (isLoading2) return <Loading></Loading>


    const handleUpdateUser = event => {
        event.preventDefault();


        const minimumOrderQuantity = total;
        // const availableQuantity = event.target.availableQuantity.value;

        const uupdatedUser = { minimumOrderQuantity };

        // send data to the server
        const url = `http://localhost:5000/equipment/${equipmentId}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uupdatedUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Users added successfully');
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    function calculateTotal() {
        setTotal(number1 + number2);
    }








    return (
        <div className='marginTop'>
            <div className='d-flex'>
                <div className='equipment '>
                    <img className='w-50 img-fluid' src={equipment.img} alt="" />

                </div>

                <div className='text-center equipment'>

                    <h2><span className='text-warning'>Name : </span> {equipment.name}</h2>
                    <p><span className='text-warning'>Price : </span> {equipment.price}</p>
                    <p><small><span className='text-warning'>Description : </span>{equipment.description}</small></p>
                    <p><small><span className='text-warning'>Minimum Order : </span>{equipment.minimumOrderQuantity}</small></p>
                    <p><small><span className='text-warning'>Available Quantity : </span>{equipment.availableQuantity}</small></p>

                    <Link to={`/checkout/${equipmentId}`}>
                        <button className='btn btn-secondary'>Stock Equipment</button>
                    </Link>

    



                </div>
            </div>
            {/* <div className='mt-5'>
                <ManageInventorySection></ManageInventorySection>               () => addition(equipment.minimumOrderQuantity)
            </div> */}





            <div className='marginTop mx-auto text-center bg-secondary w-75 p-5'>
                <h2 className='mb-5'>Update Item</h2>

                <form className='mx-auto' onSubmit={handleUpdateUser}>

                    {/* <input className='w-100 mb-3' type="text" name='minimumOrderQuantity' placeholder='Minimum Order Quantity' required />
                <br></br> */}
                    {/* <input className='w-100 mb-3' type="text" name='availableQuantity' placeholder='Available Quantity' required />
                <br></br> */}

                    {
                        total > equipment.minimumOrderQuantity && total <= equipment.availableQuantity
                            ?
                            <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value='Update User' />
                            :
                            <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value='Update User' disabled />
                    }

                </form>


                {/* <div>
                <button className='btn btn-primary mt-4 mr-5' onClick={inc} >+</button>
                <span>{count}</span>
                <button className='btn btn-warning ml-5' onClick={dec}>-</button>
            </div> */}


                <div>
                    <h1>Adding Two Numbers</h1>

                    <div className="number-inputs">
                        <input
                            type="number"
                            value={number1}
                            onChange={e => setNumber1(+e.target.value)}
                            placeholder="0"
                        />
                        <input
                            type="number"
                            value={number2}
                            onChange={e => setNumber2(+e.target.value)}
                            placeholder="0"
                        />
                    </div>



                    <h2>
                        {
                            total > equipment.minimumOrderQuantity && total <= equipment.availableQuantity
                                ?
                                total
                                :
                                'Please Input the Available Quantity'
                        }
                    </h2>
                    <button className='btn btn-sm fw-bold btn-gradient mt-3' onClick={calculateTotal}>Add Them!</button>
                </div>

            </div>





        </div>
    );
};

export default EquipmentDetail;