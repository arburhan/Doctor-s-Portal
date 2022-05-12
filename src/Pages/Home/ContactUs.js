import React from 'react';
import contactbg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Contact.css';


const ContactUs = () => {
    return (
        <section style={{
            background: `url(${contactbg})`
        }} className='my-24 text-center py-16'>
            <div>
                <p className='text-primary font-bold my-1'>Contact Us</p>
                <h3 className='mb-2 text-[36px] text-white'>Stay connected with us</h3>
            </div>
            <div className='flex flex-col gap-4 items-center my-8'>
                <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Your message" class="input input-bordered py-24 w-full max-w-xs" />
                <PrimaryButton customClass='px-12'> Submit </PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;