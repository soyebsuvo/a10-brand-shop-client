import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='text-center'>
                <h2 className="text-5xl font-bold">Page Not Found</h2>
                <img src="https://i.ibb.co/F0qDJN4/th-6.jpg" alt="404" />
                <button className="font-bold underline"><Link to="/">Go Home</Link></button>
            </div>
        </div>
    )
}
