import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-2xl mb-6 b bg-gradient-to-r from-accent to-neutral">
            <div className="card-body text-center">
                <h2 className="card-title text-white mx-auto text-3xl">{name}</h2>
                <p className='text-zinc-300 font-bold'>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p className='text-slate-400 text-lg font-semibold'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal"
                        
                        className="btn bg-gradient-to-r from-primary to-secondary  mx-auto text-gray-900"

                        onClick={() => setTreatment(appointmentOption)}

                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;