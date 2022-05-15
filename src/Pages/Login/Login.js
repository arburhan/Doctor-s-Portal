import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", { required: true, message: 'Email is required' }, {
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Enter valid mail'
                                    }
                                })} />

                            <label class="label">
                                {errors.email?.type && 'required' === <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type && 'pattern' === <span class="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="password" placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
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

                            <label class="label">
                                {errors.password?.type && 'required' === <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {/* {errors.password?.type && 'pattern' === <span class="label-text-alt text-red-600">{errors.password.message}</span>} */}
                                {errors.password?.type && 'minLength' === <span class="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;