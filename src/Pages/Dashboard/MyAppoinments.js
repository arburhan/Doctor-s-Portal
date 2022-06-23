import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');

                        navigate('/');

                    }

                    return res.json()
                })
                .then(data => {
                    setAppoinments(data)
                })
        }
    }, [user])
    return (
        <div>
            <p>My Appoinments {appoinments.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patient}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} > <button className="btn btn-success">PayNow</button> </Link>}
                                        {(a.price && a.paid) && <div>
                                            <p><span className="text-success">Paid</span></p>
                                            <p>TransactionId: <span className="text-success">{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;