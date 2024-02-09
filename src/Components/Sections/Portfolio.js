import React from "react";
import Title from "./Title";

const Portfolio = () => {
  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
        />
      </svg>
    );
  };
  return (
    <div className="mt-[8%] flex flex-col gap-10">
      <Title Icon={Icon}>Portfolio</Title>

      <div className="text-7xl font-light leading-[5rem] dark:text-white">
        {/* <div className="flex">
          <div>Say Hi from</div>
          <div className="ml-6 text-[#28E98C]"> Roman</div>
          <div>,</div>
        </div>{" "}
        <p>Web Designer and Developer</p> */}
      </div>
      <div className="text-sm font-medium dark:text-[#939393]">
        I design and develop modern websites with outmost focus on user
        experience
      </div>
    </div>
  );
};

export default Portfolio;
