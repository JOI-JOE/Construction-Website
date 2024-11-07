import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h3>UrbanEdge Contructions</h3>
              <div className="pe-5">
                <p>
                  Our post-contruction services gives you peace of mind knowing
                  that we are still here for you even afters.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <li>
                  <a href="">Ci Contruction</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Contanct Us</h3>
              <ul>
                <li>
                  <a href="">(888-000-0000)</a>
                </li>
                <li>
                  <a href="">info@example.com</a>
                </li>
                <li>
                  <a href="">Specialty Contruction</a>
                </li>
                <p>
                  Hà Nội <br />
                  Cao Xá-Đức Thượng <br />
                  9809XXXXXXXXX
                </p>
              </ul>
            </div>
          </div>

          <hr />
          <p className="text-center">
            Copyright 2024 UrbanEdge Constructions. All Right Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
