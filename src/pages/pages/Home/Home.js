import React from "react";
import { useSelector } from "react-redux";

import ContentCard from "../contentCard/ContentCard";

const Home = () => {
  const contents = useSelector((state) => state.contents);
  return (
    <div className=" p-1 lg:p-2">
      <div className="container mx-auto my-8 bg-white p-5 rounded-md ">
        <h1 className="text-4xl font-semibold pb-3 text-gray-600">Latest </h1>
        <div className="border w-40 border-blue-100 mb-3"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
          {contents.length > 0 ? (
            contents.map((content) => (
              <ContentCard key={content._id} content={content}></ContentCard>
            ))
          ) : (
            <p className="font-bold text-gray-500">
              No data found please add new data{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

// bg-[#85CDFD]
