import React from 'react';
import { useQuery } from 'react-query';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Loading from '../../Shared/Loading/Loading';
import Review from './Review';

const Section6 = () => {

    const { isLoading, refetch, data: reviews } = useQuery(['review'], () =>
        fetch(`https://afternoon-sea-84552.herokuapp.com/review`)
            .then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>
    return (
        <section className='my-28'>

            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'> What our Clients Say</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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

export default Section6;