import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const courseTitle = useLoaderData();

  return (
    <div className="bg-gray-100 flex flex-col sm:flex-row pb-4">
      <div className="basis-1/5 px-2 mt-16 hidden sm:block">
        <h1 className="text-2xl font-semibold">Course Title</h1>
        <ul className="mt-4 list-inside list-decimal">
          {courseTitle.map((title) => (
            <li key={title.id} className="text-left  link link-hover">
              <Link to={`/course/${title.id}`}>{title.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* right side */}
      <div className="basis-4/5 mx-4">
        <h1 className="text-amber-500 text-xl font-semibold my-5">
          Please select your desired course and learn with the Skill Up team.
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courseTitle.map((title) => (
            <div
              key={title.id}
              className="text-left bg-white rounded-md shadow border p-2"
            >
              <img
                className="w-full border rounded-md"
                src={title.img}
                alt=""
              />
              <h1 className="font-medium">{title.name}</h1>
              <p>
                Price: <span>$</span>
                {""}
                {title.price}
              </p>
              <Link to={`/course/${title.id}`}>
                <button className="btn bg-blue-400 border-none w-full mt-2">
                  Select Course
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
