import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content my-5 ">

                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your DashBoard</h2>

                <Outlet></Outlet>



            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}

                    <li><Link to="/dashboard">My Profile</Link></li>


                    {
                        !admin &&
                        <>

                            <li><Link to="/dashboard/orders">My Orders</Link></li>
                            <li><Link to="/dashboard/review">Add Reviews</Link></li>

                        </>
                    }


                    {
                        admin &&
                        <>

                            <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/users">Make Admin</Link></li>
                            <li><Link to="/dashboard/addequipment">Add an Equipment</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Manage Equipments</Link></li>

                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;