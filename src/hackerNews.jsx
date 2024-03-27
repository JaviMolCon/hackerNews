import data from "./mockData.json"
import React from 'react';

const NewsEntry = ({ title, link, comments, points, time }) => {
  // Convert time to hours since posted
  const timeSincePosted = Math.round((Date.now() - new Date(time)) / (1000 * 60 * 60));

  return (
    <div className="bg-gray-100 p-4 my-4 rounded shadow">
      <div className="flex justify-between">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">{title}</a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600">{link}</a>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>{comments} comments</span>
        <span>{points} points</span>
        <span>{timeSincePosted} hours ago</span>
      </div>
    </div>
  );
};

export default NewsEntry;

