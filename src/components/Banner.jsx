import React from "react";
import slider_1 from "../assets/images/slider_1.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="main_slider"
        style={{ backgroundImage: `url(${slider_1})` }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Spring / Summer Collection 2017</h6>
                <h1>Get up to 30% Off New Arrivals</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
