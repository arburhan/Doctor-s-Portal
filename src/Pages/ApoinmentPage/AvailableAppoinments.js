import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinments = ({ selected }) => {
    return (
        <div>
            <p className='text-center text-secondary font-bold font-[22px]'>Available Appoinments on: {format(selected, 'PP')}</p>

        </div>
    );
};

export default AvailableAppoinments;