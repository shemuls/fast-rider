import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FastRiderContext } from "../../App.js";
import { RideItem } from "../RideItem/RideItem.js";

export const Rides = () => {
  const { rides } = useContext(FastRiderContext);
  const history = useHistory();
  const selectRideHandler = (selecetedRide) => {
    history.push("/destination");
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
