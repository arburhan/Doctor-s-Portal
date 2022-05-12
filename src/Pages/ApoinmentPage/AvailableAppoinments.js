import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AvailableAppoinments = ({ selected }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('AppoinmentTime.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary font-bold font-[22px]'>Available Appoinments on: {format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinments;