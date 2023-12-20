import React from "react";

const SmallSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-5 h-5 border-2 border-indigo-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default SmallSpinner;
