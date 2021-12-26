import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  return (
    <div className="row detail-container" id="testimonial">
      <div className="col-12 detail-header">
        <h1>Testimonial</h1>
        <span>What My Coworker Say About Me</span>
        <div class="divider div-transparent div-dot"></div>
      </div>
      <div className="col-12 detail-content">
        <OwlCarousel loop margin={10}>
          <div className="item">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <q>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </q>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
          <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <q>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </q>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
          <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <q>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </q>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
          <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <q>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </q>
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
