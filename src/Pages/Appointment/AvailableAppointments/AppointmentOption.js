import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-2xl text-primary mb-4">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto text-3xl">{name}</h2>
                <p className='text-neutral font-bold'>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p className='text-accent text-lg font-semibold'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-primary to-secondary mx-auto text-neutral">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;