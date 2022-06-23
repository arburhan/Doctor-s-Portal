import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://desolate-bayou-01766.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make admin successfully');
                }
            })

    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td> {role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
                <td> <button className="btn btn-xs">Remove User</button> </td>
            </tr>
        </>
    );
};

export default UserRow;