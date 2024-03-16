import React from 'react';
import "./Signupbutton.css";
import { useNavigate } from 'react-router-dom';

export default function Signupbutton() {
  let status=localStorage.getItem("token")
    const navigate=useNavigate()
    //const sigindata=localStorage.getItem("token")
const handleSignup=()=>{
        navigate("/signup")
    }
  return (
    <button onClick={handleSignup} hidden={Boolean(status)}>SignUp</button>
  )
}
