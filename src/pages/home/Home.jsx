import Navbar from "../../shered/Navbar";
import pic1 from '../../assets/Rectangle 1.png'
import pic2 from '../../assets/Rectangle 26.png'
import pic3 from '../../assets/Rectangle 27.png'
import pic4 from '../../assets/Rectangle 28.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className=" hero place-items-start bg-center w-[100%] h-[100vh] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/g3PrYdD/Rectangle-1.png)' }}>
            <div className=" hero-overlay bg-opacity-60"></div>
            <Navbar></Navbar>
            <div className="grid  grid-cols-2 justify-center items-center mt-52 container mx-auto">
                <div className="text-left">
                    <h2 className="text-white text-7xl font-medium">cox bazar</h2>
                    <p className="text-white my-5">Cox Bazar is a city, fishing port, tourism centre
                        <br /> and district headquarters in southeastern Bangladesh.
                        It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to={'/detail'}>
                        <button className="btn bg-[#F9A51A] border-none">
                            Booking Now
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>
                <div className="">
                    <div className="carousel carousel-end rounded-box gap-5">

                        <div id="slide1" className=" bg-gradient-to-t from-cyan-500 to-black   relative carousel-item border-2 border-[#FBBC04]">
                            <img className="bg-gradient-to-t from-white to-black w-[270px] h-[400px]" src={pic1} alt="Drink" />
                            <h2 className="absolute bottom-5 left-5 font-semibold text-2xl text-white">Cox Bazar</h2>
                        </div>
                        <div id="slide2" className="carousel-item border-2 border-[#FBBC04]">
                            <img className="w-[270px] h-[400px]" src={pic2} alt="Drink" />
                        </div>
                        <div id="slide3" className="carousel-item border-2 border-[#FBBC04]">
                            <img className="w-[270px] h-[400px]" src={pic3} alt="Drink" />
                        </div>
                        <div id="slide4" className="carousel-item border-2 border-[#FBBC04]">
                            <img className="w-[270px] h-[400px]" src={pic4} alt="Drink" />
                        </div>

                    </div>
                    <a href="#slide1" className="btn btn-circle bg-black text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-black text-white">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Home;