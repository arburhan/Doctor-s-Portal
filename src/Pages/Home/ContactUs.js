import React from 'react';
import contactbg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const ContactUs = () => {
    return (
        <section style={{
            background: `url(${contactbg})`
        }} className='my-24 text-center py-16 px-6'>
            <div>
                <p className='text-primary font-bold my-1'>Contact Us</p>
                <h3 className='mb-2 text-[36px] text-white'>Stay connected with us</h3>
            </div>
            <div className='flex flex-col gap-4 items-center my-8'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full lg:max-w-md max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full lg:max-w-md max-w-xs" />
                <textarea type="text" placeholder="Your message" className="w-full p-4 max-w-md rounded-md" rows={6} />
                <PrimaryButton customClass='px-12'> Submit </PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;