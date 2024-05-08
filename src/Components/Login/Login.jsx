import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import burnel from "/Users/ASUS/Thence/src/assets/Burnel.svg";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Login() {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [btndisabled, setbtndisabled] = useState(true);
  const [validmail, setvalidmail] = useState(true);

  return (
    <div className=" h-screen w-screen  overflow-x-hidden flex flex-col justify-center m-0 p-0">
      <nav className="flex justify-between mx-8 mt-28">
        <img src={burnel} alt="Burnel" />
        <FontAwesomeIcon
          icon={faMultiply}
          className="p-16px text-[50px] text-white bg-black font-light rounded-[40px] flex gap-[10px] h-[54px] w-[54px] cursor-pointer"
          onClick={() => {
            window.location.href =
              "/"; /* On click redirecting to the home page */
          }}
        />
      </nav>
      <div className="w-full justify-center flex items-center text-center my-8">
        <div className="flex flex-col gap-[62px] justify-center items-center">
          <span className="flex flex-col gap-[16px]">
            <h1 className=" font-Grace text-[36px] text-[#2DA950]">
              Registaration Form
            </h1>
            <h3 className="text-[56px] font-Manrope font-semibold text-[#1C1C1C] w-[588px]">
              Start your success Journey here!
            </h3>
          </span>
          <span className="flex flex-col gap-[47px]">
            <span className="flex flex-col gap-[24px]">
              <input
                type="text"
                placeholder={"Enter your name"}
                /* Email validation */
                onChange={(e) => {
                  setname(e.target.value);
                  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  setvalidmail(pattern.test(mail));
                }}
                className="px-[24px] py-[36px] rounded-[64px] bg-[#EFEFEF] w-[417px] text-[#827A7A] text-[20px] font-Manrope font-medium"
              />
              <input
                type="text"
                placeholder={"Enter your email"}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
                className="px-[24px] py-[36px] rounded-[64px] bg-[#EFEFEF] w-[417px] text-[#827A7A] text-[20px] font-Manrope font-medium"
              />

              {/* Error message if invalid email entered */}
              {!validmail && (
                <p className="text-[#FF0808]">Enter a valid mail address</p>
              )}
            </span>
            <button
              type="submit"
              disabled={name === "" || mail === "" ? btndisabled : false}
              className={`disabled:bg-[#C9C9C9] bg-[#1C1C1C] px-[24px] py-[36px] rounded-[108px]  w-[417px] text-[#FFFFFF] text-[18px] font-Manrope font-semibold `}
              onClick={() => {
                window.location.href = "/Congratulation";
              }}
            >
              Submit{" "}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
