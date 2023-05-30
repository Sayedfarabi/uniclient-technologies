import Link from "next/link";
import logo from "../../assets/logo/Vector.png";
import './navbar.css';
import Image from "next/image";
import Button from "../button/Button";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="mr-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><a>Demos</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="invisible lg:visible">
                    <Link href={"/"}>
                        <div className="flex justify-center items-center">
                            <div className="mr-1">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={32}
                                    height={36}></Image>
                            </div>
                            <div className="leading-none">
                                <p className="brand-name font-bold">UNICLIENT</p>
                                <p className="sub-brand-name text-[#3B3D44]">Technologies</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="navbar-start hidden md:hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Demos</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <button className="btn bg-[#12141D] mx-2 md:mx-3 capitalize">Sign in</button>
                <Button>
                    Get Started Free
                </Button>
            </div>
        </div>

    );
};

export default Navbar;