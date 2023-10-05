import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const ulLink = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link>Destination</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>Contact</Link></li>
</>

    const { signIn } = useContext(AuthContext)

    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value


        signIn(email, password)
            .then(result => {
                toast.success('successful login')
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="">

            <div className="text-black">
                <div className="navbar justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    ulLink
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl ">Travel Zone</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  items-center gap-5">
                            {
                                ulLink
                            }
                            <Link to={'/login'}> <button className="btn bg-[#F9A51A] border-none">login</button></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-1/2 mx-auto p-10 border-[#ABABAB] border-2 bg-white">
                <div className="">
                    <div className="">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    <div className="w-[90%]  bg-base-100">
                        <form onSubmit={login} className="mt-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Username or Email" className="font-medium text-black input border-none  " required />
                                <hr className="border border-[#C5C5C5]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input font-medium text-black  border-none" required />
                                <hr className="border border-[#C5C5C5]" />
                                <label className="label mt-6">
                                    <div className="space-x-2">
                                        <input className="" type="checkbox" name="" id="" />
                                        <span className="font-medium">Remember Me</span>
                                    </div>

                                    <a href="#" className="text-[#F9A51A] font-medium label-text-alt link link-hover text-base">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A]">Login</button>
                            </div>
                            <p className="text-center mt-3 font-medium">Do not have an account? <Link to={'/registration'} className="text-[#F9A51A]">Create an account</Link></p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-6 items-center gap-3">
                <hr className="border border-[#AAA] w-[20%]" />
                <p>Or</p>
                <hr className="border border-[#AAA] w-[20%]" />
            </div>

            <div className="mx-auto container">
                <button className="btn w-1/3 gap-5  bg-white mx-auto flex border border-[#AAA] rounded-r-3xl rounded-l-3xl ">
                    <FaFacebook className="text-3xl bg-blue-700 text-white rounded-full "></FaFacebook>
                    Continue with Facebook
                </button>
                <button className="btn w-1/3 gap-5 mt-2  bg-white mx-auto flex border border-[#AAA] rounded-r-3xl rounded-l-3xl ">
                    <FaGoogle className="text-3xl "></FaGoogle>
                    Continue with Facebook
                </button>
            </div>

        </div>
    );
};

export default Login;