import React, { useState } from 'react';
import './Signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setlogin } from '../Redux/action';


export default function Signup() {
  const [data,setData]=useState({email:"",password:""});
  const [flag,setFlag]=useState({email:"",password:""});
  const navigate=useNavigate();
  const disptach= useDispatch();

  const handleh4Click=()=>{
    navigate("/signin")
  }
  const handleSubmit=async()=>{
    console.log("DATA",data)
    
    if(data.password.length>=10 && (data.email).match(/@gmail.com$/)){
      setFlag({password:"",email:""})
      try{
        const value= await createUserWithEmailAndPassword(auth,data.email,data.password);
        const user=value.user;
        localStorage.setItem("token",user.accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        console.log("signup",value.user);
        if(user.accessToken){
          disptach(setlogin());
          navigate("/")
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else if(data.password.length <10 &&(data.email).match(/@gmail.com$/) ){
      setFlag({email:"",password:""});
      setFlag({...flag,password:"Password has size less than 10."});
        
    }
    else if(data.password.length >=10 && !(data.email).match(/@gmail.com$/)){
      setFlag({email:"",password:""})
      setFlag({...flag,email:"Invalid Email ID."})
    }
    else{
      setFlag({email:"",password:""})
      setFlag({email:"Invalid Email ID.",password:"Password has size less than 10."})
    }
  }
  return (
    <div className='signup'>
      <h1 id='signup-user'>User Signup</h1>
      <label htmlFor='email'>Email </label>
      <input type="text" name="email" id="email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
      <p>{flag.email}</p>
      <label htmlFor="password">Password</label>
      <input type="text" id='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
      <p>{flag.password}</p>
      <button onClick={handleSubmit}>SIGNUP</button>
      <h4 id="h4signup" onClick={handleh4Click}>Already User ? SignIn</h4>
    </div>
  )
}
