import React from "react";
import "./Home.css";
import SlidingBanner from "../../SlidingBanner/SlidingBanner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <div className="pt-8"></div>
      <div className="md:w-3/4 mx-6 md:mx-auto my-4 hidden sm:block border-4 rounded-md border-white">
        <SlidingBanner></SlidingBanner>
      </div>
      <div className="sm:w-1/2 sm:mx-auto mx-2 text-white">
        <h1 className="text-2xl font-medium text-left my-3">
          Welcome to our "Skill up" online learning platform.
        </h1>
        <p className="text-justify">
          Here you could grow your skill by joining us. We are offering some
          online courses which are very demandable nowadays. We have qualified
          and skilled instructors by whom we will train you. If you have wasted
          lots of time searching for a quality full online course which can help
          you to grow your skill? Now you are in the right place! We will help
          you to fulfill your satisfaction through our course. So, let's start
          with <span></span>
          <Link to="/course" className="text-blue-400 link link-hover">
            Skill Up.
          </Link>
        </p>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};

export default Home;
