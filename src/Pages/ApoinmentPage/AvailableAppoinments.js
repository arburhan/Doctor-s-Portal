import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppoinments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState();
    const formateDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formateDate], () =>
        fetch(`http://localhost:5000/available?date=${formateDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formateDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formateDate])
    return (
        <div className='container mx-auto'>
            <p className='text-center text-secondary font-bold font-[22px]'>Available Appoinments on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment}></ServiceCard>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;