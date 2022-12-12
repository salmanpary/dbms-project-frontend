import React from 'react'

const Admin = () => {
   const orders=[{order_no:1,quantity:2,total_price:45,ph_no:896755462},
    {order_no:1,quantity:2,total_price:45,ph_no:896755462},
    {order_no:1,quantity:2,total_price:45,ph_no:896755462},
    {order_no:1,quantity:2,total_price:45,ph_no:896755462}]
  return (                  
    <div className='flex flex-col h-screen w-screen mt-4 items-center font-sans'>
      <div>Admin</div>
      <div>
        <div className='flex gap-2 bg-slate-800 rounded-3xl text-white py-2 mb-8 capitalize font-bold text-xl'>
         <div className='w-64'>order no:</div>
         <div className='w-64'>quantity</div> 
         <div className='w-64'>order no:</div>
         <div className='w-64'>order no:</div>
        </div>
        <div>
          {orders.map((order)=>{
            return(
              <div className='flex gap-2 my-2 bg-white rounded-sm py-2 font-semibold'>
                <div className='w-64'>{order.order_no}</div>
                <div className='w-64'>{order.quantity}</div>
                <div className='w-64'>{order.total_price}</div>
                <div className='w-64'>{order.ph_no}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin