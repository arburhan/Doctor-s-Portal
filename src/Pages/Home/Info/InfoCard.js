import React from 'react';

const InfoCard = ({ title, description, infoBGClass, image }) => {
    return (
        <div class={`card lg:card-side bg-base-100 p-2 shadow-xl ${infoBGClass}`}>
            <figure className='p-2'><img src={image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title py-1">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;