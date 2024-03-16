import React from "react";
import "./Purchased.css";

export default function Purchased() {
  return (
    <div className="parent">
      <div className="child1">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="image"
          height="130"
          width="130"
        />
        <h3>Mens Casual Premium Slim Fit T-Shirts </h3>
      </div>
      <div className="child2">
        <button>-</button>
        <h5>10</h5>
        <button>+</button>
      </div>
    </div>
  );
}
