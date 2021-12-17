import React from "react";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="row" id="home">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-12 icon-container">
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://id.linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="col-12">
            <span>Hello I'm Amabel</span>
          </div>
          <div className="col-12">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Test1",
                  1000,
                  "Test2",
                  1000,
                  "Test3",
                  1000,
                  "Test4",
                  1000,
                ]}
              />
            </h1>
          </div>
          <div className="col-12">Personal Description</div>
          <div className="col-12">
            <button className="btn btn-primary">Get Resume</button>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img src="https://via.placeholder.com/380" alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;
