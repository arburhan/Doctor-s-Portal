import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-portal-server-arburhan.vercel.app/services').then(res => res.json()))
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    /* 
    3 ways to store images
    1. third party storage // free for mongodb
    2. your own server
    3. Database: mongodb

    // file validate system: 
    1. YUP : file validation for react hook form
    */
    const imageStorageKey = '796d2b23f6713cb0cea1aac25e33af94';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    // send to database
                    fetch('https://doctors-portal-server-arburhan.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('doctors added successfully');
                                reset();
                            }
                            else {
                                toast.error('failed to add doctor');
                            }
                        })
                }
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="name" placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: true, message: 'Name is required' })} />

                    <label className="label">
                        {errors.name?.type && 'required' === <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email" placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", { required: true, message: 'Email is required' }, {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Enter valid mail'
                            }
                        })} />

                    <label className="label">
                        {errors.email?.type && 'required' === <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type && 'pattern' === <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("speciality", { required: true, message: 'Speciality is required' })} className="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>

                    <label className="label">
                        {errors.speciality?.type && 'required' === <span className="label-text-alt text-red-600">{errors.speciality.message}</span>}
                    </label>
                </div>
                {/* attatch file */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Attatch Image</span>
                    </label>
                    <input
                        type='file'
                        className="input  w-full max-w-xs"
                        {...register("image", { required: true, message: 'image is required' })} />

                    <label className="label">
                        {errors.image?.type && 'required' === <span className="label-text-alt text-red-600">{errors.image.message}</span>}

                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;