import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ status }) => {
  const getProgress = () => {
    switch (status) {
      case "Drafted":
        return 33;
      case "Signed":
        return 66;
      case "Completed":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${getProgress()}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
