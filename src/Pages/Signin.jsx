import React, { useState } from 'react';
import './Signin.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDatabaseItem, setlogin } from '../Redux/action';


export default function Signin() {
  const [data,setData]=useState({email:"",password:""});
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSignup=()=>{
    navigate("/signup")
  }
  const handleSubmit=async()=>{
    console.log("DATA",data)
    try{
      const userCredential= await signInWithEmailAndPassword(auth,data.email,data.password);
      const user=userCredential.user;
      localStorage.setItem("token",user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(userCredential);
      if(user.accessToken){
        async function getDBdata(){
          //const data = await fetch("https://ecommerce-8187f-default-rtdb.firebaseio.com/");
          const data= await fetch("https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json");
          const datajson=await data.json();
          
          if(datajson===null){
            dispatch(addDatabaseItem([]));
          }
          else{
            //console.log("Datajson",Object.values(datajson)[0]);
            dispatch(addDatabaseItem(Object.values(datajson)[0]));
          }
          
         }
         getDBdata()
        //dispatch(setlogin())
          navigate("/")
          }
      }
    catch(err){
      console.log(err);
    }
  }
  return (
    
    <div className='signin'>
    <h1 id='usersignin'>User SignIn</h1>
    <label htmlFor='email'>Email </label>
    <input type="text" name="email" id="email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
    <label htmlFor="password">Password</label>
    <input type="text" id='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />  
    <button onClick={handleSubmit}>SIGNIN</button>
    <h4 id='h4signin' onClick={handleSignup}>Register</h4>
    </div>
  )
}
