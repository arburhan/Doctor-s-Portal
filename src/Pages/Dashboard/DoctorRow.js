import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { email, name, img, speciality } = doctor;

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
                <th>
                    <label
                        onClick={() => setDeletingDoctor(doctor)}
                        for="deleteModal" className="btn btn-error modal-button">Delete</label>

                </th>
            </tr>

        </>
    );
};

export default DoctorRow;