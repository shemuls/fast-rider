import React from "react";

export const Register = ({
  handleSubmit,
  register,
  submitRegisterForm,
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

      <h4 className="mb-3">Create an account</h4>
      <form
        onSubmit={handleSubmit(submitRegisterForm)}
        className="myForm"
        action=""
      >
        <div className="form-group mb-4">
          <input
            {...register("name")}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-4">
          <input
            {...register("email", {
              required: "Email field is required",
              pattern: /\S+@\S+\.\S+/,
            })}
            type="text"
            className="form-control"
            placeholder="Email address"
          />
          {errors?.email?.type === "required" && (
            <p className="m-0 text-danger">{errors?.email?.message}!</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="m-0 text-danger">Your email is invalid</p>
          )}
        </div>
        <div className="form-group mb-4">
          <input
            {...register("password", {
              required: "Password field is required!",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            type="password"
            className="form-control"
            placeholder="Password"
          />
          {errors?.password?.message && (
            <p className="m-0 text-danger">{errors?.password?.message}</p>
          )}
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
