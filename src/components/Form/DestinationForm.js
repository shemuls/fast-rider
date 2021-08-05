import React from "react";

export const DestinationForm = () => {
  return (
    <>
      <form>
        <div className="form-group my-2">
          <label htmlFor="pickForm">Pick Form</label>
          <input type="text" className="form-control" id="pickForm" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="pickTo">Pick To</label>
          <input type="text" className="form-control" id="pickTo" />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-warning btn-block">
            <strong>Search</strong>
          </button>
        </div>
      </form>
    </>
  );
};
