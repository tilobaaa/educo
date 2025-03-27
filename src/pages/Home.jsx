import React from "react";
import CourseGrid from "../components/CourseGrid";
import Footer from "../components/Footer";
import { CgPlayButton } from "react-icons/cg";
import { GiPadlock } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import InstructorsGrid from "../components/InstructorsGrid";
import biologyImg from '/assets/biology.jpg'
import chemistryImg from '/assets/chemistry.jpg'
import mathsImg from '/assets/maths.jpg'
import graduateImg from '/assets/graduate.jpg'
import computerImg from '/assets/computer.jpg'
import processImg from '/assets/process.jpg'





const Home = () => {
  return (
    <div>
      {/* main */}
      <div className="p-8 grid grid-cols-4 ">
        {/* left */}
        <div className="col-span-1 relative">
          <div className="absolute right-8 top-8">
            <div className="bg-orange-200 w-36 h-36 rounded-lg flex justify-center items-center">
              <div className="bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
                <CgPlayButton className="text-3xl text-blue-500" />
              </div>
            </div>
            <h4>How it Works</h4>
            <p>2 mins</p>
          </div>
        </div>
        {/* middle */}
        <div className="col-span-2 text-center flex flex-col gap-4">
          <p className="text-green-300">EDUCATION & ONLINE COURSES</p>
          <h1 className="text-7xl">Welcome to LearnX</h1>
          <p className="text-gray-500">
            We’re excited to have you here! Our platform is designed to make
            learning accessible, engaging, and impactful. Whether you're a
            student, educator, or lifelong learner, you’ll find valuable
            resources to expand your knowledge and skills. Explore a variety of
            courses, expert insights, and interactive tools tailored to help you
            achieve your learning goals. Join our community and take the next
            step in your educational journey today! Start Learning Now! 
          </p>
          <div className="flex gap-6 justify-center items-center">
            <button className="bg-amber-300 py-4 px-4 rounded-xl">
              Apply now
            </button>
            <button className="py-4 px-4 rounded-xl">Learn More</button>
          </div>

          <p className="mt-8 font-bold">Scroll Down</p>
        </div>
        {/* right */}
        <div className="col-span-1 text-right relative">
          <div className="absolute bottom-4 left-16 flex flex-col gap-2">
            <div className="bg-orange-200 h-48 w-36 rounded-lg"></div>
            <div>
              <h4 className="font-bold text-black">Betty Calhoun</h4>
              <p className="text-gray-400 text-xs">Lead Instructor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-white flex items-center justify-center gap-8 py-8">
        <div>
          <p className="text-5xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-5xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-5xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-5xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
      </div>

      {/* who we are  */}
      <div id="about" className="grid grid-cols-2 px-36 my-36">
        <div className="col-span-1 px-24 flex flex-col gap-4">
          <p className="text-green-300 text-lg">WHO WE ARE</p>
          <h2 className="text-6xl text-black font-semibold">
            Your Online Learning Partner{" "}
          </h2>
        </div>
        <div className="bg-gray-100 rounded-lg col-span-1 p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Video Course</p>
            <p>(1/110)</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="p-3 flex justify-between bg-blue-500 text-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-0.5 flex items-center justify-center cursor-pointer">
                  <CgPlayButton className="text-3xl text-blue-500" />
                </div>
                <p>Introduction</p>
              </div>
              <p>7:00</p>
            </div>
            <div className="p-3 flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="bg-gray-400 rounded-full p-2 flex items-center justify-center cursor-pointer">
                  <GiPadlock className="text-xl text-blue-500" />
                </div>
                <p className="text-gray-500">Social Media Marketing</p>
              </div>
              <p>65:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* options/featurs */}
      <div className="  flex gap-4 justify-center">
        <div className="bg-gray-200 rounded-lg w-80  p-4">
          <div className="flex items-center justify-center p-4 bg-blue-500 w-fit rounded-lg my-4">
            <FaBookOpen className="text-white" />
          </div>
          <h6 className="text-2xl font-semibold mb-4">Online Lessons</h6>
          <p className="text-gray-500 text-sm">
            Learn at your own pace with expert-led courses. with our download
            them for offline learning
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg w-80 p-4">
          <div className="flex items-center justify-center p-4 bg-green-500 w-fit rounded-lg my-4">
            <MdOutlineFileUpload className="text-white" />
          </div>
          <h6 className="text-2xl font-semibold mb-4">Tests</h6>
          <p className="text-gray-500 text-sm">
            Test your knowledge with interactive quizzes. Get instant feedback
            and track your progress!
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg w-80  p-4">
          <div className="flex items-center justify-center p-4 bg-amber-500 w-fit rounded-lg my-4">
            <LuAward className="text-white" />
          </div>
          <h6 className="text-2xl font-semibold mb-4">Certifications</h6>
          <p className="text-gray-500 text-sm">
            Earn a certificate and level up your learning!
          </p>
        </div>
      </div>
      {/* Featured courses */}
      <div className="p-36 my-36 flex flex-col gap-4 text-center bg-gray-100">
        <p className="text-green-500 text-lg">FEATURED COURSES</p>
        <h2 className="text-gray-900 font-semibold text-5xl">
          Assigned Lessons
        </h2>
        <p className="text-gray-500 text-sm">
          View Our carefully selected essons assigned by teachers
        </p>
        <div className="grid grid-cols-3 my-12 ">
          <CourseGrid
            title="Basic Technology: Introduction
to B.tech"
            lessons="4"
            author="Anthony Ikechukwu"
            img={processImg}
          />
          <CourseGrid
            title="Mathematics: Basics of Mathematics"
            lessons="3"
            author="Queen Esther"
            img={mathsImg}
          />
          <CourseGrid
            title="Social Studies: Introduction to Social Studies"
            lessons="2"
            author="Dolapo Joel"
            img={computerImg}
          />
          <CourseGrid
            title="Computer Science: Advanced Lesson"
            lessons="6"
            author="Toluwani Isaac"
            img={computerImg}
          />
          <CourseGrid
            title="Biology: Reproduction in Animals,Mammals & Plants"
            lessons="5"
            author="Adam Johnson"
            img={biologyImg}
          />
          <CourseGrid
            title="Chemistry: Understanding The periodic table"
            lessons="2"
            author="Amaka Edwards"
            img={chemistryImg}
          />
        </div>
        <div>
          <button className="text-gray-900 rounded-4xl cursor-pointer bg-amber-300 p-4 w-fit">
            Explore all Courses
          </button>
        </div>
      </div>
      {/* why choose us? */}
      <div className="flex gap-8 mx-64">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-orange-200 w-full flex-1">
            <img className="w-full h-full rounded-lg" src={graduateImg} alt="" />
          </div>
          <div className="bg-gray-100 rounded-lg text-gray-900 p-4 flex gap-4">
            <div className="p-2 bg-yellow-500 rounded-lg w-fit flex items-center justify-center">
              <IoIosStarOutline className="text-white text-2xl" />
            </div>
            <p>
              Learn at your own pace, with lifetime access on mobile and
              desktop.ccess lessons anytime—even offline!"
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-green-500">WHY CHOOSE US</p>
          <h2 className="text-5xl text-gray-900 ">
            Your Learning Journey, <br /> Your Way
          </h2>

          <div className="flex flex-col gap-4 my-8">
            <div className="flex gap-4 items-start">
              <div className="flex  items-center  p-4 bg-blue-500 w-fit rounded-lg">
                <FaBookOpen className="text-white" />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-gray-900 font-semibold">
                  High-Quality Content Course
                </h6>
                <p className="text-gray-500">
                  Enim amet enim volutpat luctus ipsum pellentesque massa nisl
                  sed. Sit ut nibh odio morbi diam. Mi euismod diam.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex  items-center  p-4 bg-blue-500 w-fit rounded-lg">
                <FaBookOpen className="text-white" />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-gray-900 font-semibold">
                  Interactive Learning Experience
                </h6>
                <p className="text-gray-500">
                  Enim amet enim volutpat luctus ipsum pellentesque massa nisl
                  sed. Sit ut nibh odio morbi diam. Mi euismod diam.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex  items-center  p-4 bg-blue-500 w-fit rounded-lg">
                <FaBookOpen className="text-white" />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-gray-900 font-semibold">
                  Exceptional Student Support
                </h6>
                <p className="text-gray-500">
                  Enim amet enim volutpat luctus ipsum pellentesque massa nisl
                  sed. Sit ut nibh odio morbi diam. Mi euismod diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our instructors */}
      <div id="intructors" className="flex flex-col gap-6 text-center justify-center align-center my-12 py-12 bg-gray-100 px-48 ">
        <p className="text-lg text-green-500">OUR INSTRUCTOR</p>
        <h6 className="text-5xl font-semibold text-gray-900">
          Meet Our Expert Instructors
        </h6>
        <p className="text-sm text-gray-400">
          Egestas faucibus nisl et ultricies. Tempus lectus condimentum
          tristique mauris id vitae. Id <br />
          pulvinar a eget vitae pellentesque ridiculus platea. Vulputate cursus.
        </p>
        <div className="grid grid-cols-4">
          <InstructorsGrid />
          <InstructorsGrid />
          <InstructorsGrid />
          <InstructorsGrid />
        </div>
      </div>
      {/* how it works */}
      <div className="px-48">
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
        <div className="flex flex-col gap-6  mx-8">
          <FaQuoteLeft className="text-blue-500 text-5xl"/>
          <h4 className="text-2xl font-semibold  ">
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
      {/* call to action */}
      <section id="contact" className="my-16 flex flex-col gap-8 justify-center items-center">
        <p className="text-green-500">CALL TO ACTION</p>
        <h5 className="font-semibold text-4xl">Join Educo Community</h5>
        <p className="text-gray-500 ">
          Egestas faucibus nisl et ultricies. Tempus lectus condimentum
          tristique mauris id vitae. Id <br />
          pulvinar a eget vitae pellentesque ridiculus platea. Vulputate cursus.
        </p>
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <h6 className="font-bold text-2xl text-gray-900">54K+ Courses</h6>
            <p className="text-gray-500 text-sm">Sed purua moleste</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-bold text-2xl text-gray-900">120 + Instructors</h6>
            <p className="text-gray-500 text-sm">Sed purua moleste</p>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-bold text-2xl text-gray-900">80K + Members</h6>
            <p className="text-gray-500 text-sm">Sed purua moleste</p>
          </div>
        </div>
        <div className="rounded-4xl bg-gray-100 p-2">
          <input
            type="text"
            className=" p-4"
            placeholder="Enter email address"
          />
          <button className="bg-amber-300 text-black p-4 rounded-4xl">
            Get started Now{" "}
          </button>
        </div>
        <p className="text-xs text-gray-500">
          Your data is completely secure with us. We don't share with anyone.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
