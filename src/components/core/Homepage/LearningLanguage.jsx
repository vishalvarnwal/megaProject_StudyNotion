import React from "react";
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.svg";
import compareWithOthers from "../../../assets/Images/Compare_with_others.svg";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from "./Button";

const LearningLanguage = () => {
  return (
    <div className="mx-auto mt-24 max-w-maxContent flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-richblack-900">
        Your swiss knife for <HighlightText text="learning any language" />
      </h1>
      <p className="text-[16px] w-[55%] text-center mt-4 mb-6">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </p>
      <div className="flex justify-center items-center">
        <img
          src={knowYourProgress}
          alt="knowYourProgress"
          className="object-contain -mr-32 mb-[55px]"
        />
        <img
          src={compareWithOthers}
          alt="compareWithOthers"
          className="object-contain"
        />
        <img
          src={planYourLessons}
          alt="planYourLessons"
          className="object-contain -ml-32 mb-8"
        />
      </div>
      <div className="mt-8 mb-14">
        <CTAButton active={true} linkTo={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguage;
