import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L27KODAkvG9mHY4iDBsYwFSuAg490bsQ7OWbqzJvZKc2W4RAxNwjuVexgvUtnVHvlnYDyWX2znCbfDNUpeOMiYp00qrPlgUrj');

const Payment = () => {
    const { id } = useParams();

    // {12} Get data for Payment route for a specific id.

    const url = `https://afternoon-sea-84552.herokuapp.com/booking/${id}`;

    const { data: equipment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {equipment.patientName}</p>
                    <h2 className="card-title">Please Pay for {equipment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{equipment.date}</span> at {equipment.slot}</p>
                    <p>Please pay: ${equipment.price}</p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={equipment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;