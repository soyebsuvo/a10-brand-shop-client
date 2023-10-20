import { useLoaderData } from "react-router-dom"
import Product from "../../Components/Product/Product";

export default function Products() {
    const products = useLoaderData();
    return (
        <div className="py-8 px-16">
            <div className="py-4">
                <h2 className="text-4xl font-bold text-center">Our <span className="text-[#EF1D26]">Products</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {
                    products.length > 0 && products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            {
                products.length === 0 && <div className="h-[60vh] flex justify-center items-center w-full"><h2 className="text-4xl font-bold flex justify-center text-center">No Product Available Here </h2></div>
            }
        </div>
    )
}
