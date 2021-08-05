import { React, useContext } from "react";
import { FastRiderContext } from "../../App.js";
import { signOut } from "../../Auth/Auth.js";

export const Footer = () => {
  const { singedInUser, setSingedInUser } = useContext(FastRiderContext);
  const logOutHandler = () => {
    signOut().then((res) => {
      setSingedInUser(res);
    });
  };
  return (
    <footer className="py-3 bg-dark">
      <div className="container d-flex justify-content-around  align-items-center">
        <p className="text-center text-muted m-0">© Fast Rider Ltd. 2021</p>
        {singedInUser?.email && (
          <button onClick={logOutHandler} className="btn btn-danger">
            Log Out
          </button>
        )}
      </div>
    </footer>
  );
};
