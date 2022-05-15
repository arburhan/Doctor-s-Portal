import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { format } from 'date-fns';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const { _id, name, slots } = treatment;
    const handleBooking = e => {
        e.preventDefault();
        const selectSlot = e.target.slot.value;
        setTreatment(null)
        console.log(selectSlot);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center my-3'>
                        <input type="text" value={format(selected, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =>
                                    <option value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input type="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="phone" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="SUBMIT" className="btn btn-accent text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;