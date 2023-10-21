import Github from "./icons/Github";
import "../styles/project.scss";
import Globe from "./icons/Globe";
const ProjectContainer = ({ image, title, description, ghLink, liveLink }) => {
  return (
    <div className="cursor-pointer flex-col h-64 w-52 bg-lightBackground dark:bg-darkBackground rounded-md project-container">
      <div className="image-contain bg-lightSecondary dark:bg-darkUtility h-32 w-full rounded-t-md object-contain flex">
        <img
          src={image}
          alt=""
          className="w-full rounded-t-md border-none ring-none bg-lightSecondary dark:bg-darkUtility"
        />
      </div>
      <div className="project-contain bg-gray-200 dark:bg-darkUtility 0 h-32 w-full rounded-b-md px-4 py-1 flex-col gap-2">
        <div className="project-title font-semibold text-lg text-lightText dark:text-darkText">
          {title}
        </div>
        <div className="project-desc text-sm text-DarkSecondary dark:text-lightSecondary font-regular h-10 overflow-hidden">
          {description}
        </div>
        <div className="project-buttons flex flex-row gap-2 mt-2">
          <a href={ghLink}>
            <button className="project-button bg-darkBackground dark:bg-lightBackground text-darkText dark:text-lightText font-semibold rounded-md hover:scale-105 transition duration-100 ease-in-out w-8 h-8 flex justify-center items-center">
              <Github className="btn-logo" />
            </button>
          </a>
          {/* if liveLink is null dont render button */}
          {liveLink === null ? null : (
            <a href={liveLink}>
              <button className="project-button bg-live text-darkText font-medium rounded-md px-2 py-1 flex gap-2 justify-center items-center  hover:scale-105 transition duration-100 ease-in-out w-20 h-8 flex justify-center items-center">
                <Globe className="btn-logo" />
                Live
              </button>
            </a>
          )}
          {/* <a href={liveLink}>
            <button className="project-button bg-live text-darkText font-medium rounded-md px-2 py-1 flex gap-2 justify-center items-center  hover:scale-105 transition duration-100 ease-in-out w-20 h-8 flex justify-center items-center">
              <Globe className="btn-logo" />
              Live
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
