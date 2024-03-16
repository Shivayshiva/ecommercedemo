import React from 'react';
import './ProductDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import handleCart from '../Redux/reducer/handleCart';
import { addCart } from '../Redux/action';

export default function ProductDetail() {
  const data=useLocation().state;
  //const data12=useSelector((state=>state.cart))
  const navigate=useNavigate();
  const dispatch=useDispatch()
  console.log("Data",data)
  const handleClose=()=>{
    navigate("/")
  }

  const handleCartAddition=()=>{
    dispatch(addCart({
        name:data.title,
        image: data.image,
        qty: 1,
        id: data.id,
        price: data.price,
    }))
    navigate("/")
  }
  return (
    <div className='productDetail'>
    <button id='close' onClick={handleClose}>Close X</button>
      <img src={data.image} alt="Image" id='productDetailImage' />
      <h3>{data.title}</h3>
      <p className='description'>{data.description}</p>
      <h2>Price :- Rs.{data.price}</h2>
      <button onClick={handleCartAddition}>Add To Cart</button>
    </div>
  )
}