import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-10vh bg-blue-500 border-b-2 border-blue-500 rounded-xl p-7">
      <div className="flex flex-column">
        <span className="text-black font-bold text-4xl">hackerNews 2.0</span>
        <span className="text-orange-500 ml-2 text-xl">now even simpler</span>
      </div>
      <div className="flex items-center">
        <button className="rounded-full border border-blue-500 bg-white text-orange-500 px-4 py-2 mr-2 hover:bg-stone-100 hover:text-orange hover:border-blue-700 transition duration-300 ease-in-out">login</button>
        <button className="rounded-full bg-orange-500 text-white px-4 py-2 hover:bg-orange-700 transition duration-300 ease-in-out">signUp</button>
      </div>
    </nav>
  );
};

export default Navbar;