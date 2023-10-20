import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function OurTeam() {
  return (
    <div className='py-6'>
            <div>
                <h2 className="text-4xl font-bold text-center">Our <span className="text-[#EF1D26]">Team</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            {/* main */}
            <div className='py-6 flex flex-col md:flex-row justify-evenly'>
                <div className='py-4'>
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-3xl' src="https://i.ibb.co/nLNPpC3/01.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center">Chad Smith</h2>
                    <p className='text-center text-[#EF1D26] font-bold my-2'>HR Manager</p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2 cursor-pointer'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>


                <div className='py-4'>
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-3xl' src="https://i.ibb.co/KKtCbBm/02.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center">Malissa Fie</h2>
                    <p className='text-center text-[#EF1D26] font-bold my-2'>Technician</p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2 cursor-pointer'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>


                <div className='py-4'>
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-3xl' src="https://i.ibb.co/PgfdmJ1/03.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center">Arron Rodri</h2>
                    <p className='text-center text-[#EF1D26] font-bold my-2'>CEO & Founder</p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2 cursor-pointer'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>

                <div className='py-4'>
                    <div className='flex justify-center items-center pb-4'>
                        <img className='w-64 rounded-3xl' src="https://i.ibb.co/9T3ZNBh/04.jpg" alt="" />
                    </div>
                    <h2 className="text-2xl text-center">Tony Pinto</h2>
                    <p className='text-center text-[#EF1D26] font-bold my-2'>Mechanical Engineer</p>
                    <div className='flex gap-3 justify-center'>
                        <div className='border rounded-full p-2 cursor-pointer'>
                            <BsFacebook className='text-2xl text-black bg-transparent'></BsFacebook>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsInstagram className='text-2xl text-black bg-transparent'></BsInstagram>
                        </div>
                        <div className='border rounded-full p-2 cursor-pointer'>
                        <BsTwitter className='text-2xl text-black bg-transparent'></BsTwitter>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}
