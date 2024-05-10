import "@fortawesome/fontawesome-free/css/all.css";
import proptype from "prop-types";
import { useState } from "react";

/* this is the component created to be used to import the data inside the div inside the FAQ section */
const Questions = ({ Question, Para }) => {
  const [hidden, setHidden] = useState(false);

  const changeHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="gap-[36px] flex justify-between border-b-[1px] border-[#D7D7D7] pb-8">
      <div>
        <h3 className="text-[20px] font-Manrope font-semibold w-[400px] flex justify-between">
          {Question}
        </h3>
        <p
          className={`${
            hidden ? "visible" : "hidden"
          } font-Manrope font-normal text-[15px] text-[#617275]`}
        >
          {Para}
        </p>
      </div>
      <span>
        <i
          className={`${hidden ? "hidden" : "visible"} cursor-pointer fa fa-plus`}
          onClick={changeHidden}
        />
        <i
          
          onClick={changeHidden}
          className={`${hidden ? "visible" : "hidden"} cursor-pointer fa fa-minus`}
        />
      </span>
    </div>
  );
};

Questions.propTypes = {
  Question: proptype.any,
  Para: proptype.any,
};
export default Questions;
