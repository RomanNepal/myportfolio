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
      <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={tms}
          alt="tms"
        />

        <div
          className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
          }}
        ></div>
        <div className="absolute bottom-4 left-6  flex justify-center gap-2">
          <div className="rounded-md border px-2 text-xs  text-white">
            Next JS
          </div>
          <div className="rounded-md border px-2 text-xs  text-white">
            Tailwind
          </div>
          <div className="rounded-md border px-2 text-xs  text-white">
            Dashboard
          </div>
          <div className="rounded-md border px-2 text-xs  text-white">
            Attendance
          </div>
        </div>
      </div>

      <a href="https://www.thepaceinfosys.com/">
        <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={pace}
            alt="pace"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              React
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Next JS
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Blog
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Dashboard
            </div>
          </div>
        </div>
      </a>

      <a href="https://p-a-c-e-o-l-d.vercel.app/">
        <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={paceold}
            alt="paceold"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              React
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Next JS
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Tailwind
            </div>
          </div>
        </div>
      </a>

      <a href="https://gamingstorenepal.vercel.app">
        <div className="relative flex h-[100%] w-full justify-center rounded-lg">
          <img
            className="h-full w-full rounded-lg"
            src={gamingstorenepal}
            alt="portfolio"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              React
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Shopping Cart
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Search and filter
            </div>
          </div>
        </div>
      </a>
      <a href="https://crowdfundingether.vercel.app">
        <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={crowd}
            alt="crowd_funding"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              React
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Ether
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Solidity
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Blockchain
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Tailwind CSS
            </div>
          </div>
        </div>
      </a>

      <a href="https://www.kumarijob.com/">
        <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={kumarijob}
            alt="kumarijob"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              HTML/CSS
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Javascript
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Laravel
            </div>
          </div>
        </div>
      </a>

      <a href="https://weatherdeet.vercel.app">
        <div className="relative flex h-[100%] w-full justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={weather}
            alt="weather"
          />

          <div
            className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 50%, rgba(40,40,40,1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 left-6  flex justify-center gap-2">
            <div className="rounded-md border px-2 text-xs  text-white">
              React
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Next JS
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Weather API
            </div>
            <div className="rounded-md border px-2 text-xs  text-white">
              Search
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
