import React, { useRef } from "react";
import Title from "./Title";
import useIsInViewport from "../../Hooks/useIsInViewport";
import html from "../../Images/html.webp";
import css from "../../Images/css.png";
import js from "../../Images/js.webp";
import react from "../../Images/react.webp";
import node from "../../Images/node.jpg";
import express from "../../Images/express.png";
import mongo from "../../Images/mongo.jpg";
import next from "../../Images/next.png";
import SkillsCard from "../SkillsCard";
const Skills = ({ active }) => {
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
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    );
  };
  return (
    <div className="flex flex-col gap-10 mt-[8%]">
      <Title Icon={Icon}>Skills</Title>
      <div className="flex flex-wrap gap-10 text-sm">
        <SkillsCard src={html} title={"html"} />
        <SkillsCard src={css} title={"css"} />
        <SkillsCard src={js} title={"javascript"} />
        <SkillsCard src={react} title={"react"} />
        <SkillsCard src={next} title={"next js"} />
        <SkillsCard src={node} title={"node js"} />
        <SkillsCard src={express} title={"express"} />
        <SkillsCard src={mongo} title={"mongo"} />
      </div>
    </div>
  );
};

export default Skills;