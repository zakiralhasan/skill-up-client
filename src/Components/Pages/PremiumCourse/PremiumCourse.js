import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const PremiumCourse = () => {
  const [purcheseInfo, setPurcheseInfo] = useState(null);
  const { name, price } = useLoaderData();
  const courseName = name;
  console.log(purcheseInfo);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const transectionID = form.transectionID.value;
    const email = form.email.value;
    const password = form.password.value;
    // setPurcheseInfo({ name, transectionID, email });
    console.log(name, transectionID, email, password);
    swal({
      title: "Congraculation!",
      text: `You have successfully purchese the ${courseName} course!`,
      icon: "success",
      button: "Ok",
    });
    form.reset();
    setPurcheseInfo({ userName, transectionID, email, name, price });
  };
  return (
    <div>
      <div>
        {purcheseInfo ? (
          <div className="py-40 bg-gray-100 ">
            <div className="bg-white w-fit mx-auto text-left border p-5 rounded-md shadow-md">
              <p>
                <span className="font-medium">Name: </span>
                {purcheseInfo?.userName}
              </p>
              <p>
                <span className="font-medium">Email: </span>
                {purcheseInfo?.email}
              </p>
              <p>
                <span className="font-medium">Transection ID: </span>
                {purcheseInfo?.transectionID}
              </p>
              <p>
                <span className="font-medium">Purchese course: </span>
                {purcheseInfo?.name}
              </p>
              <p>
                <span className="font-medium">Price: </span>$
                {purcheseInfo?.price}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleForm}>
            <div className="hero bg-base-200">
              <div className="hero-content flex flex-col sm:flex-row ">
                <div className="text text-left ">
                  <h1 className="text-2xl font-semibold">
                    Please fill-up the form and continue purchasing.
                  </h1>
                </div>
                <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control mb-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="py-2 outline-none "
                        required
                      />
                      <hr />
                    </div>
                    <div className="form-control mb-2">
                      <input
                        type="text"
                        name="transectionID"
                        placeholder="Enter your transaction ID"
                        className="py-2 outline-none "
                        required
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
                      <label className="label mt-2"></label>
                    </div>
                    <div className="form-control ">
                      <button className="btn bg-blue-400 border-none">
                        Confirm Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PremiumCourse;
