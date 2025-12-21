import React, { useState } from "react";
import { loadInstallList } from "../utils/localStorage";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstallList());

  if (!installation.length)
    return <p className="text-center text-3xl font-bold">No Data Available</p>;
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="text-2xl text-gray-700 font-semibold">
        <h1>{installation.length} App found</h1>
      </div>
      <div className="space-y-3 rounded-md mt-5">
        {installation.map((a) => (
          <div className="flex justify-between bg-white p-[6px] rounded-md">
            <div className="flex">
              <figure>
              <img
                className="max-w-15 rounded-md"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">{a.title}</h2>
              <div className="flex gap-7 mt-2 text-[14px] text-gray-600">
                <span className="flex text-[#00D390] gap-1">
                  <Download size={18} />
                  {a.downloads}M
                </span>
                <span className="flex text-[#FF8811] gap-1">
                  <Star size={18} />
                  {a.ratingAvg}
                </span>
                <span className="flex">{a.size}MB</span>
              </div>
            </div>
            </div>
            <div className="my-auto">
              <button className="btn">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
