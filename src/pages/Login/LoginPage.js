import { React, useContext, useState } from "react";
import { FastRiderContext } from "../../App.js";
import { firebaseInitializeApp, signInWithGoogle } from "../../Auth/Auth.js";
import { Login } from "../../components/Form/Login";
import { Register } from "../../components/Form/Register.js";
import { ThirdPartyLogin } from "../../components/Form/ThirdPartyLogin.js";

export const LoginPage = () => {
  firebaseInitializeApp();
  const { setSingedInUser } = useContext(FastRiderContext);

  const [formPopup, setFormPopup] = useState(false);

  // Signin with google
  const loginWithGoogle = () => {
    signInWithGoogle().then((res) => {
      setSingedInUser(res);
    });
  };

  return (
    <div className="container">
      <button onClick={() => loginWithGoogle()}>Google</button>
      <div className="row my-5">
        <div className="col">
          <div className="card p-4 w-50 m-auto shadow">
            <div className="card-body">
              {formPopup ? <Register /> : <Login />}
            </div>
            <div className="my-card-footer text-center">
              <p>
                {formPopup
                  ? "Already have an account?"
                  : "Don't have an account? "}
                <span
                  onClick={() =>
                    formPopup ? setFormPopup(false) : setFormPopup(true)
                  }
                  className="text-warning cursor"
                >
                  <strong> {formPopup ? "Login" : "Register"}</strong>
                </span>
              </p>
            </div>
          </div>
          <div className="ThirdPartyLogin text-center mt-5">
            <ThirdPartyLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
