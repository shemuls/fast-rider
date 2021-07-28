import { React, useContext } from "react";
import { FastRiderContext } from "../../App.js";
import { RideItem } from "../RideItem/RideItem.js";

export const Rides = () => {
  const { rides } = useContext(FastRiderContext);

  const selectRideHandler = (selecetedRide) => {
    console.log(selecetedRide);
  };
  return (
    <div className="row">
      {rides.map((ride) => (
        <RideItem ride={ride} selectRideHandler={selectRideHandler} />
      ))}
    </div>
  );
};
