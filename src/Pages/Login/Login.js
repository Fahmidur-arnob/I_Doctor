import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='shadow-2xl m-4 p-7 rounded-2xl w-96'>
                <h1 className='text-5xl text-accent mb-8'>Login</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-textv font-bold">Email</span>
                        </label>

                        <input type="email" name='email' className="input input-bordered w-full max-w-xs" {...register("email")} required />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-textv font-bold">Password</span>
                        </label>

                        <input type="password" name='password' className="input input-bordered w-full max-w-xs" {...register("password")} required/>

                        <label className="label mb-7">
                            <span className="label-text-alt font-semibold">Forgot Password?</span>
                        </label>
                    </div>

                    <input type="submit" value="Login" className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full' />
                </form>
                <p className='mt-5'>New to Doctor's Portal? <Link to='/signup' className='text-secondary font-semibold'>Create New Account</Link></p>

                <div className="divider">OR</div>

                <button type="submit" className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;