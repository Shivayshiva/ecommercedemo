import React from "react";
import "./Product.css";
import { addCart } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Product(props) {
  const data123 = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleCartAddition = async (event) => {
    event.stopPropagation();
    //event.stopImmediatePropagation()
    event.preventDefault();
    dispatch(
      addCart({
        name: props.name,
        image: props.image,
        qty: 1,
        id: props.id,
        price: props.price,
      })
    );
  };
  return (
    <div className="product">
      <div className="product-sub">
        <img src={props.image} alt="image" id="image" />
      </div>
      <div className="header2">
        <h4>{props.name}</h4>
      </div>
      <div className="header4">
        <p>{props.price}</p>
      </div>
      <button onClick={handleCartAddition}>Add To Cart</button>
    </div>
  );
}
