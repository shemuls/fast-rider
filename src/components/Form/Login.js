import React from "react";

export const Login = ({
  handleSubmit,
  register,
  submitLoginFormHandle,
  errors,
  singedInUser,
}) => {
  return (
    <>
      <h4 className="mb-3">Login</h4>
      <form className="myForm" action="">
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
        <div className="form-group mb-2">
          <button type="submit" className="btn btn-warning btn-block">
            <strong>Login</strong>
          </button>
        </div>
      </form>
    </>
  );
};
