import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={chair} className="max-w-sm rounded-lg shadow-xl" alt='Dentist Chair' />
                    </figure>
                    <div className='px-3 py-10 md:px-16 md:py-0 '>
                        <DayPicker className='shadow-lg rounded-xl p-4'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;