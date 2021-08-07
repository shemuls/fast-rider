import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const ThirdPartyLogin = ({
  loginWithGoogle,
  loginWithFacebookHandle,
  loginWithGithubHandle,
}) => {
  return (
    <div className="my-3 mx-5">
      <button
        onClick={loginWithGoogle}
        className="btn border text-dark btn-block mb-2"
      >
        <FontAwesomeIcon className="text-danger" icon={faGoogle} /> Continue
        with Google
      </button>
      <button
        onClick={loginWithFacebookHandle}
        className="btn border text-dark btn-block mb-2"
      >
        <FontAwesomeIcon className="text-primary" icon={faFacebook} /> Continue
        with Facebook
      </button>
      <button
        onClick={loginWithGithubHandle}
        className="btn  border text-dark btn-block mb-2"
      >
        <FontAwesomeIcon className="text-primary" icon={faGithub} />
        Continue with Twitter
      </button>
    </div>
  );
};
