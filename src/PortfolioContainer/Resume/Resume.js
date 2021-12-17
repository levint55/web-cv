import React, { useState } from "react";
import { Carousel, ProgressBar } from "react-bootstrap";

const Resume = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="row" id="resume">
      <div className="col-12">
        <h1>Resume</h1>
        <span>My Formal Bio Details</span>
        <br />
        <span>TODO Separator</span>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <div>
              <span>Education</span>
            </div>
            <div>
              <span>Work History</span>
            </div>
            <div>
              <span>Programming Skills</span>
            </div>
            <div>
              <span>Project</span>
            </div>
            <div>
              <span>Interest</span>
            </div>
          </div>
          <div className="col-8">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              interval={null}
              indicators={false}
            >
              <Carousel.Item>
                <div className="row">
                  <div className="col-8">
                    <span>Parahyangan Catholic University</span>
                  </div>
                  <div className="col-4">
                    <span>2016-2020</span>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <span>Parahyangan Catholic University</span>
                  </div>
                  <div className="col-4">
                    <span>2016-2020</span>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <span>Parahyangan Catholic University</span>
                  </div>
                  <div className="col-4">
                    <span>2016-2020</span>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-8">Company Name</div>
                  <div className="col-4">2020-Present</div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-6">
                    Javascript
                    <ProgressBar now={80} />
                  </div>
                  <div className="col-6">
                    Java
                    <ProgressBar now={70} />
                  </div>
                  <div className="col-6">
                    React JS
                    <ProgressBar now={60} />
                  </div>
                  <div className="col-6">
                    PHP
                    <ProgressBar now={80} />
                  </div>
                  <div className="col-6">
                    MySQL
                    <ProgressBar now={80} />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-8">Personal Portfolio Website</div>
                  <div className="col-4">2021-Present</div>
                  <div className="col-12">
                    <p>
                      <b>Technologies Used: React JS, Bootstrap.</b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-12">Interest</div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec maximus mi lacinia, suscipit neque ut, cursus justo.
                      Quisque mattis pretium ornare.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
