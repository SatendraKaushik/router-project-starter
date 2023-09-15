import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {toast} from "react-hot-toast"
const Navbar = (props) => {
    let log = props.Islogged;
    let notlog = props.setisloggedin;
    return (
        <div className="flex justify-between items-center  w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={160} loading="lazy" />

            </Link>
            <nav>
                <ul className="flex gap-3 text-white gap-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-4">
                {!log &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700">Log in</button>

                    </Link>
                }
                {!log &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700">Sign up</button>

                    </Link>
                }
                {log &&
                    <Link to="/">
                        <button onClick={()=> {
                            notlog(false);
                            toast.success("logout")
                        }} className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700">Log Out</button>

                    </Link>
                }
                {log &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-[8px] rounded-[8px] border-richblack-700">Dashboard</button>

                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;