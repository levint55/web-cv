import React from "react";

const AboutMe = () => {
  return (
    <div className="row" id="about-me">
      <div className="col-12">
        <h1>About Me</h1>
        <span>Why Choose Me?</span>
        <br />
        <span>TODO Separator</span>
      </div>
      <div className="col-12">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/380"
                className="img-fluid rounded-start"
                alt="Profile"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris varius dui vel rhoncus pulvinar. Proin cursus lorem
                  vitae condimentum varius. Etiam commodo eu nisl ut dapibus. Ut
                  eros orci, malesuada vitae tempus et, sollicitudin et leo.
                  Proin ut enim sit amet ante feugiat gravida. Donec vitae purus
                  varius, vestibulum massa eget, sollicitudin orci. Suspendisse
                  efficitur ipsum quis lacinia placerat. Phasellus rutrum neque
                  at turpis vulputate fringilla.
                </p>
                <div className="card-text">
                  Here are a few Highlights:
                  <ul>
                    <li>TODO</li>
                    <li>TODO</li>
                    <li>TODO</li>
                    <li>TODO</li>
                  </ul>
                </div>
                <button className="btn btn-primary">Get Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
