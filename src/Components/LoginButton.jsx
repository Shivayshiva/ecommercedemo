import React, { useState } from "react";
import "./LoginButton.css";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../Redux/action";

export default function LoginButton(props) {
  //const [loginstatus, setLoginstatus] = useState(false);
  const data = useSelector((state) => state.handleCart);
  console.log("LOGOUT",data)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const loginkey = localStorage.getItem("token");

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleLogout = async () => {
    console.log("Logout",data)
    const deleteData = async () => {
      try {
        const response = await fetch('https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json', {
          method: 'DELETE',
        });
    
        if (response.ok) {
          console.log("Successfully deleted cart");
          const fetchdata = await fetch(
            "https://ecommerce-8187f-default-rtdb.firebaseio.com/chartaddeddata.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          console.log("FETCHDATA", fetchdata);
          if (fetchdata.ok) {
            console.log("DATA STORED");
            dispatch(emptyCart());
            await signOut(auth);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/signin");
          } else {
            console.log("DATA REJECTED");
          }          
        }
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };
    deleteData();
  };
  return (
    <>
      {loginkey ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
}
