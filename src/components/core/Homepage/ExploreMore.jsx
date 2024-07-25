import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabNames = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabNames[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter(
      (course) => course.tag.toLowerCase() === value.toLowerCase()
    );
    setCourses(result[0].courses || []);
    setCurrentCard(result[0].heading);
  };
  return (
    <div>
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richblack-300 text-lg mt-3">
        Learn to Build Anything You Can Imagine
      </p>
      <div className="flex rounded-full bg-richblack-800 border border-richblack-700 my-10">
        {tabNames.map((tab, index) => {
          return (
            <div
              key={index}
              className={`text-[16px] flex items-center gap-2 px-7 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                tab === currentTab
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } hover:bg-richblack-900 hover:text-richblack-5`}
              onClick={() => setMyCard(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      {/* <div className="lg:h-[150px]"></div> */}
      {/* group of course cards */}
      <div className="flex gap-10 justify-between w-full">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              cardData={course}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
