import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Download, Star, ThumbsUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { updatedLest } from "../utils/localStorage";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { apps } = useApps();
  console.log(apps);
  const app = apps.find((a) => String(a.id) === id);
  console.log(app);
  const {
    image,
    title,
    ratingAvg,
    downloads,
    size,
    reviews,
    companyName,
    description,
  } = app || {};

  console.log(size)

  // // generate chart data
  // const totalsByCategory  = {}
  // apps.forEach(app =>{
  //   const category = app.category;

  // totalsByCategory[category] = (totalsByCategory[category] || 0) + ratings.map(rating =>rating)
  // })
  // const chartData = Object.keys(totalsByCategory).map(category =>({
  //   category,
  //   total:totalsByCategory[category],
  // }))
  // console.log(chartData)

  return (
    <div>
      <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-[32px] font-bold">{title}</h2>
          <p className="text-[#627382] font-semibold">
            Developed by <span className="text-[#632EE3]">{companyName}</span>
          </p>
          <div className="divider"></div>
          <div className="flex justify-around">
            <div className="short-overview">
              <span className="text-[#54CF68] font-bold">
                {" "}
                <Download />
              </span>
              <p className="text-[16px]">Download</p>
              <h1 className="text-3xl font-extrabold">{downloads}</h1>
            </div>
            <div className="short-overview">
              <Star color="#FF8811" />
              <p className="text-[16px]">Average Ratings</p>
              <h1 className="text-3xl font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="short-overview">
              <ThumbsUp />
              <p className="text-[16px]">Total Reviews</p>
              <h1 className="text-3xl font-extrabold">{reviews}</h1>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={() =>updatedLest(app)} className="btn bg-[#00D390] text-white font-semibold">
              Install now ({size}MB)
            </button>
          </div>
        </div>
      </div>
      {/* chart */}
      {/* <div>
        <div className="space-y-3">
        <h3 className="text-xl font-semibold">Wishlist Summery</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            data={chartData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div> */}
      <div className="divider"></div>
      <div className="divider"></div>
      <div>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
