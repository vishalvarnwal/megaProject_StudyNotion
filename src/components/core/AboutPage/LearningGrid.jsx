import React from "react";
import { learningGridArray } from "../../../data/learningGrid";
import HighlightText from "../Homepage/HighlightText";
import Button from "../Homepage/Button";

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14">
      {learningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`h-[294px] ${index === 0 && "lg:col-span-2"} ${
              card.order % 2 === 0 ? "bg-richblack-800" : "bg-richblack-700"
            } ${card.order === 3 && "lg:col-start-2"}
            ${card.order < 0 && "bg-transparent px-0 pt-0 pr-6"}
            ${card.order > 0 && "px-14 pt-10"}
            `}
          >
            {card.order < 0 ? (
              <div>
                <h1 className="text-3xl font-semibold mb-4">
                  <p>{card.heading}</p>
                  <HighlightText text={card.highliteText} />
                </h1>
                <p className="text-richblack-300 mb-6">{card.description}</p>
                <div className="inline-block">
                  <Button active={true} linkTo={card.BtnLink}>
                    {card.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-y-5">
                <h1 className="text-richblack-5">{card.heading}</h1>
                <p className="text-sm text-richblack-100">
                  {card.description}{" "}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
