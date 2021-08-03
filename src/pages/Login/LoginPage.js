import { React, useContext } from "react";
import { FastRiderContext } from "../../App.js";
import { firebaseInitializeApp, signInWithGoogle } from "../../Auth/Auth.js";
import { Login } from "../../components/Form/Login";

export const LoginPage = () => {
  firebaseInitializeApp();
  const { setSingedInUser } = useContext(FastRiderContext);

  // Signin with google
  const loginWithGoogle = () => {
    signInWithGoogle().then((res) => {
      setSingedInUser(res);
    });
  };

  return (
    <div className="container">
      <button onClick={() => loginWithGoogle()}>Google</button>
      <Login />
      <div className="row my-5">
        <div className="col">
          <div className="card p-4 w-50 m-auto shadow">
            <div className="card-body">
              <h4 className="mb-3">Create an account</h4>
              <form className="myForm" action="">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group mb-4">
                  <button type="submit" className="btn btn-warning btn-block">
                    <strong> Create a account</strong>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
