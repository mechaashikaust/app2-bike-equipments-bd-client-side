import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const EquipmentDetail = () => {

    const [user, loading, error] = useAuthState(auth);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    const { equipmentId } = useParams();

    const { isLoading, refetch, data: equipment } = useQuery(['equipment', equipmentId], () =>
        fetch(`http://localhost:5000/equipment/${equipmentId}`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>



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
                toast('Items added successfully');
                event.target.reset();
                refetch();
            })
            .catch((error) => {
                toast('Error:', error);
            });

    }

    function calculateTotal() {
        setTotal(number1 + number2);
    }



    const totalPrice = parseInt(total) * parseInt(equipment.price);




    const handleBooking = event => {
        event.preventDefault();

        // {2} Booking data for sending to DB
        const booking = {
            user: user.displayName,
            email: user.email,
            itemName: equipment.name,
            price: totalPrice,
            quantity: total,
            phone: event.target.phone.value,
            address: event.target.address.value
        } 

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {

                if (data.success) {
                    toast(`Congratulations, Successfully Purchased`);
                }
                else {
                    toast.error(`Already Purchased. Wait for Shipment`);
                }

                refetch();

            })
        // {2} Booking data for sending to DB //*********** END */


    }








    return (
        <div>



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

                    {/* <Link to={`/checkout/${equipmentId}`}>
                        <button className='btn btn-secondary'>Stock Equipment</button>
                    </Link> */}





                </div>
            </div>


            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />


                <input type="text" name="moq" placeholder='Total Price'  value={ totalPrice || ''} className="input input-bordered w-full max-w-xs" />

                <input type="text" name="quantity" placeholder='Total Quantity' value={ total || ''} className="input input-bordered w-full max-w-xs" />
               
                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />

                

                {
                        total >= equipment.minimumOrderQuantity && total <= equipment.availableQuantity
                            ?
                            <input type="submit" value="Purchase" className="btn btn-secondary text-white w-full max-w-xs" />
                            :
                            <input disabled type="submit" value="Purchase" className="btn btn-secondary text-white w-full max-w-xs" />
                    }

            </form>





            {/********************************* Update your Order Quantity Here! **************************************/}

            <div className='marginTop mx-auto text-center bg-secondary w-75 p-5 mt-5'>
                <h2 className='mb-5 text-5xl text-accent'>Update your Order Quantity Here!</h2>

                <form className='mx-auto' onSubmit={handleUpdateUser}>

                    {
                        total >= equipment.minimumOrderQuantity && total <= equipment.availableQuantity
                            ?
                            <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value='Update Quantity' />
                            :
                            <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value='Update Quantity' disabled />
                    }

                </form>


                <div>
                    <div className="number-inputs mt-4">
                        <input
                            type="number"
                            value={number1}
                            onChange={e => setNumber1(+e.target.value)}
                            placeholder="0"
                            className='mr-3 p-2'
                        />
                        <input
                            type="number"
                            value={number2}
                            onChange={e => setNumber2(+e.target.value)}
                            placeholder="0"
                            className='p-2'
                        />
                    </div>



                    <h2 className='mt-2'>
                        {
                            total >= equipment.minimumOrderQuantity && total <= equipment.availableQuantity
                                ?
                                <span className='text-blue-600'>Total : {total} Items Selected. Now, Click on Update Quantity</span>
                                :
                                <span className='text-red-700'>Total : Please Check the Minimum Order & Available Quantity</span>
                        }
                    </h2>
                    <button className='btn btn-sm fw-bold btn-gradient mt-3' onClick={calculateTotal}>Add Item</button>
                </div>

            </div>

        </div>
    );
};

export default EquipmentDetail;