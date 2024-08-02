import React from "react";
import HighLightText from "../components/core/Homepage/HighlightText";
import Quote from "../components/core/AboutPage/Quote";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    // mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent
    <div className="flex flex-col gap-y-5 items-center text-white justify-center mx-auto">
      {/* section1 */}
      <section className="bg-richblack-800 pt-[100px] relative h-[580px]">
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <h1 className="flex flex-col items-center justify-center text-4xl">
            Driving Innovation in Online Education for a{" "}
            <HighLightText text="Brighter Future" />
          </h1>
          <p className="w-[60%] text-center text-[16px] text-richblack-300">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
          <div className="flex gap-x-4 mx-auto absolute -bottom-12">
            <img src={BannerImage1} alt="banner1" />
            <img src={BannerImage2} alt="banner2" />
            <img src={BannerImage3} alt="banner3" />
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className="mt-[100px]">
        <div className="text-4xl">
          <Quote />
        </div>
      </section>

      <hr className="border-t border-richblack-700 my-10 w-full" />

      {/* section3 */}
      <section className="mt-10 items-center justify-center w-11/12">
        <div className="mx-auto px-[120px] flex flex-col gap-y-20">
          {/* upper div */}
          <div className="flex justify-evenly gap-20 px-4">
            {/* left div */}
            <div className="w-[50%]">
              <h1 className="text-4xl font-semibold text-[#8B0000] mb-8">
                Our Founding Story
              </h1>
              <div className="flex flex-col gap-y-6 text-richblack-300">
                <p>
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group
                  of educators, technologists, and lifelong learners who
                  recognized the need for accessible, flexible, and high-quality
                  learning opportunities in a rapidly evolving digital world.
                </p>
                <p>
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems.
                  We believed that education should not be confined to the walls
                  of a classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>
            </div>
            {/* right div */}
            <div className="w-[50%] pt-14">
              <img
                className="ml-auto"
                src={FoundingStory}
                alt="founding-story"
              />
            </div>
          </div>
          {/* lower div */}
          <div className="flex justify-evenly gap-20 px-4">
            {/* left div */}
            <div className="w-[50%]">
              <h1 className="text-4xl font-semibold text-[#E65C00] mb-8">
                Our Vision
              </h1>

              <p className="text-richblack-300">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            {/* right div */}
            <div className="w-[50%] pl-8">
              <h1 className="text-4xl font-semibold text-[#1FA2FF] mb-8">
                Our Mission
              </h1>

              <p className="text-richblack-300">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section4 */}
      <section className="mt-16 py-20 bg-richblack-800 w-full">
        <Stats />
      </section>

      {/* section5 */}
      <section className="mb-20 w-11/12 px-10 flex flex-col items-center">
        <LearningGrid />
        <ContactFormSection />
      </section>
      {/* footer section */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
