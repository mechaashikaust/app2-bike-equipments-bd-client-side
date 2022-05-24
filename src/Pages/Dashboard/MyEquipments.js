import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyEquipments = () => {


    const [myequipments, setMyequipments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {

            // {4} My Appointemnts with verifying JWT

            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {


                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {

                    setMyequipments(data)
                });
        }
    }, [user]);

    console.log(myequipments);

    return (
        <div>
            <h2>MyAppointments: {myequipments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>

                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myequipments.map((myequipment, index) =>
                                <tr key={myequipment._id}>
                                    <th>{index + 1}</th>
                                    <td>{myequipment.user}</td>
                                    <td>{myequipment.email}</td>
                                    <td>{myequipment.price}</td>


                                    <td>
                                        {(myequipment.price && !myequipment.paid) && <Link to={`/dashboard/payment/${myequipment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

                                        {(myequipment.price && myequipment.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{myequipment.transactionId}</span></p>
                                        </div>}

                                    </td>

                                    <td><button>Delete</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyEquipments;