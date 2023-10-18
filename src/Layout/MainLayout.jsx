import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

export default function MainLayout() {
    return (
        <div className='max-w-7xl m-auto'>
            <div className='sticky top-0 z-20'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    )
}
