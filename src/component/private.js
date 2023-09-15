import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute=({Islogged,children})=>{
  
 if(Islogged){
    return children;
 } 
 else{
return <Navigate to="/login"/>
 }
}
export default PrivateRoute