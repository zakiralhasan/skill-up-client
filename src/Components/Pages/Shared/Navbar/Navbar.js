import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../../images/logo/logo-12.png";
import logo3 from "../../../../images/logo/logo-11.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-300 flex">
        <div className="grow">
          <div className=" block sm:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-32"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/course">Course</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 mx-6">
            <div className="hidden sm:block">
              <img className="w-32 rounded" src={logo1} alt="" />
            </div>
            <div className="">
              <h2 className=" text-3xl font-semibold">Skill Up</h2>
            </div>
          </div>

          <div className="hidden sm:block">
            <ul className="flex">
              <Link to="/">
                <li className="mr-4">Home</li>
              </Link>
              <Link to="/course">
                <li className="mr-4">Courses</li>
              </Link>
              <Link to="/FAQ">
                <li className="mr-4">FAQ</li>
              </Link>
              <Link to="/blog">
                <li className="mr-4">Blog</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* end */}
        <div className="">
          <div className="dropdown dropdown-end  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
