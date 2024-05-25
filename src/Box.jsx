import React from "react";

const Box = ({ children }) => {
  return (
    <div className="h-custom-height overflow-y-scroll p-4 my-2 rounded-lg w-full  bg-gray-800  shadow-xl scrollbar scrollbar-thumb-transparent scroll-m-0">
      {children}
    </div>
  );
};

export default Box;
