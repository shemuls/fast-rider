import { createContext, useState, useEffect } from "react";
import "./App.css";
import { Body } from "./components/Body/Body.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { MainContent } from "./components/MainContent/MainContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RideElements } from "./fakeData/RideElements.js";

export const FastRiderContext = createContext();
function App() {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    setRides(RideElements);
  }, []);

  const [singedInUser, setSingedInUser] = useState({
    isSingedUser: false,
    email: "",
    displayName: "",
    photoUrl: "",
    error: "",
    success: "",
  });

  return (
    <FastRiderContext.Provider
      value={{
        rides: rides,
        singedInUser: singedInUser,
        setSingedInUser: setSingedInUser,
      }}
    >
      <Router>
        <Body>
          <Header />
          <MainContent />
          <Footer />
        </Body>
      </Router>
    </FastRiderContext.Provider>
  );
}

export default App;
