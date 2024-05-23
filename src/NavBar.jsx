import React from "react";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-10 px-8 py-5 bg-blue-700 rounded-lg shadow-lg ">
      <h2 className="font-semibold text-xl text-white">🍿usePopcorn</h2>

      {/* SearchBar */}
      <Searchbar />

      <label className="text-white" htmlFor="">
        Results found
      </label>
    </div>
  );
};

export default NavBar;
