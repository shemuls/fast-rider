import React from "react";

export const DestinationDetails = ({ distinationData }) => {
  return (
    <ul className="list-group position-relative">
      <li className="mb-2">
        <strong>
          <span
            className="bg-white rounded-circle
            "
            style={{
              width: "12px",
              height: "12px",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
          {distinationData.pickForm}
        </strong>
      </li>
      <li>
        <strong>
          <span
            className="bg-white rounded-circle
            "
            style={{
              width: "12px",
              marginRight: "8px",
              height: "12px",
              display: "inline-block",
            }}
          ></span>
          {distinationData.pickTo}
        </strong>
      </li>
      <div
        className="bg-white position-absolute"
        style={{ width: "3px", height: "30px", top: "13px", left: "5px" }}
      ></div>
    </ul>
  );
};
