import React from "react";
// import { useRouteError } from 'react-router';
import ErrorImg from "../assets/error-404.png"
import { Link } from "react-router";
const ErrorPage = () => {
  // const error = useRouteError();
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <img src={ErrorImg} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Oops, page not found!</h1>
        <p className="text-[#627382]">The page you are looking for is not available.</p>
        <Link className="button">Go Back!</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
