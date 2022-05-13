import { format } from 'date-fns';
import React from 'react';
// import { format } from 'date-fns';

const BookingModal = ({ treatment, selected }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg  text-secondary">Booking for: {name}</h3>
                    <form className='grid grid-cols-1 gap-4 justify-items-center my-3'>
                        <input type="text" value={format(selected, 'PP')} class="input input-bordered w-full max-w-xs" disabled />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="SUBMIT" class="btn btn-accent text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;