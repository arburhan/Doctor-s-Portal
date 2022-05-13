import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center">Login</h2>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;