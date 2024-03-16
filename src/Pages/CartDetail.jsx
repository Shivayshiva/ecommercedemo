import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartSection from "../Components/CartSection";
import "./CartDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { addDatabaseItem, emptyCart } from "../Redux/action";

export default function CartDetail() {
  //const [state, setState] = useState([])
  const data = useSelector((state) => state.handleCart);
  const disptach=useDispatch();
  const navigate=useNavigate();
  console.log("CartDetailXXX", data);
  //console.log("CartDetail", state);
  let total=0;
  for(let x of data){
    total=total+x.qty*x.price;
  }
  console.log("TOTALTOTAL",total);
  //console.log("TOTALTOTAL",total)
  //useEffect(() => {
  //  async function fetchdatabase(){
  //    const data= await fetch("https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json");
  //    const datajson=await data.json();
  //    const datajsonvalues=Object.entries(datajson)
  //    let values=[];
  //    for(let val of datajsonvalues){
  //      values.push(val[1])
  //    }
  //    //setState(values);
  //    disptach(addDatabaseItem(values));
  //  }
  //  fetchdatabase();
  //}, []);

  //useEffect(()=>{
  //  setState(data);
  //},[])
  const handleBuyProduct=async ()=>{
    const purchaseddata = await fetch(
      "https://ecommerce-8187f-default-rtdb.firebaseio.com/purchaseddatalist.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log("purchaseddata",purchaseddata);
    if(purchaseddata.ok){
      console.log("Data submitted");
      const deleteData = async () => {
        try {
          const response = await fetch('https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json', {
            method: 'DELETE',
          });
      
          if (response.ok) {
            console.log("Successfully deleted chart");
            disptach(emptyCart())
            navigate("/purchaseddashboard");
            
          }
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      };
      deleteData();
    }
    else{
      console.log("Data Not Submitted");
    }

  }
  return (
    <div className="parent">
      <div>
        <ul>
          {data.length!=0 ? data.map((val) => (
            <li>
              <CartSection
                image={val.image}
                title={val.name}
                price={val.price}
                id={val.id}
                qty={val.qty}
              />
            </li>
          )):<h1>Empty Cart...</h1>}
        </ul>
      </div>
      <div className="ordersummary">
        <h2>Order Summary</h2>
        <h3>Total:- <i>Rs.{total.toFixed(2)}</i></h3>
        <button onClick={handleBuyProduct}>Buy Product</button>
      </div>
    </div>
  );
}
