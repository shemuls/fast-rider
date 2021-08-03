import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const ThirdPartyLogin = ({ loginWithGoogle }) => {
  return (
    <div className="my-3 mx-5">
      <button
        onClick={loginWithGoogle}
        className="btn border text-dark btn-block mb-2"
      >
        <FontAwesomeIcon className="text-danger" icon={faGoogle} /> Continue
        with Google
      </button>
      <button className="btn border text-dark btn-block mb-2">
        <FontAwesomeIcon className="text-primary" icon={faFacebook} /> Continue
        with Facebook
      </button>
      <button className="btn  border text-dark btn-block mb-2">
        <FontAwesomeIcon className="text-primary" icon={faTwitter} />
        Continue with Twitter
      </button>
    </div>
  );
};
