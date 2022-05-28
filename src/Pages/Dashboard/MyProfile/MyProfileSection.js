import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyProfileSection = ({ profile }) => { 

    const { _id, education, email, facebook, img, linkedin, location, name, phone, zipcode } = profile;

    // console.log(profile);

    const navigate = useNavigate();
    const handleNavigateToEquipmentDetail = id => {
        navigate(`/dashboard/updateprofile/${id}`);
    }

    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>

                    <h4> education: {education}</h4>
                    <h4> email: {email}</h4>
                    <h4> facebook: {facebook}</h4>
                    <h4>linkedin: {linkedin}</h4>
                    <h4>location: {location}</h4>
                    <h4>phone: {phone}</h4>
                    <h4>zipcode: {zipcode}</h4>

                    <div className="card-actions">
                        <button className="btn btn-active btn-ghost" onClick={() => handleNavigateToEquipmentDetail(_id) }>updateprofile </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default MyProfileSection;