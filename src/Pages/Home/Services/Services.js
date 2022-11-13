import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id:1, 
            name: 'Fluoride Treatment',
            description:'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluoride',
            icon: fluoride
        },
        {
            id:2, 
            name: 'Cavity Filling',
            description:'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now cavity',
            icon: cavity
        },
        {
            id:3, 
            name: 'Teeth Whitening',
            description:'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now whitening',
            icon: whitening
        },
    ]

    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-primary text-center uppercase text-2xl font-bold'>Services</h1>
                <h1 className='text-neutral font-semibold text-center mt-4 text-5xl'>Services we provide</h1>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 mt-16 mb-20'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;