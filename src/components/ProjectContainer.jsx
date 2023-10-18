import Github from "./icons/Github";
import "../styles/project.scss";
import Globe from "./icons/Globe";
const ProjectContainer = ({ image, title, description, ghLink, liveLink }) => {
  return (
    <div className="flex-col h-60 w-52 bg-lightBackground dark:bg-darkBackground rounded-md">
      <div className="image-contain bg-green-300 h-30 w-full rounded-t-md object-contain flex">
        <img src={image} alt="" className="w-full rounded-t-md" />
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
            <button className="project-button bg-darkBackground dark:bg-lightBackground text-darkText dark:text-lightText font-semibold rounded-md px-2 py-1 hover:scale-105 transition duration-100 ease-in-out">
              <Github className="btn-logo" />
            </button>
          </a>

          <a href={liveLink}>
            <button className="project-button bg-live text-darkText font-medium rounded-md px-2 py-1 flex gap-2 justify-center items-center  hover:scale-105 transition duration-100 ease-in-out">
              <Globe className="btn-logo" />
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
