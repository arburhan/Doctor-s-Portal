import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || googleUser);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);


    if (error || googleError) {
        errorMessage = <p className='text-red-600 pb-3'>Error: {error?.message || googleError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { required: true, message: 'Password is required' },
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'Password minimum length 6'
                                        }
                                    }, {
                                    // pattern: {
                                    //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/,
                                    //     message: 'Enter valid mail'
                                    // }
                                })} />

                            <label className="label">
                                {errors.password?.type && 'required' === <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {/* {errors.password?.type && 'pattern' === <span className="label-text-alt text-red-600">{errors.password.message}</span>} */}
                                {errors.password?.type && 'minLength' === <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                            {errorMessage}
                        </div>

                        {
                            loading ? <button className="btn loading w-full max-w-xs text-white">loading</button> : <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        }
                    </form>
                    <small className='text-center'>New to Doctors Portsl? <Link to='/signup' className="text-secondary ">Create new account</Link> </small>

                    <div className="divider">OR</div>
                    {
                        googleLoading ? <button className="btn loading w-full max-w-xs text-white">loading</button> : <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline">Continue with google</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Login;