import React, { useRef } from "react";
import Title from "./Title";
import { useInView } from "framer-motion";

const About = ({ active }) => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);
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
    <div className="mt-[8%] flex flex-col gap-10" ref={aboutRef}>
      <Title Icon={Icon}>About</Title>

      <div className={` text-5xl font-light leading-[5rem]  dark:text-white`}>
        <div className="flex">
          <div>My</div>
          <div className="ml-3 text-[#28E98C] md:ml-6"> Story</div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className={`${isInView ? "scale-100 opacity-100 " : " scale-0 opacity-0 "} text-sm font-medium leading-[1.5rem] transition-all duration-1000 dark:text-[#939393]`}
      >
        Fascinated about the vast but exciting world of frontend technologies, I
        started writing head, title, body. Learned about React library along
        with Next for SSR and it's advantages. Curious about backend
        technologies and how they work, explored Node JS along with Express JS
        and MongoDB for database.
      </div>
    </div>
  );
};

export default About;
