import React, { useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import MenuCard from "./MenuCard";
const TempMenu = () => {
  const router = useRouter();
  const [menu, setmenu] = React.useState(null);
  const fetchMenu = async () => {
    const res = await axios.get("http://localhost:5000/user/menu");
    setmenu(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchMenu();
    console.log(menu);
  }, []);
  return (
    <div>
      {!menu && "loading...."}
      {menu &&
        menu.map((item, index) => {
          return (
           <MenuCard 
           index={index}
           image={item.image}
           itemname={item.itemname}
           price={item.price}
           description={item.description}

           >

           </MenuCard>
          );
        })}
        <div className="flex w-full justify-center items-center py-2">

        <button className="px-2 py-1 w-20 flex justify-center items-center bg-green-700 rounded-xl">
            order
        </button>
        </div>
    </div>
  );
};

export default TempMenu;
