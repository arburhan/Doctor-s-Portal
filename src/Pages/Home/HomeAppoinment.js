import React from 'react';
import doctorImage from '../../assets/images/doctor.png';
import appoinmentImage from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeAppoinment = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex-1 w-[606px]'>
                <img src={doctorImage} alt="" />
            </div>
            <div className='flex-1'>
                <p className='text-primary font-bold my-2'>Appoinment</p>
                <p className='my-2 text-[36px]'>Make an appointment Today</p>
                <p className='my-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get STarted</PrimaryButton>
            </div>
        </div>
    );
};

export default HomeAppoinment;