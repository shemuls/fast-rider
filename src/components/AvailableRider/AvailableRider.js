import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getRideitemImg } from "../../utilites/CustomFunctions.js";

export const AvailableRider = ({ rideItem }) => {
  const rideItemUrl = getRideitemImg(rideItem);

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between p-3 align-items-center list-group-item-action  ">
        <img style={{ height: "40px" }} src={rideItemUrl} alt="" />
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
        <img style={{ height: "40px" }} src={rideItemUrl} alt="" />
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
        <img style={{ height: "40px" }} src={rideItemUrl} alt="" />
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
