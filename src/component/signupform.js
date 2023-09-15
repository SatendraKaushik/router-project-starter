import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {toast} from"react-hot-toast"
import { useNavigate } from "react-router-dom";

const Signupform = ({setisloggedin}) => {
const navigate=useNavigate();
const[accounttype,setaccount]=useState("student")
    const [formData, setdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
       cp: ""
    })
    const [showpassword, setshowpassword] = useState(false)
    const [showpcp, setshowcp] = useState(false);
   
    function changehandler(event) {
        setdata((predata) => (
            {
                ...predata,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submithandler(event){
        event.preventDefault();
        if(formData.password!=formData.cp){
            toast.error("password Does Not Match");
            return;
        }
        navigate("/dashboard")
        setisloggedin(true);
        toast.success("Account Created");
      
        const acdata={
            ...formData
        }
        const finaldata={
            ...acdata,
            accounttype
    
        }
        console.log(finaldata);
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={()=> setaccount('student')}
                className={`${accounttype==="student"?"bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200 "} first-letter:first-line:marker:selection:
                py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={()=> setaccount("instructor")}
                  className={`${accounttype==="instructor"?"bg-richblack-900 text-richblack-5":
                  "bg-transparent text-richblack-200 "} first-letter:first-line:marker:selection:
                  py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
            </div>
            <form onSubmit={submithandler}>
                <div>
                   <div className="flex justify-between mt-4">
                   <lable >
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup  className="text-pink-200">*</sup></p>
                        <input
                         required
                            type="text"
                            onChange={changehandler}
                            placeholder="Enter First Name"
                            value={formData.firstname}
                            name="firstname"
                            className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]"/>
                    </lable>
                    <lable>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup  className="text-pink-200">*</sup></p>
                        <input required
                            type="text"
                            onChange={changehandler}
                            placeholder="Enter LAST Name"
                            value={formData.lastname}
                            name="lastname"
                            className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]"/>
                    </lable>
                   </div>
                   <div className="mt-[10px]">
                   <lable className="w-full mt-4">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email <sup  className="text-pink-200">*</sup></p>
                        <input required
                            type="text"
                            onChange={changehandler}
                            placeholder="Enter Email address"
                            value={formData.email}
                            name="email"
                            className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]"/>
                    </lable>
                   </div>
                    <div className="flex w-full gap-x-4">
                        <lable className="relative w-full mt-4">
                            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup  className="text-pink-200">*</sup></p>
                            <input required
                                type={showpassword ? ("text") : ('password')}
                                onChange={changehandler}
                                name="password"
                                className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]"
                                placeholder="Enter Email Password"
                                value={formData.password} />
                            <span onClick={() => setshowpassword((prev) => !prev)}className=" absolute right-3 top-[38px] cursor-pointer">
                                {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"  />) :
                                 (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                            </span>
                        </lable>


                        <lable className="relative w-full mt-4">
                            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup  className="text-pink-200">*</sup></p>
                            <input required
                                type={showpcp ? ("text") : ('password')}
                                onChange={changehandler}
                                name="cp"
                                placeholder="confirmPassword"
                                value={formData.cp}
                                className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]" />
                          <span onClick={() => setshowcp((prev) => !prev)}className=" absolute right-3 top-[38px] cursor-pointer">
                                {showpcp? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                            </span>
                        </lable>
                    </div>
                </div>
                <button className="text-richblack-900 w-full mt-6 py-[8px] bg-yellow-50 rounded-[8px] font-medium px-[12px] ">Create Account</button>
            </form>
        </div>
    )
}
export default Signupform