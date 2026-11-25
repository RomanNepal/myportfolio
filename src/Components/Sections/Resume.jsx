import React, { useRef } from "react";
import Title from "./Title";
import { useInView } from "framer-motion";
import { useSelector } from "react-redux";

const Resume = ({ active }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);

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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    );
  };
  const color = useSelector((state) => state.color.value);
  return (
    <div className="mt-[8%] flex flex-col gap-10">
      <Title Icon={Icon}>Resume</Title>

      <div className=" text-5xl font-light leading-[5rem] dark:text-white">
        <p>Education</p>
      </div>
      <div className="relative flex flex-col gap-20">
        <div className="absolute left-[1.55%] top-2 h-full border-l border-gray-700 lg:left-[0.8%]"></div>
        <div
          className={`${isInView1 ? "translate-x-0 opacity-100 " : "translate-x-10 opacity-50 "} flex flex-col gap-4 text-black transition-all duration-1000 dark:text-white`}
          ref={ref1}
        >
          <div className="flex items-center gap-10">
            <div
              style={{ backgroundColor: color }}
              className="z-10 h-3 w-3 rounded-full"
            ></div>
            <div>2018-2023</div>
          </div>
          <div className="ml-12 flex flex-col gap-3">
            <div className=" text-2xl">Amrit Science Campus</div>
            <div className="text-sm text-gray-400">
              {" "}
              Bachelors of Science in Computer Science and Information
              Technology (B.Sc.CSIT)
            </div>
          </div>
        </div>
        <div
          className={`${isInView2 ? "translate-x-0 opacity-100 " : " translate-x-10 opacity-0 "} flex flex-col gap-4 text-black transition-all delay-500 duration-1000 dark:text-white`}
          ref={ref2}
        >
          <div className="flex items-center gap-10">
            <div
              style={{ backgroundColor: color }}
              className="z-10 h-3 w-3 rounded-full"
            ></div>
            <div>2015-2017</div>
          </div>
          <div className="ml-12 flex flex-col gap-3">
            <div className=" text-2xl">Sushma Godawari College</div>
            <div className="text-sm text-gray-400"> +2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
