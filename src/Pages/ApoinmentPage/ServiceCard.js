import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const ServiceCard = ({ service }) => {
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
                        <button className='btn btn-secondary text-white' disabled={slots.length === 0}>BOOK APPOINMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;