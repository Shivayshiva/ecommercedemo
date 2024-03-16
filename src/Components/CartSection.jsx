import React from "react";
import "./CartSection.css";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../Redux/action";

export default function CartSection(props){
  const dispatch=useDispatch();
  const handleAddition=()=>{
    dispatch(addCart({
      name: props.name,
      image: props.image,
      qty: 1,
      id: props.id,
      price: props.price
    }))
  }
  const handleMinus=()=>{
    dispatch(delCart({
      name: props.name,
      image: props.image,
      qty: 1,
      id: props.id,
      price: props.price
    }))
  }
  return (
      <div className="listitem">
          <div className="child1">
            <img
              src={props.image}
              alt="image"
              height="130"
              width="130"
            />
            <h4>{props.title} </h4>
            <h4>Rs.{props.price}</h4>
          </div>
          <div className="child2">
            <h4 onClick={handleMinus}>-</h4>
            <h4>{props.qty}</h4>
            <h4 onClick={handleAddition}>+</h4>
          </div>
      </div>
  );
}
