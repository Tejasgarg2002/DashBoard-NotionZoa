import React from "react";
import notionZoa from "../assets/notionZoa.png";
import dabangPro from "../assets/Dabangpro.png";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md p-3 mt-2">
        <img className="object-cover h-10 w-30 rounded-md" src={notionZoa} />
      </div>

      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        DashBoard
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        LeaderBoard
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        Order
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        Products
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        Sales Report
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        Messages
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        Settings
      </button>
      <button className="font-sans text-gray-500 text-xs font-bold p-3 mr-2 ml-2  rounded-md hover:bg-purple-400">
        SignOut
      </button>

      <img className="object-cover rounded-lg w-36 h-36 mt-5" src={dabangPro} />
    </div>
  );
};

export default Sidebar;
