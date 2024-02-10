import React, { useState } from "react";
import Tooltip from "./Tooltip";
import Switch from "./Switch";

const Sidebar = ({ sections, activeSectionId, show, setShow }) => {
  const [over, setOver] = useState("");
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHover = (e, sectionId) => {
    setOver(sectionId);
  };
  const removeHover = (e) => {
    setOver("");
  };
  return (
    <div className="flex h-[100vh] justify-between px-4 pt-10">
      <div className="items-left justify-left z-10 flex w-[80%] flex-col gap-4 rounded-3xl p-6">
        <div
          className={
            (activeSectionId === "section1"
              ? "text-[#28E98C]"
              : "text-black dark:text-white") +
            " relative flex cursor-pointer items-center gap-3 transition duration-500 ease-in-out"
          }
          onClick={() => {
            handleNavClick("section1");
            sections[0].onClick("section1");
          }}
          onMouseEnter={(e) => {
            handleHover(e, "section1");
          }}
          onMouseLeave={(e) => {
            removeHover();
          }}
        >
          {/* <div
            className={
              (over === "section1" ? "flex" : "hidden") +
              " transtition absolute left-[-7rem] w-[6rem] items-center px-2 text-gray-400 duration-500 ease-in"
            }
          >
            <div className="flex w-[80%]  justify-center rounded-b-[5px] rounded-t-[5px] bg-gray-700 p-1 text-xs">
              Home

            </div>
            <div className="h-[8px] w-[20%] border-[6px] border-gray-700 border-b-transparent border-r-transparent border-t-transparent"></div>
          </div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="currentColor"
            className="h-5 w-5 hover:text-[#28E98C]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <div>Home</div>
        </div>
        <div
          className={
            (activeSectionId === "section2"
              ? "text-[#28E98C]"
              : "text-white hover:text-[#28E98C] dark:text-white") +
            " relative flex cursor-pointer items-center gap-3 transition duration-500 ease-in-out"
          }
          onClick={() => {
            handleNavClick("section2");
            sections[0].onClick("section2");
          }}
          onMouseEnter={(e) => {
            handleHover(e, "section2");
          }}
          onMouseLeave={(e) => {
            removeHover();
          }}
        >
          {/* <div
            className={
              (over === "section2" ? "flex" : "hidden") +
              " transtition absolute left-[-7rem] w-[6rem] items-center px-2 text-gray-400 duration-500 ease-in"
            }
          >
            <div className="flex w-[80%]  justify-center rounded-b-[5px] rounded-t-[5px] bg-gray-700 p-1 text-xs">
              About
            </div>
            <div className="h-[12px] w-[20%] border-[8px] border-gray-700 border-b-transparent border-r-transparent border-t-transparent"></div>
          </div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="currentColor"
            className="h-5 w-5 hover:text-[#28E98C]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <div>About</div>
        </div>
        <div
          className={
            (activeSectionId === "section3"
              ? "text-[#28E98C]"
              : "text-white hover:text-[#28E98C] dark:text-white") +
            " relative flex cursor-pointer items-center gap-3 transition duration-500 ease-in-out"
          }
          onClick={() => {
            handleNavClick("section3");
            sections[0].onClick("section3");
          }}
          onMouseEnter={(e) => {
            handleHover(e, "section3");
          }}
          onMouseLeave={(e) => {
            removeHover();
          }}
        >
          <div
            className={
              (over === "section3" ? "flex" : "hidden") +
              " transtition absolute left-[-7rem] w-[6rem] items-center px-2 text-gray-400 duration-500 ease-in"
            }
          >
            <div className="flex w-[80%]  justify-center rounded-b-[5px] rounded-t-[5px] bg-gray-700 p-1 text-xs">
              Resume
            </div>
            <div className="h-[12px] w-[20%] border-[8px] border-gray-700 border-b-transparent border-r-transparent border-t-transparent"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="currentColor"
            className="h-5 w-5 hover:text-[#28E98C]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          <div>Resume</div>
        </div>
        {/* <div
        className={
          (active === "specialization"
            ? "text-[#28E98C]"
            : "dark:text-white text-black hover:text-[#28E98C]") +
          " cursor-pointer"
        }
        onClick={() => {
          setActive("resume");
          handleNavClick("section4");
          sections[0].onClick("section4");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.3"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>
      </div> */}
        <div
          className={
            (activeSectionId === "section4"
              ? "text-[#28E98C]"
              : "text-white hover:text-[#28E98C] dark:text-white") +
            " relative flex cursor-pointer items-center gap-3 transition duration-500 ease-in-out"
          }
          onClick={() => {
            handleNavClick("section4");
            sections[0].onClick("section4");
          }}
          onMouseEnter={(e) => {
            handleHover(e, "section4");
          }}
          onMouseLeave={(e) => {
            removeHover();
          }}
        >
          {/* <div
            className={
              (over === "section4" ? "flex" : "hidden") +
              " transtition absolute left-[-7rem] w-[6rem] items-center px-2 text-gray-400 duration-500 ease-in"
            }
          >
            <div className="flex w-[80%]  justify-center rounded-b-[5px] rounded-t-[5px] bg-gray-700 p-1 text-xs">
              Skills
            </div>
            <div className="h-[12px] w-[20%] border-[8px] border-gray-700 border-b-transparent border-r-transparent border-t-transparent"></div>
          </div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
          <div>Skills</div>
        </div>
        <div
          className={
            (activeSectionId === "section5"
              ? "text-[#28E98C]"
              : "text-white hover:text-[#28E98C] dark:text-white") +
            " relative flex cursor-pointer items-center gap-3 transition duration-500 ease-in-out"
          }
          onClick={() => {
            handleNavClick("section5");
            sections[0].onClick("section5");
          }}
          onMouseEnter={(e) => {
            handleHover(e, "section5");
          }}
          onMouseLeave={(e) => {
            removeHover();
          }}
        >
          {/* <div
            className={
              (over === "section5" ? "flex" : "hidden") +
              " transtition absolute left-[-7rem] w-[6rem] items-center px-2 text-gray-400 duration-500 ease-in"
            }
          >
            <div className="flex w-[80%]  justify-center rounded-b-[5px] rounded-t-[5px] bg-gray-700 p-1 text-xs">
              Portfolio
            </div>
            <div className="h-[12px] w-[20%] border-[8px] border-gray-700 border-b-transparent border-r-transparent border-t-transparent"></div>
          </div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.3"
            stroke="currentColor"
            className="h-5 w-5 hover:text-[#28E98C]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>
          <div>Portfolio</div>
        </div>
        <div
          className="flex items-center gap-3"
          // onClick={() => {
          //   handleThemeSwitch();
          // }}
        >
          <Switch />
          <div>Dark Mode</div>
        </div>
      </div>
      <div className="" id="crossIcon" onClick={() => setShow(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
