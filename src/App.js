import { createContext } from "react";
import "./App.css";
import { Body } from "./components/Body/Body.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { MainContent } from "./components/MainContent/MainContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

export const FastRiderContext = createContext();
function App() {
  return (
    <FastRiderContext.Provider value={{ hi: "hi shemul" }}>
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
