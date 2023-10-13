import Java from "../components/icons/Java.jsx";
import ReactJS from "./icons/ReactJS.jsx";
import Python from "../components/icons/Python.jsx";
import Nextjs from "../components/icons/Nextjs.jsx";
import Vscode from "../components/icons/Vscode.jsx";
import Github from "../components/icons/Github.jsx";
import Vercel from "../components/icons/Vercel.jsx";
import "../styles/square.scss";

const SquareContainer = ({ type }) => {
  switch (type) {
    case "java":
      var logo = <Java />;
      break;
    case "react":
      var logo = <ReactJS />;
      break;
    case "python":
      var logo = <Python />;
      break;
    case "nextjs":
      var logo = <Nextjs />;
      break;
    case "vscode":
      var logo = <Vscode />;
      break;
    case "github":
      var logo = <Github />;
      break;
    case "vercel":
      var logo = <Vercel />;
      break;
    default:
      var logo = <Java />;
  }
  return (
    <div className="square-container object-fill flex items-center justify-center w-32 h-32 bg-transparent border-lightSecondary dark:border-darkSecondary border-4 rounded-md">
      {logo}
    </div>
  );
};

export default SquareContainer;
