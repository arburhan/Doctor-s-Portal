import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    const { name, slots, price } = service;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}!</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <small>Price: ${price}</small>
                    <div className="card-actions">
                        <label onClick={() => setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white modal-button">BOOK APPOINMENT</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;