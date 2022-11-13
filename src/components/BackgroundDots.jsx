import React from "react";

const BackgroundDots = ({ className }) => {
  return (
    <div className={`d-flex flex-column position-absolute ${className}`}>
      {[0, 1, 2, 3, 4].map((row) => (
        <div className="d-flex" key={"row-dot" + Math.random()}>
          {[0, 1, 2, 3, 4].map((col) => (
            <div
              className="bg-warning m-2 rounded-circle"
              style={{ width: "10px", height: "10px" }}
              key={"col-dot" + Math.random()}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BackgroundDots;
