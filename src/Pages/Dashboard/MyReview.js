import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const MyReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // {8} Add Doctors data getting

    const { data: equipments, isLoading, } = useQuery('equipments', () => fetch('https://afternoon-sea-84552.herokuapp.com/equipment')
        .then(res => res.json())
    )


    /**
        * 3 ways to store images
        * 1. Third party storage //Free open public storage is ok for Practice project 
        * 2. Your own storage in your own server (file system)
        * 3. Database: Mongodb 
        * 
        * YUP: to validate file: Search: Yup file validation for react hook form
    */

    // const imageStorageKey = "abd1d4a0b3f8dc39667d0ee7a0fba1d0";

    const onSubmit = async data => {

        // {9} image Uploading

        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        //             const img = result.data.url;
        //             const review = {
        //                 name: data.name,
        //                 ratings: data.ratings,
        //                 description: data.description,
        //                 img: img
        //             }

        //             // Send to your DB
        //             fetch('https://afternoon-sea-84552.herokuapp.com/review', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //                 },
        //                 body: JSON.stringify(review)
        //             })
        //                 .then(res => res.json())
        //                 .then(inserted => {
        //                     if (inserted.insertedId) {
        //                         toast.success('Equipment Added Successfully');
        //                         reset();
        //                     }
        //                     else {
        //                         toast.error('Failed to Add Equipment');
        //                     }
        //                 })
        //         }
        //     })

        const url = `https://afternoon-sea-84552.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review Added Successfully');
                    reset();
                }
                else {
                    toast.error('Failed to Add Review');
                }
            });





    };

    if (isLoading) return <Loading></Loading>


    return (
        <div>
            <h2 className='text-2xl'>Add a new User</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">



                    {/***************Name INPUT FIELD START*****************/}
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>

                    <select {...register('name')} className="input input-bordered select w-full max-w-xs">
                        {
                            equipments.map(equipment => <option
                                key={equipment._id}
                                value={equipment.name}
                            >{equipment.name}</option>)
                        }

                    </select>

                    {/***************Name INPUT FIELD END*/}

                    {/***************Ratings INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Ratings</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Ratings"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            },
                            pattern: {
                                value: /[^(6-9)]/,
                                message: 'Rating are from 1-5'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    </label>
                    {/***************Ratings INPUT FIELD END*/}



                    {/***************Description INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <input

                        type="text"
                        placeholder="description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                    {/***************Description INPUT FIELD END*/}





                </div>


                <input className='btn w-full max-w-xs mt-4 text-white font-bold' type="submit" value="Add" />

            </form>


        </div>
    );
};

export default MyReview;