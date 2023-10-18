// import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import Cart from "../../Components/Cart/Cart";

export default function MyCart() {
    // const carts = useLoaderData();
    const [carts , setCarts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/carts")
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    console.log(carts)
  return (
    <div className="py-8 px-16">
            <div className="py-4">
                <h2 className="text-4xl font-bold text-center">My <span className="text-[#EF1D26]">Carts</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {
                    carts?.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
                }
            </div>
        </div>
  )
}
