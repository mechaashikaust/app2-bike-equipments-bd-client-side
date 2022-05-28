import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import MyProfileSection from './MyProfileSection';
import NoData from './NoData';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();


    // const { data: profiles, isLoading } = useQuery('profiles', () => fetch(`http://localhost:5000/profile?email=${user.email}`)
    //     .then(res => res.json())
    // )

    // if (isLoading) return <Loading></Loading>

    // console.log(profiles);


    useEffect(() => {
        if (user) {

            // {4} My Appointemnts with verifying JWT

            fetch(`http://localhost:5000/profile?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {


                    if (res.status === 401 || res.status === 403) {
                        // signOut(auth);
                        // localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {

                    setProfiles(data);
                });
        }
    }, [user]);

    // console.log(profiles);


    // const emailFromProfile = profiles.map(profile => profile.email);
    // const email = JSON.stringify(emailFromProfile);

    // console.log(email);

    return (
        <div>


            {
                (profiles.length)
                    ?
                    profiles.map(profile =>

                        <MyProfileSection

                            key={profile._id}
                            profile={profile}

                        ></MyProfileSection>

                    )
                    :
                    <NoData></NoData>
            }

            {/* {
                profiles.map(profile =>

                    <MyProfileSection

                        key={profile._id}
                        profile={profile}

                    ></MyProfileSection>

                )
            } */}





        </div>
    );
};

export default MyProfile;