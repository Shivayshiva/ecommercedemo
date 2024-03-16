import React from 'react';
import "./PurchasedDashboard.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PurchasedDashboard() {
    //const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleButtonClick=()=>{
    navigate("/");
}
  return (
    <div className='purchase-dashboard'>
      <h1 id='purchase-htag'>!! PURCHASE SUCCESSFUL !!</h1>
      <button id="purchase-button" onClick={handleButtonClick}> Continue Shopping </button>
    </div>
  )
}
