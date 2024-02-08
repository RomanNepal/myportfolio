import React, { useRef } from "react";
import Title from "./Title";

const Introduction = () => {
  const introRef = useRef(null);
  const currentDate = new Date();
  const totalYear = currentDate.getFullYear() - 2021;
  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    );
  };
  return (
    <div
      className="flex flex-col gap-10 mt-[8%] justify-between h-full"
      ref={introRef}
    >
      <div className="flex flex-col gap-10">
        <Title Icon={Icon}>Introduction</Title>

        <div className="dark:text-white font-light text-7xl leading-[5rem]">
          <div className="flex">
            <div>Say Hi from</div>
            <div className="ml-6 text-[#28E98C]"> Roman</div>
            <div>,</div>
          </div>{" "}
          <p>Web Designer and Developer</p>
        </div>
        <div className="dark:text-[#939393] font-medium text-sm">
          I design and develop modern websites with outmost focus on user
          experience
        </div>
      </div>
      <div className="flex mb-[20%] dark:text-white gap-[15%]">
        <div className="w-[10%] flex flex-col gap-8">
          <p className="text-[#28E98C] text-7xl font-[300]">{totalYear}+</p>
          <p className="text-gray-400">Years of experience</p>
        </div>
        <div className="w-[20%] flex flex-col gap-8">
          <p className="text-[#28E98C] text-7xl font-[300]">10+</p>
          <p className="text-gray-400">10+ projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
