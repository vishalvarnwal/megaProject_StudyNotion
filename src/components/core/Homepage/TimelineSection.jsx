import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png";

const TimelineSection = () => {
  const timeLine = [
    {
      logo: Logo1,
      heading: "Leadership",
      description: "Fully committed to the success company",
    },
    {
      logo: Logo2,
      heading: "Responsibility",
      description: "Students will always be our top priority",
    },
    {
      logo: Logo3,
      heading: "Flexibility",
      description: "The ability to switch is an important skills",
    },
    {
      logo: Logo4,
      heading: "Solve the problem",
      description: "Code your way to a solution",
    },
  ];
  return (
    <div className="mx-auto max-w-maxContent mt-8">
      <div className="flex gap-[120px] items-center">
        <div className="flex flex-col width-[50%] gap-14">
          {timeLine.map((element, index) => {
            return (
              <>
                <div className="timeline flex gap-4 items-center key={index} relative">
                  <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    <img src={element.logo} />
                  </div>
                  <div>
                    <h1 className="text-richblack-900 font-bold">
                      {element.heading}
                    </h1>
                    <p>{element.description}</p>
                  </div>
                  <div className="test border border-dashed border-pure-greys-100 h-10 absolute self-center left-[24px] top-[58px]"></div>
                </div>
              </>
            );
          })}
        </div>
        <div className="shadow-blue-200 relative">
          <img
            src={timeLineImage}
            alt="timelineImage"
            className="shadow-white object-fill h-[400px] pl-20"
          />
          <div className="absolute bg-caribbeangreen-700 flex text-white uppercase py-4 w-[70%] left-[130px] -bottom-[35px]">
            <div className="flex gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className="text-3xl font-bold">10</p>
              <p className="text-caribbeangreen-300">Years experience</p>
            </div>
            <div className="flex gap-5 items-center px-7">
              <p className="text-3xl font-bold">250</p>
              <p className="text-caribbeangreen-300">Types of courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
