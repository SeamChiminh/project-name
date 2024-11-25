import React from "react";
import banner_1 from "../assets/images/banner_1.jpg";
import banner_2 from "../assets/images/banner_2.jpg";
import banner_3 from "../assets/images/banner_3.jpg";

const Slice = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${banner_1})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">women's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${banner_2})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">accessories</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${banner_3})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slice;
