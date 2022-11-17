import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='shadow-2xl m-4 p-7 rounded-2xl w-96'>
                <h1 className='text-5xl text-accent text-center'>Login</h1>
                <div className="divider mt-2 mb-10"></div>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-textv font-bold">Email</span>
                        </label>

                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email is REQUIRED"
                            })}
                        />
                        {errors.email && <p className='text-rose-700 font-semibold'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-textv font-bold">Password</span>
                        </label>

                        <input
                            type="password"
                            name='password'
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is REQUIRED",
                                minLength: {
                                    value: 6,
                                    message:"Password Must be 6 Characters or Longer."
                                },
                            })}
                        />
                        {errors.password && <p className='text-rose-700 font-semibold'>{errors.password?.message}</p>}
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