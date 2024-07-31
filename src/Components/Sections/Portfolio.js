import React from "react";
import Title from "./Title";
import gamingstorenepal from "../../Images/gamingstorenepal.png";
import crowd from "../../Images/crowdfundingeher.png";
import weather from "../../Images/weather.png";
import tms from "../../Images/tms.png";
import pace from "../../Images/pace.png";
import paceold from "../../Images/paceold.png";
import kumarijob from "../../Images/kumarijob.png";
const Portfolio = () => {
  const projects = [
    {
      image: tms,
      features: ["Next JS", "Tailwind", "Dashboard", "Attendance"],
      link: "https://drive.google.com/file/d/1o47eMoaT9EXgH1wi_ifWoqtHYV_dEHJs/view",
    },
    {
      image: pace,
      features: ["React", "Next JS", "Blog", "Dashboard"],
      link: "https://www.thepaceinfosys.com/",
    },
    {
      image: paceold,
      features: ["React", "Next JS", "Tailwind"],
      link: "https://p-a-c-e-o-l-d.vercel.app/",
    },
    {
      image: gamingstorenepal,
      features: ["React", "Shopping Cart", "Search & Filter"],
      link: "https://gamingstorenepal.vercel.app",
    },
    {
      image: crowd,
      features: ["React", "Ether", "Solidity", "Blockchain", "Tailwind CSS"],
      link: "https://crowdfundingether.vercel.app",
    },
    {
      image: kumarijob,
      features: ["HTML/CSS", "Javascript", "Laravel"],
      link: "https://www.kumarijob.com/",
    },
    {
      image: weather,
      features: ["React", "Next JS", "Weather API", "Search"],
      link: "https://weatherdeet.vercel.app",
    },
  ];

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
    <div className="mt-[8%] flex flex-col gap-10 py-[10rem]">
      <Title Icon={Icon}>Portfolio</Title>

      {projects.map((project, index) => (
        <a href={project.link} key={index}>
          <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={project.image}
              alt="project"
            />

            <div
              className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.006127450980392135) 50%, rgba(40, 40, 40, 1) 100%)",
              }}
            ></div>
            <div className="absolute bottom-4 left-6  flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-md border px-2 text-xs  text-white"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
