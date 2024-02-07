import React from "react";

const Title = ({ Icon, children }) => {
  return (
    <div className="dark:text-slate-300 text-xs flex justify-center items-center gap-2 px-4 py-2 z-2 border dark:border-gray-600 border-gray-200 rounded-3xl w-fit">
      <div className="flex items-center">
        <Icon />
      </div>
      {children.toUpperCase()}
    </div>
  );
};

export default Title;
