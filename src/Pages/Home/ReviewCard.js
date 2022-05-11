import React from 'react';


const ReviewCard = ({ review }) => {
    const { name, image, reviewText, city } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviewText}</p>
                <div className="flex items-center my-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;