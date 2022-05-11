import React from 'react';
import InfoCard from './InfoCard';
import clockIcon from '../../../assets/icons/clock.svg';
import markerIcon from '../../../assets/icons/marker.svg';
import phoneIcon from '../../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-white'>
                <InfoCard title="Opening Hours" description="kokhon khuli ar kokhon khuli thik nai. hature daktar hami bapu :)." infoBGClass="bg-gradient-to-r from-secondary to-primary" image={clockIcon}></InfoCard>
                <InfoCard title="Visiting our location" description="Naogaon-4, Rajshahi, Bangladesh" infoBGClass="bg-accent" image={markerIcon}></InfoCard>
                <InfoCard title="Contact us now" description="+8801737509339" infoBGClass="bg-gradient-to-r from-secondary to-primary" image={phoneIcon}></InfoCard>
            </div>
        </div>
    );
};

export default Info;