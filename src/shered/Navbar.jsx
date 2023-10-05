import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const ulLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>Destination</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar pt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">Travel Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="relative">
                    <input type="text" className="bg-[#FFFFFF33] px-10 py-3 rounded-md text-white " placeholder="Search your Destination..." />
                    <FaSearch className="absolute text-white top-4 text-xl left-3"></FaSearch>
                </div>
                <ul className="menu menu-horizontal px-1 text-white items-center gap-5">
                    {
                        ulLink
                    }
                    <button className="btn bg-[#F9A51A] border-none">login</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;