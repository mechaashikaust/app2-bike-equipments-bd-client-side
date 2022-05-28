import React from 'react';

const Review = ({ review }) => {

    const { name, ratings, description } = review;

    console.log(ratings);

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mt-12 md:mt-5">
            <div className="card-body">
                


                <div className=' text-center mb-5'>

                    <div className="">
                        <h2 className='text-xl mb-3'><span className='text-primary'>Rating  : </span>{ratings} Star</h2>
                    </div>

                    <div>
                        <h4 className='text-xl'> <span className='text-primary'>Equipment Name:</span> {name}</h4>
                    </div>
                    
                </div>
                <span className='text-primary text-center text-2xl'>Review</span>
                <p className='text-center'>{description}</p>

            </div>
        </div>
    );
};

export default Review;