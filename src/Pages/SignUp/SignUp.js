import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm('');
    const { createUser } = useContext(AuthContext);

    //password auth;
    const handleSignUp = (data) => {
        console.log("Sign Up Data: ", data);

        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='shadow-2xl m-4 p-7 rounded-2xl w-96'>
                <h1 className='text-5xl text-accent text-center'>Sign Up</h1>
                <div className="divider mt-4 mb-10"></div>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="font-bold">Name</span>
                        </label>

                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        {errors.name && <p className='text-amber-800 font-semibold'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>

                        <input
                            type="email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Please Provide Your Email",
                            })}
                        />
                        {errors.email && <p className='text-amber-800 font-semibold'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>

                        <input
                            type="password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is REQUIRED",
                                minLength: {
                                    value: 6,
                                    message: "Password Must be 6 Characters or Longer."
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    message: "Password must contain atleast one uppercase letter, one number and one special character and in total 6 characters or more.",
                                }
                            })}
                        />
                        {errors.password && <p className='text-amber-800 font-semibold'>{errors.password?.message}</p>}

                    </div>

                    <input type="submit" value="Login" className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full mt-8' />
                </form>
                <div className="divider m-8">OR</div>
                <p className='mt-5'>Already Have an Account on Doctor's Portal? <Link to='/login' className='text-secondary font-semibold'>Log In</Link></p>

                {/* <div className="divider">OR</div> */}

                {/* <button type="submit" className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-full'>Continue With Google</button> */}
            </div>
        </div>
    );
};

export default SignUp;