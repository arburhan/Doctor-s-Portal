import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-secondary">{name}!</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div class="card-actions">
                        <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" class="btn btn-secondary text-white modal-button">BOOK APPOINMENT</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;