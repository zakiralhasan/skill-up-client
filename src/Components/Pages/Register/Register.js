import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { creatUser, updateUserProfile, userEmailVerification } =
    useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgURL = form.imageURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, imgURL, email, password);

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userVerification();
        updateUserInfoWithPicture(name, imgURL);
        form.reset();
        setErrorMessage("");
        swal(
          "A verification email has been sent to your email address! Please check."
        );
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        form.reset();
      });
  };

  //update user profile with name and picture
  const updateUserInfoWithPicture = (name, imgURL) => {
    console.log(name, imgURL);
    updateUserProfile({ displayName: name, photoURL: imgURL })
      .then(() => {})
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
      });
  };

  //verify user through valid mail
  const userVerification = () => {
    userEmailVerification()
      .then()
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className=" bg-base-200">
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
                  {/* show error message at login time */}
                  <p className="text-xs text-red-500">{errorMessage}</p>
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
