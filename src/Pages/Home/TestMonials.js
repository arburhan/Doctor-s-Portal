import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const TestMonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people1,
            city: "California"
        },
        {
            id: 2,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people2,
            city: "California"
        },
        {
            id: 3,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people3,
            city: "California"
        }
    ]
    return (
        <section className='container mx-auto px-5 md:px-0'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold my-1'>Testmonial</p>
                    <p className='mb-2 text-[36px]'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>

        </section>
    );
};

export default TestMonials;