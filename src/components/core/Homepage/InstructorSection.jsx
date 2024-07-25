import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="flex gap-20 items-center mt-16">
      <div className="w-[50%]">
        <img src={Instructor} alt="instructor" className="shadow-white" />
      </div>
      <div className="w-[50%] flex flex-col gap-6">
        <div className="text-4xl font-semibold">
          {["Become an", <br />, <HighlightText text="instructor" />]}
        </div>
        <p className="text-[16px] font-medium w-[90%] text-richblack-300">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </p>
        <div className="w-fit mt-10">
          <CTAButton active={true} linkTo={"/signup"}>
            <div className="flex gap-2 items-center">
              Start Teaching Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
