import React from "react";
import Java from "../components/icons/Java.jsx";
import "../styles/square.scss";

const SquareContainer = ({ type }) => {
  switch (type) {
    case "Java":
      var logo = <Java />;
      break;
    default:
      var logo = <Java />;
  }
  return (
    <div class="square-container object-fill flex items-center justify-center w-32 h-32 bg-transparent border-lightSecondary dark:border-darkSecondary border-4 rounded-md">
      {logo}
    </div>
  );
};

export default SquareContainer;
