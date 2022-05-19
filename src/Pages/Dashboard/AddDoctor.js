import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data)
    };

    return (
        <div>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
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
                    <input
                        type="text" placeholder="Speciality"
                        className="input input-bordered w-full max-w-xs"
                        {...register("speciality", { required: true, message: 'Speciality is required' })} />

                    <label className="label">
                        {errors.speciality?.type && 'required' === <span className="label-text-alt text-red-600">{errors.speciality.message}</span>}
                    </label>
                </div>

                {
                    'loading' || 'updating' ? <button className="btn loading w-full max-w-xs text-white">adding</button> : <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                }
            </form>
        </div>
    );
};

export default AddDoctor;