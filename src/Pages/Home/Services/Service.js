import React from 'react';

const Service = ({service}) => {
    const {name, description, icon} = service;
    return (
        <div className="card bg-gradient-to-r from-cyan-100 to-white shadow-2xl">
            <figure>
                <img src={icon} alt="" className="rounded-xl pt-5" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;