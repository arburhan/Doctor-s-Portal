import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppoinments(data))
        }
    }, [user])
    return (
        <div>
            <p>My Appoinments {appoinments.length}</p>
        </div>
    );
};

export default MyAppoinments;