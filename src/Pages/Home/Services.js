import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            image: fluoride,
            title: "Fluoride Treatment",
            description: "Are ba re ami to egle service dei tomar ki lagbe?"
        },
        {
            id: 2,
            image: cavity,
            title: "Cavity Filling",
            description: "Are ba re ami to egle service dei tomar ki lagbe?"
        },
        {
            id: 3,
            image: whitening,
            title: "Teeth Whitening",
            description: "Are ba re ami to egle service dei tomar ki lagbe?"
        },
    ]
    return (
        <div className='my-12'>
            <div className='text-center'>
                <p className='text-primary font-bold'>OUR SERVICES</p>
                <p className='text-[36px]'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;