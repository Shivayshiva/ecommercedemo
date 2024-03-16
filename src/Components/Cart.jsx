import React from 'react'
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import handleCart from '../Redux/reducer/handleCart';
import { useSelector } from 'react-redux';

export default function Cart() {
  const navigate=useNavigate();
  const store=useSelector((state)=>state.handleCart)

  const handleCart=(event)=>{
    console.log("CART",store)
    event.preventDefault();
    navigate("/cartdetail",store)
  }

  return (
      <button onClick={handleCart}>Cart {store.length}</button>
  )
}
