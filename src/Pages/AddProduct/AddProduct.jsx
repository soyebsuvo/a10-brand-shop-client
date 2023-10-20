import Swal from "sweetalert2";

export default function AddProduct() {
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const rating = e.target.rating.value;
        const price = e.target.price.value;
        const desc = e.target.desc.value;
        const product = {
            name , photo , brand , type , rating , price , desc 
        }
        console.log(product)

        fetch("https://brand-shop-assignment-server-6jrcknra3-soyeb-suvos-projects.vercel.app/products" , {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Product Added Successfully',
                    'success'
                  )
                  e.target.reset()
            }
        })
    }
    return (
        <div className="px-3 md:px-32 py-8">
            <div>
                <h2 className="text-4xl font-bold text-center">Add <span className="text-[#EF1D26]">Product</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div>
                <div className="py-8">
                    <form onSubmit={handleAddProduct}>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Product Name*" />
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" placeholder="Photo URL*" />
                        </div>
                        <div className="md:flex gap-8">
                            <div>
                                <select className="w-36 py-4 border-2 rounded-lg px-2 my-2" name="brand" id="brand">
                                    <option value="">Select Brands</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Ford">Ford</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Honda">Honda</option>
                                </select>
                            </div>
                            <div>
                                <select className="w-36 py-4 border-2 rounded-lg px-2 my-2" name="type" id="type">
                                    <option value="">Select Types</option>
                                    <option value="car">Car</option>
                                    <option value="jeep">Jeep</option>
                                    <option value="taxi">Taxi</option>
                                    <option value="private-car">Private Car</option>
                                </select>
                            </div>
                            <div>
                                <select className="w-32 py-4 border-2 rounded-lg px-2 my-2" name="rating" id="rating">
                                    <option value="">Ratings</option>
                                    <option value="1/5">1/5</option>
                                    <option value="2/5">2/5</option>
                                    <option value="3/5">3/5</option>
                                    <option value="4/5">4/5</option>
                                    <option value="5/5">5/5</option>
                                </select>
                            </div>
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" placeholder="Price*" />
                        </div>
                        <div>
                            <textarea className="w-full py-4 border-2 rounded-lg px-2 my-2 resize-none" name="desc" id="desc" cols="30" rows="5" placeholder="Short Description"></textarea>
                        </div>
                        <div>
                            <input className="btn btn-block bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]" type="submit" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
