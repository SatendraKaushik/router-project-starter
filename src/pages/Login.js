
import loginImg from "../assets/login.png";
import React from "react";
import Template from "../component/template";
const Login=({setisloggedin})=> {
  return ( <Template 
    tittle="Welcome Back"
    desc1="Build skills for laptop,tomorrow,and beyond"
    desc2="Education to future-proof your career"
    image={loginImg}
    formtype="Login"
    setisloggedin={setisloggedin}
   />)
  
}

export default Login;
