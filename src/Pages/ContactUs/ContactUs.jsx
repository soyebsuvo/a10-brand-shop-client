/* eslint-disable react/no-unescaped-entities */
// import { GoLocation } from 'react-icons/go'
// import { MdOutlineViewTimeline, MdOutlineWatchLater } from 'react-icons/md'
// import { BsTelephone } from 'react-icons/bs'
export default function ContactUs() {
    return (
        <div className='md:px-10 py-6'>
            <div>
                <h2 className="text-4xl font-bold text-center">Contact <span className="text-[#EF1D26]">Us</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/2">
                    <img className="w-full p-8 md:p-14 md:rounded-tr-full md:rounded-br-full" src="https://live.themewild.com/motex/assets/img/contact/01.jpg" alt="" />
                </div>

                <div className="md:w-1/2 py-8 px-6 box-border">
                    <div>
                        <h2 className="text-3xl font-bold my-3">Get In <span className="text-[#EF1D26]">Touch</span></h2>
                        <p className="text-gray-500 py-2 mb-3">
                            Get In Touch
                            It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.</p>
                    </div>
                    <form className=''>
                        <div className='flex gap-4 mb-4'>
                            <input className='px-6 py-3 bg-base-200 rounded-3xl w-full' type="text" name="name" id="name" placeholder="Name*" />
                            <input className='px-6 py-3 bg-base-200 rounded-3xl w-full' type="text" name="name" id="name" placeholder="Phone*" />
                        </div>
                        <div>
                            <textarea className='px-6 py-3 bg-base-200 rounded-3xl resize-none w-full' name="message" id="message" cols="30" rows="5" placeholder="Message*"></textarea>
                        </div>
                        <div className='flex items-center py-3'>
                            <input type="checkbox" name="check" id="check" /><span className='text-sm ml-2 font-bold'>I agree that my data is being collected and stored.</span>
                        </div>
                        <div className='flex justify-center items-center pt-3'><button onClick={e => e.preventDefault()} className='btn rounded-lg hover:text-[#EF1D26] hover:bg-transparent bg-[#EF1D26] hover:border-[#EF1D26] text-white border border-[#EF1D26] w-full'>Send</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
