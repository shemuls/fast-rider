import { React, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FastRiderContext } from "../../App.js";
import { firebaseInitializeApp, signInWithGoogle } from "../../Auth/Auth.js";
import { Login } from "../../components/Form/Login";
import { Register } from "../../components/Form/Register.js";
import { ThirdPartyLogin } from "../../components/Form/ThirdPartyLogin.js";

export const LoginPage = () => {
  firebaseInitializeApp();
  const { setSingedInUser } = useContext(FastRiderContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const history = useHistory();

  const [formPopup, setFormPopup] = useState(false);

  // Signin with google
  const loginWithGoogle = () => {
    signInWithGoogle().then((res) => {
      setSingedInUser(res);
      res.email && history.replace(from);
    });
  };

  return (
    <div className="container">
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
          <div className="ThirdPartyLogin text-center mt-5  w-50 m-auto">
            <div className="d-flex justify-content-center align-content-center align-items-center">
              <div
                style={{ width: "45%", height: "1px", backgroundColor: "#ccc" }}
              >
                .
              </div>
              <div className="mx-2">OR</div>
              <div
                style={{ width: "45%", height: "1px", backgroundColor: "#ccc" }}
              >
                .
              </div>
            </div>
            <ThirdPartyLogin loginWithGoogle={loginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
};
