import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { email, name, img, speciality } = doctor;
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`)
                    refetch();
                }
            })

    }
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
                <th> <button onClick={() => { handleDelete(email) }} className='btn btn-error' >Delete</button> </th>
            </tr>

        </>
    );
};

export default DoctorRow;