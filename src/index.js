import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Profile from "./PortfolioContainer/Home/Profile";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import "./global.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Profile />
        <AboutMe />
        <Resume />
        <Testimonial />
        {/* <ContactMe /> */}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
