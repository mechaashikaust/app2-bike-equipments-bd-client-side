import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ReviewsSection from './ReviewsSection';

const Section3 = () => {


    const { isLoading, refetch, data: reviews } = useQuery(['review'], () =>
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>

console.log(reviews); 
    return (
        <div>

            {
                reviews.map((review,index) => <ReviewsSection

                    key={review._id}
                    review={review}
                    index={index}

                >
                </ReviewsSection>)
            }

        </div>
    );
};

export default Section3;