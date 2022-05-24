import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
const UpdateEquipment = () => {

    const { id } = useParams();

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);
    // const [count, setCount] = useState(50);

    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const url = `http://localhost:5000/equipment/${id}`
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setUser(data));
    // }, [])

    const { isLoading, refetch, data: user } = useQuery(['equipment', id], () =>
        fetch(`http://localhost:5000/equipment/${id}`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>


    const handleUpdateUser = event => {
        event.preventDefault();


        const minimumOrderQuantity = total;
        // const availableQuantity = event.target.availableQuantity.value;

        const uupdatedUser = { minimumOrderQuantity };

        // send data to the server
        const url = `http://localhost:5000/equipment/${id}`
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


    // console.log(moq);

    // if(number1 < user.minimumOrderQuantity){
    //     console.log('Increase Number');
    // }

    return (
        <div className='marginTop mx-auto text-center bg-secondary w-75 p-5'>
            <h2 className='mb-5'>Update Item</h2>

            <form className='mx-auto' onSubmit={handleUpdateUser}>

                {/* <input className='w-100 mb-3' type="text" name='minimumOrderQuantity' placeholder='Minimum Order Quantity' required />
                <br></br> */}
                {/* <input className='w-100 mb-3' type="text" name='availableQuantity' placeholder='Available Quantity' required />
                <br></br> */}

                {
                    total > user.minimumOrderQuantity && total <= user.availableQuantity
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
                        total > user.minimumOrderQuantity && total <= user.availableQuantity
                            ?
                            total
                            :
                            'Please Input the Available Quantity'
                    }
                </h2>
                <button className='btn btn-sm fw-bold btn-gradient mt-3' onClick={calculateTotal}>Add Them!</button>
            </div>

        </div>
    );
};

export default UpdateEquipment;
