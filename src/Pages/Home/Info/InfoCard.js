import React from 'react';

const InfoCard = ({ title, description, infoBGClass, image }) => {
    return (
        <div className={`card lg:card-side bg-base-100 p-2 shadow-xl ${infoBGClass}`}>
            <figure className='p-2'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title py-1">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;