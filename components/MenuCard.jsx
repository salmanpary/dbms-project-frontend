import React, { useState } from "react";

const MenuCard = ({ index, image, itemname, description, price }) => {
  const [quantity, setquantity] = useState(0);

  return (
    <div className="flex justify-center gap-3  py-2 m-0">
      <div
        className="flex flex-col gap-3 shadow-xl p-3 py-2  justify-center  rounded-xl border border-blue-900 bg-yellow-100 w-ful"
        key={index}
      >
        <img className="rounded-2xl w-60 my-4" src={image}  />
        <div className="capitalize font-medium text-xl ">{itemname}</div>
        <div className="font-light text-sm">{description}</div>
        <div className="text-center text-2xl">{price}</div>
        <div className="flex bg-green-600 w-full px-3 justify-between  items-stretch  rounded-xl text-white">
          <button
            onClick={() => {
              if (quantity === 0) {
                return;
              }
              setquantity(quantity-1);
            }}
          >
            -
          </button>
          <div className="text-xl text-red-900">{quantity}</div>
          <button
            onClick={() => {
              setquantity(quantity+1);
            }}
          >
            +
          </button>
        </div>
          
      </div>
      
    </div>
  );
};

export default MenuCard;
