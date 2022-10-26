import React from "react";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-2xl my-6 font-semibold text-amber-500">
        Frequently asked questions answer has given below.
      </h1>
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mx-4 my-4"
        >
          <div className="collapse-title text-xl font-medium text-justify">
            How will we learn through this course?
          </div>
          <div className="collapse-content text-justify">
            <p>
              Definitely, you will learn online. We will provide you with videos
              and notes through your account.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mx-4 my-4"
        >
          <div className="collapse-title text-xl font-medium text-justify">
            How much time we will be able to access the provided videos?
          </div>
          <div className="collapse-content text-justify">
            <p>
              It will have lifetime access, also you can communicate with our
              team until you are skilled up.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mx-4 my-4"
        >
          <div className="collapse-title text-xl font-medium text-justify">
            Is this course totally free?
          </div>
          <div className="collapse-content text-justify">
            <p>
              No, we have both options free and premium. Firstly you try our
              free course. If you are interested, then we will discuss the
              premium course.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mx-4 my-4"
        >
          <div className="collapse-title text-xl font-medium text-justify">
            Is there any live session on this course?
          </div>
          <div className="collapse-content text-justify">
            <p>
              Yes, our team will take a live session two times every week. Where
              you can ask any questions related to our provided course.
            </p>
          </div>
        </div>
        <div
          tabIndex={4}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mx-4 my-4"
        >
          <div className="collapse-title text-xl font-medium text-justify">
            Why your course is better than others?
          </div>
          <div className="collapse-content text-justify">
            <p>
              Our course is better than others because we provide good quality
              study materials. Also, we have a qualified team who will help you
              to build up your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
