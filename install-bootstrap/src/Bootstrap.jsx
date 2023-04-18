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
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img src="https://picsum.photos/500/300" className="card-img-top" height={300} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="https://picsum.photos/500/301" className="card-img-top" height={300} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src="https://picsum.photos/500/302" className="card-img-top" height={300} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <h1
                className="modal-title fs-5 text-white"
                id="staticBackdropLabel"
              >
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
