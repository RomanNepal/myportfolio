// Filename - App.js

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Sections/Introduction";
import Switch from "./Components/Switch";
import About from "./Components/Sections/About";
import useIsInViewport from "./Hooks/useIsInViewport";
import Resume from "./Components/Sections/Resume";
import Skills from "./Components/Sections/Skills";
function App() {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("home");

  const [currentRef, setCurrentRef] = useState("");
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
    console.log("scrollPosition:", scrollPosition);
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop - 1 &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSectionId(section.id);
          console.log("section id: ", section.id);
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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-screen bg-white dark:bg-[#1B1B1B] transition duration-500 ease-in-out flex flex-col font-inter">
      <div
        className="flex rounded-[20px] fixed right-24 top-4"
        onClick={() => {
          console.log("clicked");
          handleThemeSwitch();
        }}
      >
        <Switch />
      </div>
      {/* <button
        className="bg-green-200 p-4 rounded-md fixed right-0 top-4"
        onClick={() => {
          console.log("clicked");
          handleThemeSwitch();
        }}
      >
        Toggle Dark Mode
      </button> */}
      <div className="h-[80vh] w-[20%] border dark:border-gray-600 border-gray-200 rounded-3xl fixed left-10 block top-[50%] translate-x-[10%] translate-y-[-50%]">
        Hello
      </div>

      <div className="fixed right-24 top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Navbar sections={sections} activeSectionId={activeSectionId} />
      </div>
      <div className="ml-[33%] mr-[20%] h-[100vh] flex flex-col" id="section1">
        <Introduction />
      </div>
      <div className="ml-[33%] mr-[20%] h-[100vh] flex flex-col" id="section2">
        <About />
      </div>
      <div className="ml-[33%] mr-[20%] h-[100vh] flex flex-col" id="section3">
        <Resume />
      </div>
      <div className="ml-[33%] mr-[20%] h-[100vh] flex flex-col" id="section4">
        <Skills />
      </div>
      <div className="ml-[33%] mr-[20%] h-[100vh] flex flex-col" id="section5">
        <Skills />
      </div>
    </div>
  );
}

export default App;
