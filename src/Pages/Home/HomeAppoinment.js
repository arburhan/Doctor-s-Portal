import React from 'react';
import doctorImage from '../../assets/images/doctor.png';
import appoinmentImage from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeAppoinment = () => {
    return (
        <div style={{
            height: '533px',
            background: `url(${appoinmentImage}) `,
            backgroundRepeat: 'no-repeat',
        }} className='flex justify-center items-center my-32'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-117px]' src={doctorImage} alt="" />
            </div>
            <div className='flex-1 px-6'>
                <p className='text-primary font-bold my-2'>Appoinment</p>
                <div className='text-white my-5'>
                    <p className='my-2 text-[36px]'>Make an appointment Today</p>
                    <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                </div>
                <PrimaryButton>Get STarted</PrimaryButton>
            </div>
        </div>
    );
};

export default HomeAppoinment;