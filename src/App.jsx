import burnel from "./assets/Burnel.svg";
import GirlPhoto from "./assets/Girlphoto.svg";
import sparkle from "./assets/spark, sparkle, 26.svg";
import Rocket from "./assets/Rocket.svg";

import QuestionBox from "./Components/QuestionBox/QuestionBox";
import "./App.css";
import { Link } from "react-router-dom";

import { faArrowRight, faCopyright } from "/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "/@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-col items-center ">

      {/* Navbar Section of the page */}
      <nav className=" w-[90%] flex justify-center my-4 mx-[70px]">
        <ul className="flex justify-between items-center w-full rounded-[66px] border border-[#EAEAEA] p-2 ">
          <span>
            <li className="pl-[52px]">
              <img src={burnel} alt="logo" />
            </li>
          </span>
          <span className="flex relative right-0 ">
            <Link to={"/Login"}>
              <li className="rounded-[100px] p-2 border border-[#EAEAEA] bg-white text-black text-center ml-3 px-[49px] py-[26px] text-[18px] hover:bg-[#F1F1F1]">
                Get Projects
              </li>
            </Link>
            <Link to={"/Onboard"}>
              <li className="rounded-[100px] p-2 border border-white bg-[#1C1C1C] text-white text-center ml-3 px-[49px] py-[26px] text-[18px] hover:bg-[#4E4E4E]">
                Onboard Talent
              </li>
            </Link>
          </span>
        </ul>
      </nav>

      {/* This is the center section of the page where images are imported   */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[62px]">
          <div className="flex flex-col justify-center items-center">

            {/* The Header div */}
            <div className="Container flex flex-col items-center w-[688px] h-[178px] pl-[62px] shadow-[0_22px_36.14px_0px_rgba(30, 30, 30, 0.09)]">
              <h2 className="Container_Heading text-[#2DA950] text-[36px] font-Grace">
                Success Stories
              </h2>
              <p className="Container_para text-[56px] w-full text-center font-Manrope font-semibold">
                Every success journey we{"'"}ve encountered.
              </p>
            </div>
         
         {/* Div aligning div around the photo of a girl */}
            <div className="flex justify-between  items-center relative left-[62px]">
              <span className="relative top-20 right-20">
                <img
                  src={GirlPhoto}
                  alt="Girl wearing specs"
                  height="547px"
                  width="507px"
                  className=" rounded-[51px]"
                />

                {/* The 40% box */}
                <span
                  style={{
                    boxShadow: " 0px 22.59px 36.14px 0px #1E1E1E17",
                  }}
                  className="w-[230px] h-[230px] flex flex-col justify-center p-2 bg-white rounded-[27px] relative bottom-[420px] right-[90px]"
                >
                  <img
                    src={sparkle}
                    alt="Sparkle"
                    height={"80px"}
                    width={"80px"}
                  />
                  <h2 className="font-semibold text-[44px] relative left-8 bottom-10">
                    40%
                  </h2>
                  <p className="text-[18px] text-[#828282] w-full text-start relative bottom-10 left-3 font-Manrope font-medium">
                    Achieved reduction in project execution time by optimising
                    team availability
                  </p>
                </span>

                {/* Half of a million box  */}
                <span className="w-[300px]  flex flex-col justify-center pt-[34px] pr-[30px] pb-[40px] pl-[36px] bg-[#002E18] rounded-[27px] relative bottom-[400px] left-[340px] text-white">
                  <h2 className="font-semibold text-[60px]   flex font-Switzer">
                    $0.5{" "}
                    <span className="text-[20px]  mt-[42px]  text-[#A6A3A0] font-Switzer">
                      MILLION
                    </span>
                  </h2>
                  <p className="text-[18px] w-full text-start opacity-80 relative bottom-4 left-2 font-Manrope font-medium">
                    Reduced client expenses by saving on hiring and employee
                    costs.
                  </p>
                </span>

                <span
                  style={{
                    boxShadow: " 0px 15.21px 35.49px 0px #00000017",
                  }}
                  className="text-[20px] rounded-[50px] w-1/2 bg-white text-black px-[19px] py-[16px] relative bottom-[550px] right-[70px] flex justify-center items-center"
                >
                  <span className="h-[40px] w-[40px] rounded-[20px] bg-[#00000017] flex justify-center">
                    <img src={Rocket} alt="Rocket" height={"25px"} width={"25px"}/>
                  </span>
                  <span className="flex flex-col">
                    <h4 className="font-Manrope font-bold">10 DAYS</h4>
                    <h5 className=" font-Manrope font-medium">
                      Staff Development
                    </h5>
                  </span>
                </span>
              </span>

              {/* The text box */}
              <span className="relative bottom-56  left-32 h-[200px] w-[600px] flex flex-col justify-center items-center">
                <p className="w-[400px] text-[40px] font-Manrope font-semibold">
                  Enhance fortune 50 company{"'"}s insights teams research
                  capabilities
                </p>
                <span className="flex mt-[40px] mr-[300px]">
                  <span className="h-[11px] w-[11px] rounded-full bg-[#2DA950] p-2"></span>
                  <span className="h-[11px] w-[11px] rounded-full bg-[#E4E3E3] p-2 ml-1"></span>
                  <span className="h-[11px] w-[11px] rounded-full bg-[#E4E3E3] p-2 ml-1"></span>
                </span>
                <button className="text-[19px] rounded-full w-1/2 bg-black text-white p-3 relative top-[130px] mr-[90px]  hover:bg-[#4E4E4E] px-[40px] py-[30px]">
                  Explore more <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </span>
            </div>
          </div>

          {/* The FAQ div */}
          <div className="relative bottom-40 w-[1376px] ">
            <QuestionBox />
          </div>
        </div>

        {/* The Footer  */}
        <div className=" w-[90%] flex  mx-12 ">
          <ul
            className="flex justify-between w-full rounded-[40px] 
          bg-[#F5F5F5]  items-center p-[60px] text-[18px] "
          >
            <span>
              <li className=" cursor-pointer font-Manrope font-medium text-[#1C1C1C]">
                <p>
                  <FontAwesomeIcon icon={faCopyright} /> Talup 2023. All rights
                  reserved.
                </p>
              </li>
            </span>
            <span className="flex mr-4 gap-[52px] ">
              <li className="underline flex items-center  cursor-pointer font-Manrope font-normal">
                Terms {"&"} Condition
              </li>
              <li className="underline text-center ml-3 cursor-pointer font-Manrope font-normal">
                Privacy Policy
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
