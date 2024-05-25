import React, {Children} from "react";
import Searchbar from "./Searchbar";

const NavBar = ({children}) => {
  return (
    <div className="flex justify-between items-center gap-10 px-8 py-5 bg-blue-700 rounded-lg shadow-lg ">
      {children}
    </div>
  );
};

export default NavBar;
