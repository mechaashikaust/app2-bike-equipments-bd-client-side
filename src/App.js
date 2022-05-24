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
import MyAppointments from './Pages/Dashboard/MyEquipments';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/Login/RequireAdmin/RequireAdmin';
import EquipmentDetail from './Pages/Home/EquipmentDetail/EquipmentDetail';
import About from './Pages/About/About';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
 
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
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='users' element={

            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>

          }></Route>

          <Route path='addDoctor' element={

            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>

          }></Route>

          <Route path='manageDoctor' element={

            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
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
