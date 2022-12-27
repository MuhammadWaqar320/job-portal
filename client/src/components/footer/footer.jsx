import React from "react";
import "./footer.css";
const Footer = () => (
  <footer className="page-footer font-small blue  footer-class">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>
            Online Job Portal System
          </h4>
          <p style={{ color: "white" }}>
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>
            Quick Links
          </h4>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="link-class">
                About Us
              </a>
            </li>
            <li>
              <a href="#!" className="link-class">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h4 style={{ color: "yellow", fontFamily: "initial" }}>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="link-class">
                +051-23413344
              </a>
            </li>
            <li>
              <a href="#!" className="link-class">
                www.tes.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr style={{ color: "white" }}></hr>
    <div>
      <div
        className="sharethis-inline-share-buttons"
        style={{ paddingBottom: "20px", paddingTop: "20px" }}
      ></div>
    </div>
    <div className="footer-copyright text-center py-3 link-class">
      <div>
        Developed by :
        <span style={{ color: "yellow" }}>
          {" "}
          (1) Ihsan Iqbal
        </span>{" "}
      </div>
      © 2022 Copyright:
      <a href="#" className="link-class" style={{ color: "yellow" }}>
        {" "}
        onlineJobPortal.com
      </a>
    </div>
  </footer>
);

export default Footer;
