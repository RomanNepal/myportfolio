import React from "react";

const SkillsCard = ({ src, title }) => {
  return (
    <div className="relative">
      <div className="absolute top-[-0.4rem] left-[-0.4rem] h-[6.8rem] w-[6.8rem] border border-white dark:border-[#1B1B1B] rounded-full hover:border-[#28E98C] dark:hover:border-[#28E98C] transition ease-in"></div>
      <div className="h-24 w-24 rounded-full flex items-center overflow-hidden">
        <img
          src={src}
          style={{ objectFit: "cover", height: "125%", width: "125%" }}
        ></img>
      </div>
      <p className="dark:text-white text-center mt-4">{title?.toUpperCase()}</p>
    </div>
  );
};

export default SkillsCard;
