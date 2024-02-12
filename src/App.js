// Filename - App.js
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Sections/Introduction";
import Switch from "./Components/Switch";
import About from "./Components/Sections/About";
import useIsInViewport from "./Hooks/useIsInViewport";
import Resume from "./Components/Sections/Resume";
import Skills from "./Components/Sections/Skills";
import Portfolio from "./Components/Sections/Portfolio";
import photo from "./Images/photo.jpg";
import { loadBasic } from "@tsparticles/basic";
import Sidebar from "./Components/Sidebar";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const color = useSelector((state) => state.color.value);

  const [init, setInit] = useState(false);
  const [show, setShow] = useState(false);

  const [activeSectionId, setActiveSectionId] = useState("section1");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sections = [
    { id: "section1", label: "Section 1", onClick: scrollToSection },
    { id: "section2", label: "Section 2", onClick: scrollToSection },
    { id: "section3", label: "Section 3", onClick: scrollToSection },
    { id: "section4", label: "Section 4", onClick: scrollToSection },
    { id: "section5", label: "Section 5", onClick: scrollToSection },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - 1 &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSectionId(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        // await loadSlim(engine);
        await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-white p-4 font-inter transition duration-500 ease-in-out dark:bg-[#1B1B1B] md:p-4 lg:flex lg:flex-col lg:p-0">
        <div className="fixed right-24 top-4 hidden rounded-[20px] md:flex">
          <Switch />
        </div>
        <div
          className="fixed right-5 top-4 flex rounded-[20px] md:hidden"
          onClick={() => {
            setShow(true);
          }}
        >
          <div className="rounded-full border border-gray-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-black dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
        {/* border-gray-200 p-5 dark:border-gray-600 */}
        <div className="flex h-[100vh] flex-col items-center justify-around rounded-[2rem] border p-4 dark:border-gray-600 dark:text-white md:left-10 md:flex md:h-[80vh]  lg:fixed lg:top-[50%] lg:w-[20%] lg:translate-x-[10%] lg:translate-y-[-50%] lg:flex-col ">
          <div>Web Developer</div>
          <div className="flex h-[40%] w-[90%] items-center justify-center overflow-hidden rounded-3xl">
            <img src={photo}></img>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl font-[300]">nepalroman100@gmail.com</div>
            <div className="text-xl font-[300]">Based on Kathmandu, Nepal</div>
          </div>
          <div className="text-sm text-gray-500">
            © 2022 Roman. All Rights Reserved
          </div>
          <div className="flex w-[80%] justify-between">
            <a href="https://www.facebook.com/roman.nepal.1">
              <div
                className={`rounded-full border border-gray-400 fill-gray-400 p-3 hover:border-[#28E98C] hover:fill-[#28E98C]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 48 48"
                  className="h-5 w-5 fill-inherit"
                >
                  <path d="M 27.689453 2.0371094 C 24.410243 2.0371094 21.627143 3.0524604 19.751953 5.0898438 C 17.876763 7.1272271 16.998047 10.032839 16.998047 13.5 L 16.998047 17 L 13.517578 17 C 11.589931 17 9.9985023 18.604801 10.017578 20.533203 L 10.046875 23.537109 A 1.50015 1.50015 0 0 0 10.046875 23.539062 C 10.069385 25.440659 11.647206 27.005642 13.550781 27.003906 L 17 27.001953 L 17 43.5 C 17 45.414955 18.585045 47 20.5 47 L 24.5 47 C 26.414955 47 28 45.414955 28 43.5 L 28 27 L 31.095703 27 C 32.859472 27 34.367374 25.656297 34.572266 23.904297 L 34.921875 20.904297 C 35.160419 18.850746 33.513658 17 31.445312 17 L 28.019531 17 L 28.0625 13.712891 A 1.50015 1.50015 0 0 0 28.0625 13.693359 C 28.0625 13.00752 28.583692 12.486328 29.269531 12.486328 L 32.177734 12.486328 C 33.735895 12.486328 35.03125 11.190973 35.03125 9.6328125 L 35.03125 5.0625 C 35.03125 3.596878 33.891093 2.3503008 32.433594 2.21875 A 1.50015 1.50015 0 0 0 32.429688 2.21875 C 32.145313 2.1938679 30.177903 2.0371094 27.689453 2.0371094 z M 27.689453 5.0371094 C 29.967263 5.0371094 32.01319 5.2007464 32.03125 5.2011719 L 32.03125 9.4863281 L 29.269531 9.4863281 C 26.963371 9.4863281 25.0625 11.387199 25.0625 13.693359 L 25 18.480469 A 1.50015 1.50015 0 0 0 26.5 20 L 31.445312 20 C 31.770968 20 31.978863 20.236144 31.941406 20.558594 L 31.59375 23.556641 C 31.562642 23.82264 31.361935 24 31.095703 24 L 26.5 24 A 1.50015 1.50015 0 0 0 25 25.5 L 25 43.5 C 25 43.795045 24.795045 44 24.5 44 L 20.5 44 C 20.204955 44 20 43.795045 20 43.5 L 20 25.5 A 1.50015 1.50015 0 0 0 18.5 24 L 13.548828 24.003906 A 1.50015 1.50015 0 0 0 13.546875 24.003906 C 13.257582 24.00417 13.051932 23.798417 13.046875 23.505859 L 13.017578 20.503906 C 13.014704 20.208314 13.221226 20 13.517578 20 L 18.498047 20 A 1.50015 1.50015 0 0 0 19.998047 18.5 L 19.998047 13.5 C 19.998047 10.534161 20.731877 8.4584135 21.960938 7.1230469 C 23.189996 5.7876802 25.001663 5.0371094 27.689453 5.0371094 z"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.facebook.com/roman.nepal.1">
              <div className="rounded-full border border-gray-400 fill-gray-400 p-3 hover:border-[#28E98C] hover:fill-[#28E98C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 48 48"
                  className="h-5 w-5 fill-inherit"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/roman-nepal-3244411a1/">
              <div className="rounded-full border border-gray-400 fill-gray-400 p-3 hover:border-[#28E98C] hover:fill-[#28E98C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 48 48"
                  className="h-5 w-5 fill-inherit"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
                </svg>
              </div>
            </a>
            <a href="https://github.com/RomanNepal">
              <div className="rounded-full border border-gray-400 fill-gray-400 p-3 hover:border-[#28E98C] hover:fill-[#28E98C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 30 30"
                  className="h-5 w-5 fill-inherit"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="w-full">
            <button
              className={`flex w-full items-center justify-center gap-2 rounded-full border-2  border-[${color}] dark:border-[${color}]   bg-[${color}]  px-4 py-3 text-white transition ease-in hover:bg-[#1B1B1B] hover:text-[${color}] dark:text-black dark:hover:text-[${color}]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Lets build together
            </button>
          </div>
        </div>
        <div className="fixed right-24 top-[50%] hidden translate-x-[-50%] translate-y-[-50%] md:flex">
          <Navbar sections={sections} activeSectionId={activeSectionId} />
        </div>
        <div className="fixed right-10 flex md:hidden">
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
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <div></div>
        <div
          className={`fixed ${show ? "right-0" : "right-[-100%]"} top-0 z-30 h-full w-[80%] bg-gray-800 text-white transition-all md:hidden`}
        >
          <Sidebar
            sections={sections}
            activeSectionId={activeSectionId}
            show={show}
            setShow={setShow}
          />
        </div>
        <div
          className={`ml-[1%] mr-[1%] flex transform flex-col overflow-hidden md:ml-[33%] md:mr-[20%] md:h-[140vh]`}
          id="section1"
        >
          <Introduction />
        </div>
        <div
          className="flex h-[100%] flex-col md:ml-[33%] md:mr-[20%]"
          id="section2"
        >
          <About />
        </div>
        <div
          className="mt-[10rem] flex h-[100vh] flex-col md:ml-[33%] md:mr-[20%] md:mt-[10rem]"
          id="section3"
        >
          <Resume />
        </div>
        <div
          className="flex h-[100vh] flex-col md:ml-[33%] md:mr-[20%]"
          id="section4"
        >
          <Skills />
        </div>
        <div
          className="ml-[33%] mr-[20%] flex h-[100vh] flex-col"
          id="section5"
        >
          <Portfolio />
        </div>
      </div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "black",
            },
          },
          fpsLimit: 60,

          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: false,
        }}
      />
    </>
  );
}

export default App;
