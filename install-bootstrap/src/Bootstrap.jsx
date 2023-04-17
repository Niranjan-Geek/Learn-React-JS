import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Bootstrap = () => {
  return (
    <>
      <div className="text-center pt-5">
        <h1 className="mb-3 text-primary">Hello...! This is Bootstrap</h1>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Hover Me
        </button>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-success">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-white" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-white">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-info">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bootstrap;
