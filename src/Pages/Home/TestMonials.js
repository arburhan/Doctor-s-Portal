import React from 'react';
import quote from '../../assets/icons/quote.svg';

const TestMonials = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold my-1'>Testmonial</p>
                    <p className='mb-2 text-[36px]'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

        </section>
    );
};

export default TestMonials;