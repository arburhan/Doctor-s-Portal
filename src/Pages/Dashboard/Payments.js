import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1X0aJ4uo6umqFGEVoEth2hy2Sr4y5BcNWLuQaVxL5UYEuTGt8gg3Z6cDjdh7ke6KSYmw4MtuJHdL6QBIyCfFcO00fU3nEDJi');

const Payments = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success'>Hello, {appoinment.patientName}</p>
                    <h2 className="card-title">Pay for: {appoinment.treatment} </h2>
                    <p>Your appoinment on <span className='text-orange-500 font-bold'>{appoinment.date}</span> at <span className='text-orange-500 font-bold'>{appoinment.slot}</span>  </p>
                    <p>Please pay: ${appoinment.price} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payments;