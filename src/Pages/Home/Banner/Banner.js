import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container hero min-h-screen md:px-12 header-parent">
            <div className="hero-content flex-col lg:flex-row-reverse header-comp ">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;