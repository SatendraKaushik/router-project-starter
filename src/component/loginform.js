import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
const Loginform = ({ setisloggedin }) => {
    const [showpassword, setshowpassword] = useState(false);
    const [formdata, setform] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    function Submithandler(event) {
        event.preventDefault();
        setisloggedin(true);
        toast.success("Logged In");
        navigate("/dashboard");
        const acdata={
            ...formdata
        }
        const finaldata={
            ...acdata,
          
    
        }
        console.log(finaldata);
    }
    function changehandler(event) {
        setform((predata) => (
            {
                ...predata,
                [event.target.name]: event.target.value
            }
        ))
    }
    return (
        <form onSubmit={Submithandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input required
                    type="text"
                    value={formdata.email}
                    onChange={changehandler}
                    placeholder="Enter Email Address"
                    name="email"
                    className=" bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]" />
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup>
                </p>
                <input required
                    type={showpassword ? ("text") :
                        ("password")}
                    value={formdata.password}
                    onChange={changehandler}
                    placeholder="Enter Password"
                    name="password"
                    className="  bg-richblack-800 rounded-[0.5rem]  text-richblack-5 w-full p-[12px]" />
                <span className=" absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setshowpassword((prev) => !prev)}>
                    {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)};
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 ml-auto max-w-max">Forgot password</p>
                </Link>
            </label>
            <button className="text-richblack-900 mt-6 py-[8px] bg-yellow-50 rounded-[8px] font-medium px-[12px] "> Sign In</button>
        </form>
    )
}
export default Loginform