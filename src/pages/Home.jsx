import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/Homepage/HighlightText";
import CTAButton from "../components/core/Homepage/Button";
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import LearningLanguage from "../components/core/Homepage/LearningLanguage";
import InstructorSection from "../components/core/Homepage/InstructorSection";
import ReviewsFromLearner from "../components/core/Homepage/ReviewsFromLearner";
import Footer from "../components/common/Footer";
import Banner from "../assets/Images/banner.mp4";
import ExploreMore from "../components/core/Homepage/ExploreMore";
const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <section className="mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center gap-1 px-10 py-[5px] group-hover:bg-richblack-900 rounded-full">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-4xl font-semibold mt-7">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[70%] text-center font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkTo={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton>Book a Demo</CTAButton>
        </div>

        <div className="shadow-blue-200 mx-3 my-12">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/*code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold text-white">
                Unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkTo: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title><link ref="stylesheet" href="styles.css" />\n/head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/*code section 2 */}
        <div className="w-[100%]">
          <CodeBlocks
            position={"lg:flex-row-reverse justify-between"}
            heading={
              <div className="text-4xl font-semibold text-white">
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkTo: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title><link ref="stylesheet" href="styles.css" />\n/head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* unlock the power of code */}
        <ExploreMore />
      </section>

      {/* section 2 */}
      <section className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px] flex items-center justify-center">
          <div className="flex items-center gap-5 text-white">
            <CTAButton active={true} linkTo={"./signup"}>
              <div className="flex items-center gap-2">
                Explore Full Catalog <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={false} linkTo={"./signup"}>
              Learn More
            </CTAButton>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex gap-8 pb-8 pt-12">
            <div className="text-richblack-800 font-semibold text-4xl w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text="job that is in demand." />
            </div>
            <div className="flex flex-col gap-6 items-start w-[50%] pr-20">
              <p className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkTo={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <TimelineSection />

        <LearningLanguage />
      </section>

      {/* section 3 */}
      <section className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-8 items-center bg-richblack-900 text-white">
        <InstructorSection />
        <ReviewsFromLearner />
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
