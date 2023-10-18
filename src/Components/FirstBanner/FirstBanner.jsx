import { AiOutlineArrowRight } from 'react-icons/ai';

export default function FirstBanner() {
    return (
        <div className="hero md:h-[520px]" style={{ backgroundImage: 'url(https://i.ibb.co/Lz0cRj6/slider-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content md:px-12">
                <div className="hero h-full">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/PtXGS7V/hero-1.png" className="w-10/12 md:w-5/12 rounded-lg" />
                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold md:text-left text-[#EF1D26]">Welcome to Automotive</h1>
                            <h1 className="text-5xl font-bold md:text-left">Best Way To Find <br /> Your <span className="text-[#EF1D26]">Dream</span> Car</h1>
                            <p className="py-6 text-left">There are many variations of passages orem psum available but the majority have suffered alternation in some form by injeced humour</p>
                            <div className="md:flex md:justify-start">
                                <button className="btn bg-[#EF1D26] border-none text-white">Learn More <AiOutlineArrowRight></AiOutlineArrowRight></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
