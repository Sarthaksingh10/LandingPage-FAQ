import Questions from "../Questions/Questions";
import Arrow from "/Union.svg";

export default function QuestionBox() {
  /* Created and array of objects to map the data */
  const DetailData = [
    {
      Question: "Do you offer Freelancer",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quosdicta",
    },
    {
      Question:
        "What's the guarantee that I will be satisfied with the hired talent?",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quosdicta",
    },

    {
      Question: "Can I hire multiple talents at once?",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quosdicta",
    },
    {
      Question: "Why should I not go to an agency directly?",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quosdicta",
    },
    {
      Question: "Who can help me pick a right skillset and duration for me?",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quosdicta",
    },
  ];

  return (
    <div className="flex bg-[#E8EEE7] rounded-xl h-[750px] ">
      {/* this is the simple design div */}
      <div className="flex flex-col justify-between">
        <span className="relative top-[80px] left-[94px] gap-[20px] h-[110px]">
          <h3 className="text-[32px] font-Grace font-normal text-[#9E9D9D]">
            What{"'"}s on your mind
          </h3>
          <h2 className="text-[60px] font-Manrope font-semibold text-[#1C1C1C]">
            Ask Questions
          </h2>
        </span>
        <span>
          <img src={Arrow} alt="Arrow" className=" h-[510px] w-[490px] " />
        </span>
      </div>

      {/* This div returns the map data. */}
      <div className=" flex flex-col justify-between  w-[580px] relative top-40 left-36 h-[500px]">
        {DetailData.map((data, key) => {
          return (
            <Questions key={key} Question={data.Question} Para={data.Para} />
          );
        })}
      </div>
    </div>
  );
}
