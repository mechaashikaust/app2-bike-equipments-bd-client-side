import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const NoData = () => {
    const [user] = useAuthState(auth);
    // const [profiles, setProfiles] = useState([]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {

    //         // {4} My Appointemnts with verifying JWT

    //         fetch(`http://localhost:5000/profile?email=${user.email}`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {


    //                 if (res.status === 401 || res.status === 403) {
    //                     // signOut(auth);
    //                     // localStorage.removeItem('accessToken');
    //                     navigate('/')
    //                 }

    //                 return res.json()
    //             })
    //             .then(data => {

    //                 setProfiles(data);
    //             });
    //     }
    // }, [user]);


    return ( 
        <div>


        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                {/* <img src={img} alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.displayName}</h2>
                <h4> email: {user.email}</h4>
                <h4> education: Please Add Your Data</h4>
                
                <h4> facebook: Please Add Your Data</h4>
                <h4>linkedin: Please Add Your Data</h4>
                <h4>location: Please Add Your Data</h4>
                <h4>phone: Please Add Your Data</h4>
                <h4>zipcode: Please Add Your Data</h4>

                <div className="card-actions">

                <button className="btn btn-active btn-ghost"><Link to="/dashboard/addprofile" > add data </Link></button>

                </div>
            </div>
        </div>



    </div>
    );
};

export default NoData;