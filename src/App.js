import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
// import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
// import Appointment from './Pages/Appointment/Appointment/Appointment';
import Registration from './Pages/Login/Registration/Registration'
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/Login/RequireAdmin/RequireAdmin';
import EquipmentDetail from './Pages/Home/EquipmentDetail/EquipmentDetail';
import About from './Pages/About/About';
import AddEquipment from './Pages/Dashboard/AddEquipment';
import ManageEquipments from './Pages/Dashboard/ManageEquipments';
import Payment from './Pages/Dashboard/Payment';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './Pages/Dashboard/MyProfile/UpdateProfile';
import AddProfile from './Pages/Dashboard/MyProfile/AddProfile';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MyEquipments from './Pages/Dashboard/MyEquipments';

function App() {

  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/equipment/:equipmentId' element={<EquipmentDetail></EquipmentDetail>}></Route>
        <Route path="about" element={<About />} />

        {/* <Route path="/updateequipment/:id" element=
          {
            <RequireAuth>
              <UpdateEquipment></UpdateEquipment>
            </RequireAuth>
          }
        ></Route> */}

        {/* <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } /> */}
     
     







        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>

          <Route path='orders' element={<MyEquipments></MyEquipments>}></Route>

          <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>

          <Route path='updateprofile/:id' element={<UpdateProfile></UpdateProfile>}></Route>

          <Route path='addprofile' element={ <AddProfile></AddProfile>}></Route>



          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='users' element={

            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>

          }></Route>

          <Route path='addequipment' element={

            <RequireAdmin>
              <AddEquipment></AddEquipment>
            </RequireAdmin>

          }></Route>

          <Route path='manageDoctor' element={

            <RequireAdmin>
              <ManageEquipments></ManageEquipments>
            </RequireAdmin>

          }></Route>

        </Route>





        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
