import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
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
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4  border border-t-1 px-5 py-3">
      {!menu && (
      <div className="max-w-full h-40 items-center justify-center mx-auto flex flex-col  ">
        <h1 className="text-2xl mx-auto">loading...</h1>
      </div>)}
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

        {menu&&(
          <button className="px-2 py-1 w-20 flex justify-center items-center bg-green-700 rounded-xl">
          order
          </button>
        )}
        </div>
    </div>
  );
};

export default TempMenu;
