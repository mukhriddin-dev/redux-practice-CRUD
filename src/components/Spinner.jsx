import React from "react";

const Spinner = () => {
  return (
    <div className="text-center d-block mx-auto w-25">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
