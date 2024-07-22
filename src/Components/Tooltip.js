import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="inline-block">{children}</div>
      <div className="invisible absolute bottom-full left-1/2 z-10 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300">
        {text}
        <svg
          className="absolute left-1/2 top-full h-2 w-full -translate-x-1/2 transform text-black"
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
