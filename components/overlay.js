import React from "react";

const Overlay = () => {
  return (
    <div className="overlay">
      <style jsx>{`
        .overlay {
          background-color: rgba(0, 0, 0, 0.8);
          position: fixed;
          top: 1;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default Overlay;
