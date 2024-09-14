import React from "react";
import bell from "../assets/bell.webp";
import avatar from "../assets/avatar.jpg";
import usa from "../assets/usa.png";
const Navbar = () => {
  return (
    <div className="flex p-3 bg-white justify-between ">
      <div>
        <h1 className="text-2xl font-semibold open-sans text-blue-950">
          Dashboard
        </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="open-sans px-4 py-2 border rounded-md text-gray-300 bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 "
          aria-label="Search"
        />
      </div>
      <div className="flex">
        <img className="rounded-md h-6 mt-2" src={usa} />
        <select className="open-sans text-sm font-semibold rounded-md">
          <option>Eng(US)</option>
        </select>
      </div>

      <div className="flex">
        <img className="rounded-md h-7 mt-2" src={bell} />
        <img className="h-7 mt-2" src={avatar} />
        <select className="open-sans text-sm font-semibold   rounded-md">
          <option>Musfliq</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
