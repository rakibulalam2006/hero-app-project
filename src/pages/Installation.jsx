import React, { useState } from "react";
import { loadInstallList, removeFromInstallation } from "../utils/localStorage";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstallList());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installation.length)
    return <p className="text-center text-3xl font-bold">No Data Available</p>;

  // remove data
  const handleRemove = (id) => {
    removeFromInstallation(id);
    setInstallation((prev) => prev.filter((p) => p.id !== id));
  };

  // sorting
  const sortedItem = () => {
    if (sortOrder === "rating-asc") {
      return [...installation].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (sortOrder === "rating-desc") {
      return [...installation].sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else {
      return installation;
    }
  };

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
        {/* sorting */}
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Wishlist{" "}
            <span className="text-sm text-gray-500">
              ({installation.length}) Products found
            </span>
          </h1>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Rating</option>
            <option value="rating-asc">Low-&gt;High</option>
            <option value="rating-desc">High-&gt;Low</option>
          </select>
        </div>

        {sortedItem().map((a) => (
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
              <button onClick={() => handleRemove(a.id)} className="btn">
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
