import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Brand({ brand }) {
    const { brand_name, image } = brand;

    return (
        <Link to={`/products/${brand_name}`}>
            <div style={{ boxShadow: "0px 0px 7px black" }} className="card bg-base-100 cursor-pointer">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Brand" className="rounded-xl h-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand_name}</h2>
                </div>
            </div>
        </Link>
    )
}
Brand.propTypes = {
    brand: PropTypes.object.isRequired
}