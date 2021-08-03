import React from "react";

export const Register = () => {
  return (
    <>
      <h4 className="mb-3">Create an account</h4>
      <form className="myForm" action="">
        <div className="form-group mb-4">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group mb-2">
          <button type="submit" className="btn btn-warning btn-block">
            <strong> Create a account</strong>
          </button>
        </div>
      </form>
    </>
  );
};
