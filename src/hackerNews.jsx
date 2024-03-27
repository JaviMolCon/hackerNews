import data from "./mockData.json";
import React from "react";

const HackerNews = ({ title, link, comments, points, time }) => {
  const timeSincePosted = Math.round(
    (Date.now() - new Date(time)) / (1000 * 60 * 60 * 24)
  );

  function url_domain(data) {
    let a = document.createElement("a");
    a.href = data;
    return a.hostname;
  }

  return (
    <div className="bg-gray-100 p-4 my-4 rounded shadow">
      <div className="flex justify-between">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold"
        >
          {title}
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600"
        >
          {url_domain(link)}
        </a>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>{comments} comments</span>
        <span>{points} points</span>
        <span>{timeSincePosted} days ago</span>
      </div>
    </div>
  );
};

export default HackerNews;
