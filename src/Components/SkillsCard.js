import React from "react";

const SkillsCard = ({ src, title }) => {
  return (
    <div className="relative">
      <div className="absolute left-[-0.4rem] top-[-0.4rem] h-[6.8rem] w-[6.8rem] rounded-full border border-white transition ease-in hover:border-[#28E98C] dark:border-[#1B1B1B] dark:hover:border-[#28E98C]"></div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center overflow-hidden rounded-full md:h-24 md:w-24">
          <img
            src={src}
            style={{ objectFit: "cover", height: "125%", width: "125%" }}
          ></img>
        </div>
        <p className="mt-4 text-center dark:text-white">
          {title?.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
