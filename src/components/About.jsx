import React from "react";
import "../styles/about.scss";
import EDU from "./icons/EDU";
import DB from "./icons/DB";
const About = () => {
  return (
    <div
      className="w-full h-full flex gap-4 one-pane justify-center items-center py-4"
      style={{
        maxWidth: "1200px",
        maxHeight: "800px",
      }}
    >
      <div className="flex gap-4 two-pane" style={{}}>
        <div className="h-full w-1/2 flex-col flex gap-4">
          <div
            className="relative h-1/3 w-full bg-lightUtility dark:bg-darkUtility rounded-md about-container"
            style={{
              minHeight: "155px",
            }}
          >
            <img
              src="/about.jpg"
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
              <h2 className="about-title  font-medium text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-yellow-400">
                ABOUT
              </h2>
              <h2 className="me-title text-white font-bold ">ME</h2>
            </div>
          </div>

          <div
            className="h-2/3 w-full bg-lightUtility dark:bg-darkUtility rounded-md about-container py-4 px-4"
            style={{
              minHeight: "222px",
            }}
          >
            <img
              src="/phone.png"
              alt="phone"
              className="object-cover h-2/3 w-fit-content "
            />
            <div className="flex flex-col justify-center items-center">
              <span className="dark:text-lightSecondary text-darkUtility font-medium text-3xl">
                Responsive
              </span>
              <span className="text-lightText dark:text-darkText font-semibold text-4xl">
                UI/UX
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-2/3  flex-col flex gap-4">
          <div
            className="h-2/3 w-full bg-lightUtility dark:bg-darkUtility rounded-md about-container mobile justify-start items-center flex flex flex-col py-4 px-2 gap-3"
            style={{
              minHeight: "258px",
            }}
          >
            <div className="w-full h-full p-4">
              <span className="text-darkUtility dark:text-lightSecondary text-lg">
                Tejas Bhovad
              </span>
              <p className="text-3xl">Tech enthusiast.</p>
              <p className="text-3xl">Infinitely Curious.</p>
              <p className="text-3xl">Full Stack Developer.</p>
            </div>
          </div>
          <div
            className="h-1/3 w-full bg-lightUtility dark:bg-darkUtility rounded-md about-container flex px-4 gap-5 md:gap-2"
            style={{
              minHeight: "120px",
            }}
          >
            <div className="w-1/3 h-full flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-tr from-red-400 to-yellow-400 md:w-24 md:h-24 w-14 h-14"></div>
            </div>
            <div className="w-2/3 h-full flex flex-col md:items-center justify-center text-2xl md:text-5xl">
              <span className="">minimal</span>
              <strong>DESIGN</strong>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex gap-4 three-pane">
        <div
          className="w-full rounded-md about-container four-pane bg-gradient-to-tr from-slate-900 to-darkSecondary  flex md:gap-1 gap-4 px-4 items-center justify-center stack"
          style={{
            minHeight: "155px",
          }}
        >
          <div className="w-auto h-full flex items-center justify-center">
            <DB />
          </div>
          <div className="w-auto h-full flex flex-col md:items-center justify-center">
            <strong className="md:text-6xl text-2xl text-white">FULL</strong>
            <span className="md:text-5xl text-xl text-lightSecondary">
              STACK
            </span>
          </div>
        </div>
        <div
          className="w-full rounded-md about-container four-pane bg-gradient-to-t from-black to-green-900 mobile flex flex-col md:gap-1 gap-0 px-4 items-center justify-center education"
          style={{}}
        >
          <div className="h-auto w-full flex items-center justify-center">
            <EDU />
          </div>
          <div className="w-full h-1/2 flex flex-col items-center justify-center">
            <span className="md:text-3xl text-2xl text-lightSecondary">
              pursuing
            </span>
            <span className="md:text-3xl text-xl text-white font-semibold">
              BTech AI & DS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
