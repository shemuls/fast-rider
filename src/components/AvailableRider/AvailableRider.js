import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bike from "../../assets/images/bike.png";
import bus from "../../assets/images/bus.png";
import car from "../../assets/images/car.png";
import train from "../../assets/images/train.png";

export const AvailableRider = ({ rideItem }) => {
  let traffic = "";
  if (rideItem === "car") {
    traffic = car;
  } else if (rideItem === "bike") {
    traffic = bike;
  } else if (rideItem === "bus") {
    traffic = bus;
  } else if (rideItem === "train") {
    traffic = train;
  } else {
    traffic = "";
  }

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between p-3 align-items-center list-group-item-action  ">
        <img style={{ height: "40px" }} src={traffic} alt="" />
        <p className="m-0 text-capitalize">
          <strong> {rideItem}</strong>
        </p>
        <p className="m-0">
          <FontAwesomeIcon icon={faUser} /> 4
        </p>
        <p className="m-0">
          <strong>$59</strong>
        </p>
      </li>
      <li className="list-group-item d-flex justify-content-between p-3 align-items-center list-group-item-action list-group-item-light">
        <img style={{ height: "40px" }} src={traffic} alt="" />
        <p className="m-0 text-capitalize">
          <strong> {rideItem}</strong>
        </p>
        <p className="m-0">
          <FontAwesomeIcon icon={faUser} /> 6
        </p>
        <p className="m-0">
          <strong>$79</strong>
        </p>
      </li>
      <li className="list-group-item d-flex justify-content-between p-3 align-items-center list-group-item-action ">
        <img style={{ height: "40px" }} src={traffic} alt="" />
        <p className="m-0 text-capitalize">
          <strong> {rideItem}</strong>
        </p>
        <p className="m-0">
          <FontAwesomeIcon icon={faUser} /> 3
        </p>
        <p className="m-0">
          <strong>$49</strong>
        </p>
      </li>
    </ul>
  );
};
