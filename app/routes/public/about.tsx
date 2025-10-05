import React from "react";

const about = () => {
  return (
    <div>
      <h1 className="text-center text-5xl">My Blog</h1>
      <p className="text-center text-2xl mt-1">
        This is a Full-Stack application made by{" "}
        <a
          className="text-blue-300 hover:underline"
          href="https://github.com/euLorenzo"
          target="_blank"
        >
          euLorenzo
        </a>
      </p>
      <p className="text-center text-2xl mt-1 mb-5">
        Made with the objective of learning SpringBoot and Java + React Router (
        Framework )
      </p>
    </div>
  );
};

export default about;
