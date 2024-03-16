import './App.css';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Product from './Components/Product';
import ProductDetail from './Pages/ProductDetail';
//import CartSection from './Pages/CartSection';
import Purchased from './Components/Purchased';
import CartDetail from './Pages/CartDetail';
import PurchasedDashboard from './Pages/PurchasedDashboard';


function App() {
  //const loginstatus=localStorage.getItem("token");
  //console.log("loginstatus",loginstatus);
  const location=useLocation();
  console.log("LOCATION",location);
  return (
    <>
      <Routes>
          <Route path="/" element={localStorage.getItem("token")?<Home/>:<Navigate to="signin"/>}/>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/productdetails' element={<ProductDetail/>}/>
          <Route path='/cartdetail' element={<CartDetail/>}/>
          <Route path='/purchaseddashboard' element={<PurchasedDashboard/>}/>
       </Routes>
       <Outlet/>
       {/*<Signin/>*/}
       {/*<Signup/>*/}
       {/*<PurchasedDashboard/>*/}
    </>
   
    //{/*<Product image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" name="Gucci Jeans" price="200"/>*/}
    //{/*<ProductDetail image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" price={2000} name="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"/>*/}
  );
}

export default App;
