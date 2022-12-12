import React, { useState } from "react";

const MenuCard = ({ index, image, itemname, description, price }) => {
  const [quantity, setquantity] = useState(0);

  return (
    <div className="flex justify-center gap-3 items-center py-2">
      <div
        className="flex flex-col gap-3 shadow-xl p-3  justify-center items-center rounded-xl border border-blue-900 bg-yellow-100 w-1/2"
        key={index}
      >
        <img src={image} width={100} height={100} />
        <div>{itemname}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div className="flex bg-green-600 px-3 justify-between items-stretch w-20  rounded-xl text-white">
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
          <button
            onClick={() => {
              setquantity(quantity+1);
            }}
          >
            +
          </button>
        </div>
          <div className="text-xl text-red-900">quantity:{quantity}</div>
      </div>
    </div>
  );
};

export default MenuCard;
