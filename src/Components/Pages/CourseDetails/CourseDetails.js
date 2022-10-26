import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const {
    id,
    name,
    category_id,
    topics,
    topics01,
    topics02,
    topics03,
    topics04,
  } = useLoaderData();
  console.log(topics04);
  return (
    <div>
      <div>
        <h1 className="text-2xl my-6 font-semibold text-amber-500">
          Welcome to {name} course.
        </h1>
        <div className="flex gap-4">
          <div className="basis-1/4 text-left pl-3 hidden sm:block">
            <h1 className="pl-2 text-2xl font-medium">Topics:</h1>
            <ul className="text-left px-2 list-inside list-decimal">
              {topics.map((topic, index) => (
                <li key={index}> {topic}</li>
              ))}
            </ul>
          </div>

          <div className=" sm:basis-3/4 w-full mt-3 sm:mr-4 border-2 shadow-lg mx-2">
            <p className="text-justify p-2">
              <span className="font-semibold">Notice:</span> First of all thanks
              for joining our course. We provide two types of courses, one is
              free and the other is premium. Firstly you read our free course
              materials. If you are satisfied, then you can purchase our premium
              course.
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 text-justify">
          <p className="my-2">
            <span className="text-xl font-medium">Topic-1:</span> {topics01}
          </p>
          <p className="my-2">
            <span className="text-xl font-medium">Topic-2:</span> {topics02}
          </p>
          <p className="my-2">
            <span className="text-xl font-medium">Topic-3:</span> {topics03}
          </p>
          <p className="my-2">
            <span className="text-xl font-medium">Topic-4:</span> {topics04}
          </p>
        </div>
        <p className="text-left m-4 font-medium">
          If you are interested to learn more topics, please purchase our{" "}
          <Link to="/premium" className="text-blue-500 link link-hover">
            premium cours.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
