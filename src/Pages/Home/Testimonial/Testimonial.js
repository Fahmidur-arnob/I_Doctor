import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import peopleOne from '../../../assets/images/people1.png';
import peopleTwo from '../../../assets/images/people2.png';
import peopleThree from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            review: 'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluorideLorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluoride',
            location: 'California',
            img: peopleOne
        },
        {
            _id: 2,
            name: 'Winson Henry',
            review: 'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluorideLorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluoride',
            location: 'California',
            img: peopleTwo
        },
        {
            _id: 3,
            name: 'Winson Henry',
            review: 'Lorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluorideLorem ipsum magnum shakalaka lorem thirtyfour treatment do now fluoride',
            location: 'California',
            img: peopleThree
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-2xl text-primary uppercase font-bold'>Testimonial</h4>
                    <h2 className='text-5xl'>What Our Patients Says!</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;