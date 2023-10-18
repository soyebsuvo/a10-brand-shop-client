import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/addProduct" className="link link-hover">Add Product</Link>
                <Link to="/cart" className="link link-hover">My Cart</Link>
                <Link to="/login" className="link link-hover">Login</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-[#EF1D26] text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}
