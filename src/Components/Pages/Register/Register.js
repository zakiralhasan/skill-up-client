import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const formHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgURL = form.imageURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, imgURL, email, password);

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={formHandle}>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-4xl font-semibold">Register Free!</h1>
            </div>
            <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control mb-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="py-2 outline-none "
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <input
                    type="text"
                    name="imageURL"
                    placeholder="Enter your image URL"
                    className="py-2 outline-none "
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                  <label className="label mt-2">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Alrady have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 border-none">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
