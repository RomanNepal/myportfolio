import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="inline-block">{children}</div>
      <div className="opacity-0 invisible transition-opacity duration-300 absolute z-10 bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2">
        {text}
        <svg
          className="absolute text-black h-2 w-full left-1/2 top-full transform -translate-x-1/2"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;
