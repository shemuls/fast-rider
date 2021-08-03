import React from "react";
import bike from "../../assets/images/bike.png";
import bus from "../../assets/images/bus.png";
import car from "../../assets/images/car.png";
import train from "../../assets/images/train.png";

export const RideItem = ({ ride, selectRideHandler }) => {
  let traffic = "";
  if (ride === "car") {
    traffic = car;
  } else if (ride === "bike") {
    traffic = bike;
  } else if (ride === "bus") {
    traffic = bus;
  } else if (ride === "train") {
    traffic = train;
  } else {
    traffic = "";
  }
  return (
    <div className="col-md-3">
      <div
        onClick={() => selectRideHandler(ride)}
        className="shadow rounded p-5 cursor text-center rideItemBox"
      >
        <img
          className="m-auto d-block mb-4"
          style={{ height: "120px" }}
          src={traffic}
          alt={traffic}
        />
        <h3 className="text-capitalize">{ride}</h3>
      </div>
    </div>
  );
};
