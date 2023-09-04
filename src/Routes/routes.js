// import React, { useEffect } from "react";
// import { Toaster } from "react-hot-toast";
// import { BrowserRouter as Router, Route, Link,Navigate, Route, Routes, useLocation } from "react-router-dom";
// import "react-notifications/lib/notifications.css";
// import { useDispatch } from "react-redux";
// import Login from "../signup/login";
// import Signup from "../signup/signup";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Error404 from "./pages/error/Error404";
// import Error500 from "./pages/error/Error500";
// import { login, logout } from "./redux/User";
// import ChangePassword from "./pages/auth/ChangePassword";
// import SendWebphoneDataTOCRM from "./pages/SendWebphoneDataTOCRM";
// import api from "./utils/api";
// import { useNavigate } from "react-router-dom";

// const Router = () => {
//     const location = useLocation();
//     const dispatch = useDispatch();
//     const pathName = location.pathname;
//     const navigate = useNavigate();
//     const userI = JSON.parse(localStorage.getItem("support_user"));
//     const isLoggedIn = userI?.isLoggedIn ?? false;
//     dispatch(login({ ...userI }));
    
//     return (
//       <>
//      <Router>
//         <Routes>
//           <Route path="/" element={<Signup to="/" />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/error404" element={<Error404 />} />
//           <Route exact path="/error500" element={<Error500 />} />
//           <Route exact path="/changepassword" element={<ChangePassword />} />
//           <Route exact path="/webphone" element={<SendWebphoneDataTOCRM />} />
//         </Routes>
//         </Router>
//         <div>
//           {/* <Toaster position="top-right" toastOptions={{
//             success: {
//               style: {
//                 background: '#05A677',
//                 color: "#fff"
//               },
//             },
//             info: {
//               style: {
//                 background: '#0948B3',
//                 color: "#fff"
//               },
//             },
//             error: {
//               style: {
//                 background: '#FA5252',
//                 color: "#fff"
//               },
//             },
//           }} /> */}
//         </div>
//       </>
//     );
//   };
  
//   export default Router;