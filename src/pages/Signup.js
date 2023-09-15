
import signupImg from "../assets/signup.png";
import React from "react";
import Template from "../component/template";
const Signup=({setisloggedin})=> {
  return (
  <Template 
    tittle="Join the Millions learning to code with studyNation for free"
    desc1="Build Skills for laptop,tomorrow,and beyond"
    desc2="Education to future-proof your career"
    image={signupImg}
    formtype="signup"
    setisloggedin={setisloggedin}
   />)
}

export default Signup;
