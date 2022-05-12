import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinments = ({ selected }) => {
    return (
        <div>
            <p className='p-3'>Available Appoinments on: {format(selected, 'PP')}</p>

        </div>
    );
};

export default AvailableAppoinments;