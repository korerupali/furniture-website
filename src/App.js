import "./App.css";

import FirstContent from "./FirstContent";
import ImageFive from "./Assets/img5.jpeg";
import Image from "./Image";
import MobileCarousel from "./Carousel";
import CarouselFiveImg from "./CarouselFiveImg";
import backImg from "./Assets/backImg.svg";
import furImg from "./Assets/furImg.webp";
import middleImg from "./Assets/middleImg.webp";
import FurnitureSec from "./FurnitureSec";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1216px] mx-auto bg-gray-100 py-20 mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
          <FirstContent />
          <Image />
        </div>
      </div>

      <div className=" py-[20px] md:py-[140px] px-[20px] md:px-[90px]">
        <FurnitureSec />
      </div>

      <div className="max-w-[1216px] mx-auto bg-gray-100 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
          <ImageDivFive />
          <SecondContent />
        </div>
      </div>

      <div>
        <MobileCarousel />
      </div>

      <div>
        <MiddleDiv />
      </div>
      <div>
        <BackgroundImage />
      </div>

      <div className="bg-[#f5f2f2] lg:mt-[120px] lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-[40px] lg:p-[90px] ">
          <div>
            <h1 className="text-[32px] font-bold mb-[20px]">
              Trusted by over 8M sellers around the world
            </h1>
          </div>
          <div>
            <p className="text-[22px] mb-[20px] ">
              Whether you are just getting started or run an enterprise-level
              e-commerce business, we do everything we can to ensure a positive
              merchant experience.
            </p>
          </div>
        </div>
        <CarouselFiveImg />
      </div>

      <div>
        <LastDiv />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

function SecondContent() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <h1 className="text-[35px] font-bold text-blue-600">
          Easily add your design to a wide range of products
        </h1>
        <p>
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
      </div>
    </>
  );
}

function BackgroundImage() {
  return (
    <div
      className="bg-cover bg-center flex justify-evenly flex-x-6  py-[40px] mb-[40px] text-center"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <h1 className=" text-[13px] sm:text-[25px] max-w-[60%]">
        Are you a large business looking for custom solutions?
      </h1>
      <button className="bg-white  cursor-pointer px-[20px] py-[10px] ml-[10px] sm:ml-[30px] text-[12px] sm:text-[20px]">
        Talk to Sales
      </button>
    </div>
  );
}

function ImageDivFive() {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <img
          src={ImageFive}
          alt="Home decore Img"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}

function MiddleDiv() {
  return (
    <>
      <div className="text-center">
        <h1 className=" text-[22px] sm:text-[45px] font-semibold mb-[20px]">
          Connect our Furniture Quality store
        </h1>
        <p className=" text-[15px] sm:text-[20px] mb-[20px] sm:mb-[50px] ">
          Investing in our furniture means choosing high-quality, stylish pieces
          that not only enhance your living space but also stand the test of
          time.
        </p>
        <img
          className="object-cover w-[250px] sm:w-[900px] h-[200px] sm:h-[500px] m-auto mb-[40px] sm:mb-[100px]"
          src={middleImg}
          alt=""
        />
      </div>
    </>
  );
}

function LastDiv() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:my-[60px] lg:my-[100px] sm:mx-[70px] lg:mx-[200px]">
        <div className="bg-[#080835d5] text-[white] px-[30px] py-[60px] rounded-3xl">
          <h className="text-[33px] font-semibold">Make Money,Risk-Free</h>
          <p className=" text-[18px] my-4">
            You pay for fulfillment only when you make a sale
          </p>

          <div className="bg-[#14143a] p-5">
            <div className="flex justify-between py-2">
              <p>You sell furniture</p>
              <p>Rs.4499</p>
            </div>

            <div className="flex justify-between py-2">
              <p>You pay for its production</p>
              <p>Rs.2000</p>
            </div>

            <hr />

            <div className="flex justify-between py-2 text-[#19c219] font-semibold text-[18px]">
              <p>Your profit</p>
              <p>Rs.2499</p>
            </div>
          </div>
          <button className="w-[100%] md:w-[150px] h-[50px] bg-[#089e08] my-5">
            Start selling
          </button>

          <p>100% Free to use · 900+ Products · Largest print network</p>
        </div>

        <div>
          <img
            className="hidden lg:block h-[600px] rounded-3xl "
            src={furImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
