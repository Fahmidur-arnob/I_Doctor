import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='bg-neutral text-white mt-32 rounded-2xl'
        style={{
            background:`url(${appointment})`
        }}>
            <div className="hero rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-36 lg:w-1/2 hidden lg:block rounded-xl" alt='' />
                    <div>
                        <h4 className='text-2xl text-primary uppercase font-bold'>Appointment</h4>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Make Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;