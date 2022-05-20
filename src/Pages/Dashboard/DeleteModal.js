import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    console.log(deletingDoctor);
    const { name, email } = deletingDoctor;
    const handleDelete = () => {
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
                    setDeletingDoctor(null);
                    refetch();
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure delete?</h3>
                    <p className="py-4">If you delete  doctor parmanently delete from database &  you can't recover it</p>
                    <div className="modal-action">
                        <button onClick={() => { handleDelete() }} className='btn btn-error' >Delete</button>
                        <label for="deleteModal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;