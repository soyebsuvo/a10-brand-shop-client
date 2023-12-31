// import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import Cart from "../../Components/Cart/Cart";

export default function MyCart() {
    // const carts = useLoaderData();
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("https://brand-shop-assignment-server-b37868htx-soyeb-suvos-projects.vercel.app/carts")
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const UpdatedCart = id => {
        const filtered = carts.filter(cart => cart._id !== id);
        setCarts(filtered);
    }
    console.log(carts)
    return (
        <div className="py-8 px-16">
            <div className="py-4">
                <h2 className="text-4xl font-bold text-center">My <span className="text-[#EF1D26]">Carts</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {
                    carts.length > 0 && carts?.map(cart => <Cart key={cart._id} cart={cart} UpdatedCart={UpdatedCart}></Cart>)

                }
            </div>
            {
                carts.length === 0 && <div className="h-[60vh] flex justify-center items-center w-full"><h2 className="text-4xl font-bold flex justify-center text-center">No Product Available in Carts</h2></div>
            }
        </div>
    )
}
