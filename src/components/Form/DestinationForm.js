import React from "react";

export const DestinationForm = ({
  handleSubmit,
  register,
  errors,
  destinationFormHandle,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(destinationFormHandle)}>
        <div className="form-group my-2">
          <label htmlFor="pickForm">Pick Form</label>
          <input
            {...register("pickForm", { required: "This field is required!" })}
            type="text"
            className="form-control"
            id="pickForm"
          />
          {errors?.pickForm?.message && (
            <p className="text-danger">{errors?.pickForm?.message}</p>
          )}
        </div>
        <div className="form-group my-2">
          <label htmlFor="pickTo">Pick To</label>
          <input
            {...register("pickTo", { required: "This field is required!" })}
            type="text"
            className="form-control"
            id="pickTo"
          />
          {errors?.pickTo?.message && (
            <p className="text-danger">{errors?.pickTo?.message}</p>
          )}
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-warning btn-block ">
            <strong>Search</strong>
          </button>
        </div>
      </form>
    </>
  );
};
