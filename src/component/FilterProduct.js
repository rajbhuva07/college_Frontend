import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-7 rounded-full cursor-pointer flex items-center justify-center ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`} style={{ width: "80px", height: "80px" }}>
        <CiForkAndKnife style={{ fontSize: "2rem" }} />
      </div>



      <div>

        <p className="text-center font-medium my-1 capitalize">{category}</p>
      </div>
    </div>
  );
};

export default FilterProduct;
