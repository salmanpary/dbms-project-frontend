import React from "react";
import axios from "axios";
const Admin2 = () => {
  const [nopayment, setnopayment] = React.useState(null);
  const FetchNoPayment = async () => {
    const res = await axios.get("http://localhost:5000/admin/nopayment");
    setnopayment(res.data);
    console.log(res);
  };
  React.useEffect(() => {
    FetchNoPayment();
  }, []);
  return (
    <div className="flex flex-col h-screen w-screen mt-4 items-center font-sans overflow-hidden">
      <div>Admin</div>
      <div>
        <div className="flex gap-2 bg-slate-800 rounded-3xl text-white py-2 mb-8 capitalize font-bold text-xl">
          <div className="w-64">order no:</div>
          <div className="w-64">product</div>
          <div className="w-64">Total price</div>
          <div className="w-64">phone number</div>
        </div>
        <div>
          {nopayment?.map((order) => {
            return (
              <div className="flex gap-2 my-2 bg-white rounded-sm py-2 font-semibold">
                <div className="w-64">{order.id}</div>
                <div className="w-64">{`${order?.productname1}(${order?.quantity1}) ${order?.productname2?order.productname2:" "}${order?.quantity2?order.quantity2:" "} ${order?.productname3 ?order?.productname3:" "} ${order?.quantity3?order.quantity3:""}`}</div>
                <div className="w-64">{order.total}</div>
                <div className="w-64">{order.phonenumber}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin2;
