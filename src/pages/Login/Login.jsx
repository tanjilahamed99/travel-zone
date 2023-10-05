import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {

    cosbt

    return (
        <div className="p-10">
            <div className="mt-10 w-1/2 mx-auto p-10 border-[#ABABAB] border-2 bg-white">
                <div className="">
                    <div className="">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    <div className="w-[90%]  bg-base-100">
                        <form className="mt-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Username or Email" className="font-medium text-black input border-none  " required />
                                <hr className="border border-[#C5C5C5]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input font-medium text-black  border-none" required />
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