import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddEquipment = () => {

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

    const imageStorageKey = "abd1d4a0b3f8dc39667d0ee7a0fba1d0";

    const onSubmit = async data => {

        // {9} image Uploading

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const equipment2 = {
                        name: data.name,
                        price: data.price,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        availableQuantity: data.availableQuantity,
                        description: data.description,
                        img: img
                    }

                    // Send to your DB
                    fetch('https://afternoon-sea-84552.herokuapp.com/equipment', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(equipment2)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Equipment Added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to Add Equipment');
                            }
                        })
                }
            })
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



                    {/***************Price INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                    {/***************Price INPUT FIELD END*/}


                    {/***************Minimum Order Quantity INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumOrderQuantity", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrderQuantity.message}</span>}
                    </label>
                    {/***************Minimum Order Quantity INPUT FIELD END*/}

                    {/***************Available Order Quantity INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Available Quantity</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Available Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        {/* {errors.availableQuantity?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>} */}
                    </label>
                    {/***************Available Order Quantity INPUT FIELD END*/}



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


                    {/***************Photo INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input

                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                    {/***************Photo INPUT FIELD END*/}



                </div>


                <input className='btn w-full max-w-xs mt-4 text-white font-bold' type="submit" value="Add" />

            </form>


        </div>
    );
};

export default AddEquipment;