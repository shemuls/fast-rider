import React from "react";
import heroImage from "../../assets/images/heroImg.jpg";
import { Rides } from "../Rides/Rides.js";
import classes from "./home.module.css";

export const Home = () => {
  return (
    <>
      <section
        className={classes.heroSection}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container ">
          <div
            className={
              classes.blur + " d-flex align-items-center justify-content-center"
            }
          >
            <div className="row">
              <div className="col ">
                <div className="text-center text-light z-index-2">
                  <h2 className="display-2 text-warning">
                    Go Fast and have a Relax
                  </h2>
                  <p className="w-50 mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum repellendus nam cumque ipsam nesciunt ducimus
                    eligendi ipsum! Rerum nemo vitae a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mb-5">
        <div className="container">
          <Rides />
        </div>
      </section>
    </>
  );
};
