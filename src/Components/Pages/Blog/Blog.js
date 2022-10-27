import React from "react";
import flowChart from "../../../images/nodejs-architecture.png";

const Blog = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-8">
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">What is CORS?</h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span> CORS stands
              for <strong>Cross-Origin Resource Sharing</strong>. CORS is a
              protocol and security standard for browsers that helps to maintain
              the integrity of a website and secure it from unauthorized access.
            </p>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            Why do we use firebase? what other options do we have to implement
            authentication?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span>
              {""}Firebase is a Google-backed application development software
              that enables developers to develop iOS, Android, and Web apps.
              Firebase provides a user authentication system and other stuff.We
              used firebase because it's a product of the giant company Google.
            </p>
            <div className="mt-3">
              <h1 className="my-2 sm:text-xl font-medium">
                Similar authentication systems like firebase:
              </h1>
              <ul className="list-inside list-disc">
                <li>Amazon Cognito</li>
                <li>AWS Amplify</li>
                <li>Auth0</li>
                <li>Keycloak</li>
                <li>Frontegg</li>
                <li>Authress</li>
                <li>OneLogin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            How does the private route work?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span> The react{" "}
              <strong>private route</strong> component renders child components
              (children) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return{" "}
              <i className="text-blue-400">URL</i> passed in the location state
              property.
            </p>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            What is Node? How do Node works?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span> Node.js is an
              open-source, cross-platform JavaScript runtime environment and
              library for running web applications outside the client's browser.
              Ryan Dahl developed it in 2009.
            </p>
            <div className="mt-3">
              <h1 className="my-2 mb-3 sm:text-xl font-medium">
                The working procedure of Node.js is given below through the flow
                chart.
              </h1>
              <img
                className=" sm:w-1/2 sm:mx-auto  border-2 rounded-md"
                src={flowChart}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
