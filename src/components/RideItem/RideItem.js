import React from "react";
import { getRideitemImg } from "../../utilites/CustomFunctions.js";

export const RideItem = ({ ride, selectRideHandler }) => {
  const rideItemUrl = getRideitemImg(ride);
  return (
    <div className="col-md-3">
      <div
        onClick={() => selectRideHandler(ride)}
        className="shadow rounded p-5 cursor text-center rideItemBox"
      >
        <img
          className="m-auto d-block mb-4"
          style={{ height: "120px" }}
          src={rideItemUrl}
          alt={rideItemUrl}
        />
        <h3 className="text-capitalize">{ride}</h3>
      </div>
    </div>
  );
};
