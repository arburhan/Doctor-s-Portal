import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, img, speciality } = doctor;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Doctor avatar" />
                        </div>
                    </div>
                </th>
                <th>{name}</th>
                <th>{speciality}</th>
                <th> <button className='btn btn-error' >Delete</button> </th>
            </tr>

        </>
    );
};

export default DoctorRow;