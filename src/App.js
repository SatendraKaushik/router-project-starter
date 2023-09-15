import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/nav";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./component/private";
function App() {
  const[Islogged ,setisloggedin] =useState(false);
  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar Islogged={Islogged} setisloggedin={setisloggedin}/>
    <Routes>
      <Route path="/" element={<Home  Islogged={Islogged}  />}/>
      <Route path="/login" element={<Login setisloggedin={setisloggedin}/>}/>
      <Route path="/signup" element={<Signup setisloggedin={setisloggedin}/>}/>
      <Route path="/dashboard"  element={ 
      <PrivateRoute Islogged={Islogged} setisloggedin={setisloggedin}><Dashboard /></PrivateRoute>}/>
    </Routes>
  </div>
  )
}

export default App;
