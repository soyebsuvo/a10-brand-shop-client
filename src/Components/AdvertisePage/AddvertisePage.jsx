import PropTypes from 'prop-types';

export default function AddvertisePage({addvertise}) {
    const {title , image , price , desc} = addvertise;
    return (
        <div className="hero h-[380px]" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold"><p>{title.slice(0,27)}</p><p className='text-6xl'>{title.slice(27,title.length)}</p></h1>
                    <p className="mb-5">{desc}</p>
                    <p className="text-7xl font-bold text-[#EF1D26]">{price}</p>
                </div>
            </div>
        </div>
    )
}
AddvertisePage.propTypes = {
    addvertise : PropTypes.object
}