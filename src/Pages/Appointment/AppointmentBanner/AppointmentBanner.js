import React, { useState } from 'react';
import chairImage from '../../../assets/images/chair.png';
import appointment from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <header className='my-6 mb-64'>
            <div className="hero" style={{
            background: `url(${appointment})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `contain, cover`
        }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chairImage} className="s rounded-lg shadow-2xl" alt='Dentists Chair' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selectedDate={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You Picked : {format(selectedDate, 'PP')} </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;