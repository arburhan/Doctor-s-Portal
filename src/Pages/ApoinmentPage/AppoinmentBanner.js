import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ selected, setSelected }) => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                    <div className='px-16 '>
                        <DayPicker className='shadow-lg rounded-xl p-4'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;