import React from 'react';
import treatmentImage from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExeptionalService = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-[322px] md:w-[458px] rounded-lg' src={treatmentImage} />
                    <div className='md:px-20'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExeptionalService;