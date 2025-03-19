import React from "react";
import CourseGrid from "../components/CourseGrid";
import Footer from "../components/Footer";
import FaqComp from "../components/FaqComp";

const Courses = () => {
  return (
    <div>
      {/* popular courses */}
      <div className="p-36  flex flex-col gap-4 text-center bg-gray-100">
        <p className="text-green-500 text-lg">FEATURED COURSES</p>
        <h2 className="text-gray-900 font-semibold text-5xl">
          Browse Our Popular Courses
        </h2>
        <p className="text-gray-500 text-sm">
          Egestas faucibus nisl et ultricies. Tempus lectus condimentum
          tristique mauris id vitae. Id <br /> pulvinar a eget vitae
          pellentesque ridiculus platea. Vulputate cursus.
        </p>
        <div className="grid grid-cols-3 my-12 mx-30">
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
        </div>
        <div>
          <button className="text-gray-900 rounded-4xl cursor-pointer bg-amber-300 p-4 w-fit">
            Explore all Courses
          </button>
        </div>
      </div>
      {/* how it works */}
      <div className="px-48 py-24">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-green-500 ">HOW IT WORKS</p>
            <h3 className="text-gray-900 text-5xl font-semibold">
              Your Online Learning Journey <br />
              Made Easy
            </h3>
            <p className="text-sm ">
              Egestas faucibus nisl et ultricies. Tempus lectus condimentum
              tristique mauris id vitae. Id <br />
              pulvinar a eget vitae pellentesque ridiculus platea. Vulputate
              cursus.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 my-8">
          <div className="flex flex-col gap-4">
            <p className="p-4 rounded-full bg-blue-500 text-white text-lg w-fit">
              01
            </p>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-3xl">Choose Your Course</h6>
              <p className="text-gray-500">
                Egestas faucibus nisl et ultricies. Tempus <br />
                lectus condimentum tristique.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="p-4 rounded-full bg-blue-500 text-white text-lg w-fit">
              02
            </p>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-3xl">Choose Your Course</h6>
              <p className="text-gray-500">
                Egestas faucibus nisl et ultricies. Tempus <br />
                lectus condimentum tristique.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="p-4 rounded-full bg-blue-500 text-white text-lg w-fit">
              03
            </p>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-3xl">Choose Your Course</h6>
              <p className="text-gray-500">
                Egestas faucibus nisl et ultricies. Tempus <br />
                lectus condimentum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="bg-gray-100 px-48 py-12 grid grid-cols-2">
        <div className="rounded-lg bg-orange-300 relative mx-24 p-8">
          <div className="absolute bottom-8">
            <h6 className="text-gray-50 font-semibold">Roger Rester</h6>
            <p className="text-gray-100 text-sm">UI/UX Designer</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 m-16">
          <h4 className="text-3xl font-semibold  ">
            This course was comprehensive and covered everything i needed to
            know about animation.
          </h4>
          <p className="text-gray-500 text-sm">
            “Dui varius sed egestas et scelerisque vitae nulla. Sollicitudin
            semper vel amet sollicitudin laoreet arcu. Adipiscing euismod auctor
            velit amet integer erat ut sed porta. Augue eu nunc sem aliquet
            vulputate. Vulputate libero lorem massa faucibus leo hac tortor.”
          </p>
          <button className="p-4 text-gray-900 bg-amber-400 rounded-3xl w-fit">
            Read More Testimonials
          </button>
        </div>
      </div>
      {/* faq */}
      <div className="px-48 py-24 grid grid-cols-2">
        {/* left side */}
        <div className="cols-span-1 px-20 flex flex-col gap-4">
            <p className="text-green-500">QUESTIONS AND ANSWERS</p>
            <h2 className="font-semibold text-gray-900 text-5xl">Frequently Asked Questions</h2>
            <p className="text-gray-500 ">Egestas faucibus nisl et ultricies. Tempus lectus condimentum <br />tristique mauris id vitae. Id pulvinar a eget vitae pellentesque ridiculus platea. Vulputate cursus.</p>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-4 cols-span-1 px-12">
            <FaqComp/>
            <FaqComp/>
            <FaqComp/>
            <FaqComp/>
            <FaqComp/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
