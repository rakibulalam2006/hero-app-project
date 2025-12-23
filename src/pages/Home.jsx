import React from "react";
import { Link } from "react-router";
import playStore from "../assets/app downloaden uit de play store.png";
import appStore from "../assets/App_Store_(iOS)-Logo.wine.svg";
import heroImg from "../assets/hero.png";
import AppCard from "../components/AppCard";
import useApps from "../Hooks/useApps";
import Skeleton from "../components/Skeleton";

const Home = () => {
  // const apps = useLoaderData() || [];
  // console.log(apps)
  const { apps, loading } = useApps();
  const featuredApp = apps.slice(0, 8);
  console.log(featuredApp);

  return (
    <div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            We Build <br />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
          <p className="text-[#627382] mt-5">
            AtHERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="mt-10">
            <Link
              to="https://play.google.com/store/games?device=windows"
              className="mr-9 btn"
            >
              <span>
                <img className="w-[30px]" src={playStore} alt="" />
              </span>
              Google Play
            </Link>
            <Link to="https://www.apple.com/app-store/" className="btn">
              <span>
                <img className="w-[50px]" src={appStore} alt="" />
              </span>
              App Store
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="mx-auto">
            <img className="lg:max-w-lg" src={heroImg} alt="" />
          </div>
          <div className="bg-linear-to-tr from-[#632EE3] to-[#9F62F2] text-white p-10">
            <h2 className="text-center text-2xl lg:text-4xl font-bold">
              Trusted by Millions, Built for You
            </h2>
            <div className="flex justify-around mt-5">
              <div className="flex flex-col text-center">
                <span className="text-[16px]">Total Downloads</span>
                <span className="text-2xl font-bold">29.6M</span>
                <span className="text-[16px]">21% more than last month</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-[16px]">Total Reviews</span>
                <span className="text-2xl font-bold">906K</span>
                <span className="text-[16px]">46% more than last month</span>
              </div>
              <div className="flex flex-col text-center">
                <span className="text-[16px]">Active Apps</span>
                <span className="text-2xl font-bold">132+</span>
                <span className="text-[16px]">31 more will Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Trending Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
          <div>
            {loading ? (
              <Skeleton />
            ) : (
              <div className="cards">
                {featuredApp.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link to="allApps" className="button">
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Home;
