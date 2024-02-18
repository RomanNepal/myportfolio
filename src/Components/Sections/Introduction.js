import React, { useEffect, useRef } from "react";
import Title from "./Title";
import { useInView } from "framer-motion";
import { useSelector } from "react-redux";

const Introduction = () => {
  const color = useSelector((state) => state.color.value);
  const introRef = useRef(null);

  const isInView = useInView(introRef);
  const currentDate = new Date();
  const totalYear = currentDate.getFullYear() - 2021;
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
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
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    );
  };
  return (
    <div
      className={`${isInView ? "translate-x-0 opacity-100 " : "translate-x-[-3rem] opacity-0 "} duration-2000 mt-[8%] flex h-full flex-col justify-between gap-10 border-gray-200 transition-all`}
      ref={introRef}
    >
      <div className="flex flex-col gap-10">
        <Title Icon={Icon}>Introduction</Title>

        <div className="text-6xl font-light leading-[4rem] dark:text-white md:text-7xl md:leading-[5rem]">
          <div className="flex flex-wrap">
            <div>Say Hi from</div>
            <div className=" md:ml-6" style={{ color: color }}>
              {" "}
              Roman
            </div>
            <div>,</div>
          </div>{" "}
          <p>Web Designer & Developer</p>
        </div>
        <div className="text-sm font-medium dark:text-[#939393]">
          I design and develop modern websites with outmost focus on user
          experience
        </div>
      </div>
      <div className="mb-[20%] flex justify-start gap-[30%] dark:text-white md:gap-[15%]">
        <div className="flex w-[20%] flex-col gap-8 md:w-[10%]">
          <p
            style={{ color: color }}
            className="text-6xl font-[300] text-[#28E98C] md:text-7xl"
          >
            {totalYear}+
          </p>
          <p className="text-gray-400">Years of experience</p>
        </div>
        <div className="flex flex-col gap-8 md:w-[20%]">
          <p
            style={{ color: color }}
            className="text-6xl font-[300] md:text-7xl"
          >
            10+
          </p>
          <p className="text-gray-400">10+ projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
