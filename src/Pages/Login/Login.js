import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='shadow-2xl m-4 p-5 rounded-2xl'>
                <h1 className='text-5xl text-accent mb-8'>Login</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-textv font-bold">Email</span>
                        </label>

                        <input type="text" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-textv font-bold">Password</span>
                        </label>

                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("firstName")} />

                        <label className="label mb-7">
                            <span className="label-text-alt font-semibold">Forgot Password?</span>
                        </label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input type="submit" className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full' />
                </form>
            </div>
        </div>
    );
};

export default Login;