import { NavLink } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import toast from "react-hot-toast"
export default function Navbar() {
    const { user , logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success("Successfully Logged Out");
        })
        .catch(() => {

        })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/carts">My Cart</NavLink></li>
        {
            user ? <li className="text-lg font-bold log"><span title={user.email} className="font-extrabold">
                <img className="w-10 rounded-full md:ml-20" src={user.photoURL} alt="" /><span className="font-normal mr-4">{user.displayName}</span><span className="hover:underline" onClick={handleLogOut}>Log Out</span>
                </span></li> :
                <li className="text-lg font-bold"><NavLink to="/login">Login</NavLink></li>
        }
    </>
    return (
        <nav className="shadow-lg py-2 bg-white">
            <div className="md:flex justify-between items-center bg-base-100 px-2 md:px-10">
                <div className="flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="flex items-center normal-case text-xl">
                        <img className="w-16" src="https://i.ibb.co/zJ7Dc0H/logo.png" alt="logo" /> <span className="text-2xl font-bold">Automo<span className="text-[#EF1D26]">ti</span>ve</span>
                    </a>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal items-center px-1 font-bold">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
