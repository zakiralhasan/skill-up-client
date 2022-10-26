import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import swal from "sweetalert";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const provider = new GoogleAuthProvider();
  const {
    user,
    userLoginWithEmailAndPassword,
    loginUserWithGoogle,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log(user);
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //user login with email and password
    userLoginWithEmailAndPassword(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);

        // used for user email verification issue resolve
        navigate(from, { replace: true });
        // if (user?.emailVerified) {
        //   navigate(from, { replace: true });
        // } else {
        //   swal(" Your email is not verified yet! Please verify your email.");
        // }
        form.reset();
        setErrorMessage("");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        form.reset();
      });
  };

  //user login with google account
  const loginWithGoogle = () => {
    loginUserWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
      })
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
              <h1 className="text-4xl font-semibold">Login now!</h1>
            </div>
            <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex justify-around text-2xl">
                  <FcGoogle
                    onClick={loginWithGoogle}
                    className="cursor-pointer"
                  />
                  <FaGithub className="cursor-pointer" />
                  <FaFacebook className="text-blue-500 cursor-pointer" />
                </div>
                <div className="divider">OR</div>
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
                      to="/reset"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
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
                  <button className="btn bg-blue-400 border-none">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
