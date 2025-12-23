import React, { useState } from "react";
// import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import useApps from "../Hooks/useApps";

const AllApps = () => {
  const [search, setSearch] = useState("");

  // const apps = useLoaderData() || [];
  // console.log(apps);
   const { apps, loading } = useApps();

  // search
  const term = search.trim().toLocaleLowerCase() || "";
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  console.log(searchedApps);
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="text-2xl font-semibold flex justify-between mt-4">
        <h2>
          <span>({apps.length})</span>Apps found
        </h2>
        <label className="floating-label">
          <span>Search App</span>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            placeholder="Search"
            className="input input-md"
          />
        </label>
      </div>
       <div>
            {loading ? (
              <Skeleton />
            ) : (
              <div className="cards">
                {searchedApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            )}
          </div>
    </div>
  );
};

export default AllApps;
