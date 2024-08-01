import React from "react";
import HighlightText from "../Homepage/HighlightText";

const Quote = () => {
  return (
    <div className="font-semibold text-richblack-100 w-[72%] text-center mx-auto pb-10">
      <span className="text-richblack-600 font-bold">“</span>We are passionate
      about revolutionizing the way we learn. Our innovative platform{" "}
      <HighlightText text="combines technology" />,{" "}
      <span className="text-brown-100">expertise</span>, and community to create{" "}
      <span className="text-brown-600">
        an unparalleled educational experience.
      </span>
      <span className="text-richblack-600 font-bold">”</span>
    </div>
  );
};

export default Quote;
