import React from "react";

const Title = ({ Icon, children }) => {
  return (
    <div className="z-2 flex w-fit items-center justify-center gap-2 rounded-3xl border border-gray-200 px-4 py-2 text-xs dark:border-gray-600 dark:text-slate-300">
      <div className="flex items-center">
        <Icon />
      </div>
      {children.toUpperCase()}
    </div>
  );
};

export default Title;
