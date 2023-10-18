import { useLoaderData } from "react-router-dom"

export default function CartDetails() {
    const carts = useLoaderData([]);
    const { name, photo, brand, rating, type, desc, price } = carts;
  return (
    <div className="card lg:card-side py-8 md:px-16">
            <figure className="flex-1"><img className="rounded-lg" src={photo} alt="Album" /></figure>
            <div className="card-body flex-1">
                <h2 className="card-title text-3xl">{name}</h2>
                <div className='flex justify-between'>
                    <p className='font-bold text-gray-600'>Brand - {brand} </p>
                    <p className='font-bold text-gray-600'>Rating - {rating} </p>
                    <p className='font-bold text-gray-600'>Type - {type} </p>
                </div>
                <div>
                    <p className="text-gray-600">{desc}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 font-semibold">Price : {price}</p>
                    <button className="btn bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]">Add to Cart</button>
                </div>
            </div>
        </div>
  )
}
