import React from 'react';
import InfoCard from './InfoCard';
import clockIcon from '../../../assets/icons/clock.svg';
import markerIcon from '../../../assets/icons/marker.svg';
import phoneIcon from '../../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='md:px-12 px-5 grid grid-cols-1 lg:grid-cols-3 gap-4 text-white'>
            <InfoCard title="Opening Hours" description="kokhon khuli na khuli thik nai bapu :)." infoBGClass="bg-gradient-to-r from-secondary to-primary" image={clockIcon}></InfoCard>
            <InfoCard title="Visiting our location" description="Naogaon-4, Rajshahi, Bangladesh" infoBGClass="bg-accent" image={markerIcon}></InfoCard>
            <InfoCard title="Contact us now" description="+8801737509339" infoBGClass="bg-gradient-to-r from-secondary to-primary" image={phoneIcon}></InfoCard>
        </div>
    );
};

export default Info;