import { useEffect, useState } from "react"
import Brand from "../Brand/Brand"

export default function Brands() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch("brands.json")
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="py-5">
            <div>
                <h2 className="text-4xl font-bold text-center">Our <span className="text-[#EF1D26]">Brands</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 px-8 md:px-14">
                {
                    brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    )
}
