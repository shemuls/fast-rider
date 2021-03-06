import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AvailableRider } from "../../components/AvailableRider/AvailableRider.js";
import { DestinationDetails } from "../../components/DestinationDetails/DestinationDetails.js";
import { DestinationForm } from "../../components/Form/DestinationForm.js";
import { PickFormMap } from "../../components/Map/PickFormMap.js";
import { getRideitemImg } from "../../utilites/CustomFunctions.js";

export const DestinationPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { rideItem } = useParams();
  const rideItemImg = getRideitemImg(rideItem);

  const [distinationData, setDistinationData] = useState({});

  const destinationFormHandle = (data) => {
    setDistinationData(data);
    reset();
  };

  const backToSearchHandle = () => {
    setDistinationData({});
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4">
          {!distinationData?.pickForm ? (
            <div className="row">
              <div className="col">
                <div className="card bg-white py-4 px-5 shadow">
                  <DestinationForm
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    destinationFormHandle={destinationFormHandle}
                  />
                </div>

                <div>
                  <img
                    src={rideItemImg}
                    alt={rideItemImg}
                    className="img-fluid p-5"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                <div className="card bg-warning py-4 px-5 shadow ">
                  <DestinationDetails distinationData={distinationData} />
                </div>
                <div className="card bg-white py-4 px-5 shadow my-4">
                  <AvailableRider rideItem={rideItem} />
                </div>

                <button
                  onClick={backToSearchHandle}
                  className="btn text-danger"
                >
                  <strong>-Back to search</strong>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-8">
          <PickFormMap />
        </div>
      </div>
    </div>
  );
};
