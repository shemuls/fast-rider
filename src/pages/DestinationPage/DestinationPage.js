import React from "react";
import { DestinationForm } from "../../components/Form/DestinationForm.js";
import { PickFormMap } from "../../components/Map/PickFormMap.js";
import { PickToMap } from "../../components/Map/PickToMap.js";

export const DestinationPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card bg-light py-4 px-5 shadow">
            <DestinationForm />
          </div>
        </div>
        <div className="col-md-8">
          <PickFormMap />
          <PickToMap />
        </div>
      </div>
    </div>
  );
};
