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
      {singedInUser?.error && (
        <p className="alert alert-danger">{singedInUser?.error}</p>
      )}
      {singedInUser?.success && (
        <p className="alert alert-success">{singedInUser?.success}</p>
      )}
      <h4 className="mb-3">Login</h4>
      <form
        onSubmit={handleSubmit(submitLoginFormHandle)}
        className="myForm"
        action=""
      >
        <div className="form-group mb-4">
          <input
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Your email is invalid",
              },
            })}
            type="text"
            className="form-control"
            placeholder="Email address"
          />
          {errors?.email?.message && (
            <p className="m-0 text-danger">{errors?.email?.message}!</p>
          )}
        </div>
        <div className="form-group mb-4">
          <input
            {...register("password", {
              required: "Password field is required",
            })}
            type="password"
            className="form-control"
            placeholder="Password"
          />
          {errors?.password?.message && (
            <p className="m-0 text-danger">{errors?.password?.message}!</p>
          )}
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
