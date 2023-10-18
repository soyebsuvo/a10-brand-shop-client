/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

export default function Registration() {
    const { createUser , googleLogin , githubLogin} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name , photo , email , password )
        if(password.length < 6){
            toast.error("Password Must be at least 6 characters")
            return;
        }
        // eslint-disable-next-line no-useless-escape
        if(!/^(?=.*[A-Z]|.*[!@#$%^&*()_+\-=\[\]{};:'",.<>/?])\S+$/.test(password)){
            toast.error("Password must contain either a capital letter or a special character (or both)");
            return;
        }
        createUser(email , password)
        .then(result => {
            console.log(result.user);
            toast.success("Successfully Logged in")
        })
        .catch(error => {
            console.error(error);
            toast.error("something went wrong")
        })
    }
    const othersLogin = media => {
        media()
        .then(result => {
            console.log(result.user)
            toast.success("Successfully Logged in")
        })
        .catch(err => {
            console.error(err)
            toast.error("something went wrong")
        })
    }
    return (
        <div className="py-5 bg-[#EEE]">
            <div className="py-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Create a new <span className="text-[#EF1D26]">Account</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col w-10/12 md:w-6/12 border-opacity-50 bg-white rounded-lg py-6 mb-10">
                    <div className="grid card rounded-box place-items-center">
                        <div className='flex gap-5 py-5'>
                            <button onClick={() => othersLogin(googleLogin)} className='flex justify-center items-center text-xl btn normal-case'><span className='hidden lg:block'>Register With Google</span> <FcGoogle></FcGoogle></button>
                            <button onClick={() => othersLogin(githubLogin)} className='flex justify-center items-center text-xl btn normal-case'><span className='hidden lg:block'>Register With Github</span> <BsGithub></BsGithub></button>
                        </div>
                    </div>
                    <div className="divider w-8/12 mx-auto">OR</div>
                    <div className="grid card rounded-box place-items-center">
                        <form onSubmit={handleRegister} className='w-full px-6 md:px-12'>
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="name" name="name" id="name" placeholder='Your Name*' />
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="Photo URL" name="photo" id="photo" placeholder='Your Photo URL*' />
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="email" name="email" id="email" placeholder='Your Email*' />
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="password" name="password" id="password" placeholder='Your Password*' />
                            <div className='flex justify-between py-5'>
                                <div>
                                    <input type="checkbox" name="remember" id="remember" className='mr-2' /><span>Remember Me</span>
                                </div>
                                <p className='text-blue-600 underline font-bold'>Forgotten Password</p>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-block bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]'>Register</button>
                            </div>
                        </form>

                        <div className='border-t-2 mt-6 pt-3 w-full'>
                            <p className='text-center'>Already have an Account? Please <Link className='text-blue-600 font-bold underline' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
