import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaCalendarCheck } from "react-icons/fa";

const ContentCard = ({ content }) => {
  return (
    <div className=" rounded-sm">
      <Card>
        <div className="flex flex-col h-[580px] lg:h-[480px] 2xl:lg:h-[420px]">
          <div className="">
            <img
              className="rounded-md w-96 h-[250px]"
              src={content?.photoLink}
              alt=""
            />
          </div>
          <div className="flex-1 p-2">
            <div className="flex justify-between gap-3 mb-1">
              <h1 className="flex items-center gap-2">
                <FaCalendarCheck></FaCalendarCheck> <span>{content?.date}</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <FaEye></FaEye> <span> {content?.view}</span>
              </h1>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {content?.title}
            </h5>
            <p className="font-normal text-gray-500">
              {content?.description.slice(0, 200)}...
            </p>
          </div>
        </div>
        <div className="flex gap-3 mx-3  p-1 rounded-md ">
          <p className="text-gray-400 font-semibold p-2">#Tags :</p>
          <div className="flex gap-3">
            {content?.tags.map((tag) => (
              <button
                key={tag._id}
                className={`font-black rounded-md hover:text-sky-500 p-2 `}
              >
                {tag.tag}
              </button>
            ))}
          </div>
        </div>

        <Link
          to={`/content/${content._id}`}
          className="flex justify-center items-center font-bold p-2  bg-[#85CDFD] hover:bg-sky-400 rounded-md text-white"
        >
          Read more
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </Card>
    </div>
  );
};

export default ContentCard;
