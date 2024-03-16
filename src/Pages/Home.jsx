import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import "./Home.css";
import Navbar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { addDatabaseItem } from "../Redux/action";
import { useDispatch } from "react-redux";

export default function Home() {
  const [productList, setProductList] = useState([]);
  const location=useLocation();
  const dispatch=useDispatch();
  console.log("LOCATION1234",location);
  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://65f2d4e1105614e6549f0856.mockapi.io/productlist"
      );
      const datajson = await data.json();
      console.log("DataJSON", datajson);
      setProductList([...datajson]);
    }
    getData();
  }, []);
  //useEffect(()=>{
  //   async function getDBdata(){
  //    //const data = await fetch("https://ecommerce-8187f-default-rtdb.firebaseio.com/");
  //    const data= await fetch("https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json");
  //    const datajson=await data.json();
      
  //    if(datajson===null){
  //      dispatch(addDatabaseItem([]));
  //    }
  //    else{
  //      //console.log("Datajson",Object.values(datajson)[0]);
  //      dispatch(addDatabaseItem(Object.values(datajson)[0]));
  //    }
      
  //   }
  //   getDBdata()
  //},[])
  return (
    <div>
      <Navbar />
      <ul className="list">
        {productList?.map((data) => (
          <li key={data.id}>
            <Link to="/productdetails" state={data}>
            <Product image={data.image} id={data.id} name={data.title} price={data.price} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
