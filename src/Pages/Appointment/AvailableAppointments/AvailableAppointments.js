import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-24'>
            <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 text-center mt-16 mb-24'>Available Appointments {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-5'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;