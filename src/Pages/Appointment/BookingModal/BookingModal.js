import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName: name,
            slot,
            email,
            phone,
        }

        console.log(booking);
        setTreatment(null);
        toast.success("Booking Confirmed");
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder='Your Name...' className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder='Email Address...' className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder='Your Phone Number' className="input input-bordered w-full " />
                        <br />
                        <input type="submit" value="Submit" className='w-full btn btn-neutral' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;