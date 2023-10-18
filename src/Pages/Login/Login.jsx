/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

export default function Login() {
    const { login ,googleLogin , githubLogin} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Successfully logged in")
            })
            .catch(error => {
                console.error(error)
                toast.error("Email and Password doesn't match")
            })
    }

    const othersLogin = media => {
        media()
        .then(res => {
            console.log(res.user)
            toast.success("Successfully logged in")
        })
        .catch(err => {
            console.log(err)
            toast.error("Email and Password doesn't match")
        })
    }
    return (
        <div className="py-5 bg-[#EEE]">
            <div className="py-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Login to Your <span className="text-[#EF1D26]">Account</span></h2>
                <hr className="border-2 border-red-600 w-32 mx-auto my-3" />
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col w-10/12 md:w-6/12 border-opacity-50 bg-white rounded-lg py-6 mb-10">
                    <div className="grid card rounded-box place-items-center">
                        <div className='flex gap-5 py-5'>
                            <button onClick={() => othersLogin(googleLogin)} className='flex justify-center items-center text-xl btn normal-case'><span className='hidden lg:block'>Login With Google</span> <FcGoogle></FcGoogle></button>
                            <button onClick={() => othersLogin(githubLogin)} className='flex justify-center items-center text-xl btn normal-case'><span className='hidden lg:block'>Login With Github</span> <BsGithub></BsGithub></button>
                        </div>
                    </div>
                    <div className="divider w-8/12 mx-auto">OR</div>
                    <div className="grid card rounded-box place-items-center">
                        <form onSubmit={handleLogin} className='w-full px-6 md:px-12'>
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="email" name="email" id="email" placeholder='Your Email*' />
                            <input className='block w-full py-4 border rounded-lg px-2 my-2' type="password" name="password" id="password" placeholder='Your Password*' />
                            <div className='flex justify-between py-5'>
                                <div>
                                    <input type="checkbox" name="remember" id="remember" className='mr-2' /><span>Remember Me</span>
                                </div>
                                <p className='text-blue-600 underline font-bold'>Forgotten Password</p>
                            </div>
                            <div>
                                <button className='btn btn-block bg-[#EF1D26] text-white hover:bg-transparent hover:border hover:border-red-700 hover:text-[#EF1D26]'>Login</button>
                            </div>
                        </form>

                        <div className='border-t-2 mt-6 pt-3 w-full'>
                            <p className='text-center'>Don't have an Account? Please <Link className='text-blue-600 font-bold underline' to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
