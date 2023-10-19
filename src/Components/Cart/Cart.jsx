import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Cart({ cart }) {
    const { _id, name, photo, brand, type, rating, price, desc } = cart;
    return (
        <div className="card card-compact">
            <figure><img className='w-96 h-52' src={photo} alt="Shoes" /></figure>
            <div className="md:px-16 space-y-2">
                <h2 className="card-title text-3xl px-2">{name}</h2>
                <div className='flex justify-between'>
                    <p className='px-2 font-bold text-gray-600'>Brand - {brand} </p>
                    <p className='px-2 font-bold text-gray-600'>Rating - {rating} </p>
                    <p className='px-2 font-bold text-gray-600'>Type - {type} </p>
                </div>
                <div className='py-2 text-gray-600'>
                    {
                        desc.length > 80 ? <p className='px-2'>{desc.slice(0, 80)}</p> : <p className='px-2'>desc</p>
                    }
                </div>
                <div className="px-2 flex justify-between items-center">
                    <p>Price : {price}</p>
                    <div className='flex gap-4'>
                        {/* <Link to={`/carts/${_id}}`}><button className="btn text-[#EF1D26] border border-[#EF1D26] hover:bg-transparent hover:border hover:border-[#EF1D26]">Details</button></Link> */}
                        <Link to={`/mycarts/${_id}}`}><button className="btn text-[#EF1D26] border border-[#EF1D26] hover:bg-transparent hover:border hover:border-[#EF1D26]">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
Cart.propTypes = {
    cart: PropTypes.object
}