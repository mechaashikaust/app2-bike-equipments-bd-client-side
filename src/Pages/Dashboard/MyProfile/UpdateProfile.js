import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const UpdateProfile = () => {
    const { id } = useParams();

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // {8} Add Doctors data getting

    // const { data: profiles, isLoading, } = useQuery('profiles', () => fetch('https://afternoon-sea-84552.herokuapp.com/profile')
    //     .then(res => res.json())
    // )


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
                    const profile = {
                        name: user.displayName,
                        email: user.email,
                        phone: data.phone,
                        education: data.education,
                        location: data.location,
                        zipcode: data.zipcode,
                        facebook: data.facebook,
                        linkedin: data.linkedin,
                        img: img
                    }

                    // Send to your DB
                    fetch(`https://afternoon-sea-84552.herokuapp.com/profile/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.modifiedCount) {
                                toast.success('Data Added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to Add Data');
                            }
                            console.log(inserted);
                        })
                }
            })
    };
    // if (isLoading) return <Loading></Loading>
    console.log(id);

    return (
        <div>
            <h2 className='text-2xl'>My Profile</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">



                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        value={user.displayName}
                        disabled
                    />

                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        value={user.email}
                        disabled
                    />



                    {/***************Phone INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Phone</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Phone Number is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                    </label>
                    {/***************Phone INPUT FIELD END*/}


                    {/***************Education INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Education</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                    </label>
                    {/***************Education INPUT FIELD END*/}

                    {/***************City / District INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">City / District</span>

                    </label>
                    <input

                        type="text"
                        placeholder="City / District"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        {/* {errors.availableQuantity?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>} */}
                    </label>
                    {/***************City / District INPUT FIELD END*/}

                    {/***************Zip Code INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Zip Code</span>

                    </label>
                    <input

                        type="number"
                        placeholder="Zip Code"
                        className="input input-bordered w-full max-w-xs"
                        {...register("zipcode", {
                            required: {
                                value: true,
                                message: 'Zip Code is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.zipcode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.zipcode.message}</span>}
                        {/* {errors.availableQuantity?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>} */}
                    </label>
                    {/***************Zip Code INPUT FIELD END*/}



                    {/***************Facebook INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Facebook</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Facebook "
                        className="input input-bordered w-full max-w-xs"
                        {...register("facebook", {
                            required: {
                                value: true,
                                message: 'Facebook is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.facebook?.type === 'required' && <span className="label-text-alt text-red-500">{errors.facebook.message}</span>}
                    </label>
                    {/***************Facebook INPUT FIELD END*/}

                    {/***************Linkedin INPUT FIELD START*****Daijy + React Form************/}
                    <label className="label">
                        <span className="label-text">Linkedin</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Linkedin "
                        className="input input-bordered w-full max-w-xs"
                        {...register("linkedin", {
                            required: {
                                value: true,
                                message: 'Linkedin is Required'
                            }
                        }
                        )}

                    />
                    <label>
                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                    </label>
                    {/***************Linkedin INPUT FIELD END*/}


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


                <input className='btn w-full max-w-xs mt-4 text-white font-bold' type="submit" value="update" />

            </form>


        </div>
    );
};

export default UpdateProfile;