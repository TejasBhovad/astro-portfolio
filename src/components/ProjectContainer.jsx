import React from "react";
import Github from "./icons/Github";
import "../styles/project.scss";
import Globe from "./icons/Globe";
const ProjectContainer = () => {
  return (
    <div className="flex-col h-60 w-52 bg-lightBackground dark:bg-darkBackground rounded-md">
      <div className="image-contain bg-green-300 h-30 w-full rounded-t-md object-contain flex">
        <img src="/project.png" alt="" class="w-full rounded-t-md" />
      </div>
      <div className="project-contain bg-gray-200 dark:bg-darkUtility 0 h-32 w-full rounded-b-md px-4 py-1 flex-col gap-2">
        <div className="project-title font-semibold text-lg text-lightText dark:text-darkText">
          Project Title
        </div>
        <div className="project-desc text-sm text-DarkSecondary dark:text-lightSecondary font-regular">
          Lorem ipsum dolor sit amet
        </div>
        <div className="project-buttons flex flex-row gap-2 mt-2">
          <button className="project-button bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText font-semibold rounded-md px-2 py-1">
            <Github className="btn-logo" />
          </button>
          <button className="project-button bg-green-600 text-darkText font-medium rounded-md px-2 py-1 flex gap-2 justify-center items-center">
            <Globe className="btn-logo" />
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
