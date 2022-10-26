import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import swal from "sweetalert";

const Reset = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { resetUserPassword } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    resetUserPassword(email)
      .then(() => {
        setErrorMessage("");
        event.target.reset();
        swal("Please check your inbox or spam box!");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        event.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className=" bg-base-200">
          <div className="hero-content h-screen flex-col ">
            <div className="text-center ">
              <h1 className="text-3xl font-semibold">Reset Password!</h1>
            </div>
            <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your valid email"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <label className="label ">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Don't have an account?
                    </Link>
                  </label>
                  {/* show error message at login time */}
                  <p className="text-xs text-red-500">{errorMessage}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 border-none">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reset;
