import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const courseTitle = useLoaderData();

  console.log(courseTitle);

  return (
    <div className="bg-gray-50 flex pb-4">
      <div className="basis-1/5 px-2 mt-8">
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
        <h1>course card</h1>
        <div className="grid grid-cols-3 gap-6">
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
              <h1>{title.name}</h1>
              <p>Name</p>
              <Link to={`/course/${title.id}`}>
                <button>Go</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
