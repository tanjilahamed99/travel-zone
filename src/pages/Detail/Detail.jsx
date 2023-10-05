import Navbar from "../../shered/Navbar";

const Detail = () => {
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
            </div>
        </div>

    </div>
    );
};

export default Detail;