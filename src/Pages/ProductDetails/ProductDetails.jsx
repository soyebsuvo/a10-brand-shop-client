import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

export default function ProductDetails() {
    const product = useLoaderData();
    console.log(product)
    const { name, photo, brand, rating, type, desc, price } = product;
    const cartProduct = { name, photo, brand, rating, type, desc, price };
    const handleAddToCart = product => {
        // console.log(product)
        fetch(`http://localhost:5000/carts` , {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire(
                    'Thank You!',
                    'Product Added To Cart',
                    'success'
                  )
            }
        })
    }
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
                    <button onClick={() => handleAddToCart(cartProduct)} className="btn bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
