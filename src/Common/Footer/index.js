import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Styles from "./styles";
import Models from "../Models";

const Footer = () => {
  const [beforePadding, changePadding] = useState(0);
  const [height, changeHeight] = useState("0");
  const [toggle, changeToggle] = useState(true);

  var audio = new Audio(require("../../assets/sound/hollow.mp3"));

  function changeState() {
    if (toggle) {
      changeHeight("auto");
      changeToggle(!toggle);
      changePadding(10);
      audio.play();
    } else {
      changeHeight("0");
      changeToggle(!toggle);
      changePadding(0);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (toggle) {
        changeHeight("auto");
        changeToggle(!toggle);
        changePadding(10);
        audio.play();
      } else {
        changeHeight("0");
        changeToggle(!toggle);
        changePadding(0);
      }
    }, 5000);
  }, []);
  const popoverContact = () => {
    changeHeight("0");
    changeToggle(!toggle);
    changePadding(0);
  };
  return (
    <Styles>
      <footer id="footer">
        <section id="chat-icon">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-right">
                <span className="d-inline-block notifyWrapper">
                  <div
                    className="customPopover mb-3"
                    style={{ height: `${height}` }}
                  >
                    <span
                      className="decoration"
                      style={{ padding: `${beforePadding}px` }}
                    ></span>
                    <div className="header">
                      <h6>Latest Announcement</h6>
                    </div>

                    <div className="customBody ">
                      <p>
                        Honymoon Tours are also arrange here, but we are not
                        announce public because of some security issues, after
                        your varification we provide all information.
                        <Link
                          to="contactUs"
                          style={{
                            color: "#28a745",
                            fontWeight: "bold",
                            marginLeft: "30px"
                          }}
                          onClick={() => popoverContact.bind(this)}
                        >
                          Contact Us
                        </Link>
                      </p>
                    </div>
                  </div>
                  <img
                    src={require("../../assets/icons/notification.png")}
                    alt=""
                    className="fa-comments"
                    onClick={() => changeState()}
                  ></img>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="container pt-5">
          <div className="row mt-5 sub-footer">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <h3 className="sub-footer-head-tag">Expeditions</h3>
                  <Link className="sub-footer-links" to="k2">
                    K2 Expedition
                  </Link>
                  <Link className="sub-footer-links" to="nangaparbat">
                    Nanga Parbat
                  </Link>
                  <Link className="sub-footer-links" to="gasherbrum_I">
                    Gasherburum I
                  </Link>
                  <Link className="sub-footer-links" to="boardpeak">
                    Broad Peak Expedition
                  </Link>
                  <Link className="sub-footer-links" to="khunjerabtop">
                    Khunjerab Top
                  </Link>
                </div>
                <div className="col-sm-6 mb-5">
                  <h3 className="sub-footer-head-tag">
                    Tours & Jeep Excursions
                  </h3>
                  <Link
                    to="toursAndTravels"
                    className="sub-footer-links "
                    id="sub-footer-link"
                    style={{ textDecoration: "none" }}
                  >
                    Explore All Tours
                  </Link>

                  <a
                    className="sub-footer-links"
                    data-toggle="modal"
                    data-target="#poloFestival"
                  >
                    Polo Festival
                  </a>
                  <a
                    className="sub-footer-links"
                    data-toggle="modal"
                    data-target="#hindukush"
                  >
                    Jeep Safari to Hindukush
                  </a>
                  <a
                    className="sub-footer-links"
                    data-toggle="modal"
                    data-target="#DeosaiPlains"
                  >
                    DeosaiPlains
                  </a>
                  <a
                    className="sub-footer-links"
                    data-toggle="modal"
                    data-target="#historicalSilkRoad"
                  >
                    Historical Silk Road
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <h3 className="sub-footer-head-tag">Provide Services</h3>
                  <a id="services">Tour Plains(start to end)</a>
                  <a id="services">Security(Personal)</a>
                  <a id="services">Guiders(any gander)</a>
                  <a id="services">Vip Stay</a>
                </div>
                <div className="col-sm-6 mb-5">
                  <h3 className="sub-footer-head-tag">CONTACT US</h3>
                  <a className="sub-footer-links" href="">
                    <span>Email:</span> karimkhan.saka@gmail.com
                  </a>
                  <a className="sub-footer-links" href="">
                    <span>Phone:</span> +92-346-9235699
                  </a>
                  <a className="sub-footer-links" href="">
                    <span>Address:</span> Saka House, Aliabad, District Hunza
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-5 pt-5 pb-3 mainFooter">
            <div className="col-md-6  pl-5 text-center">
              <p className="text-light copyright">
                2020 Tours & travels Agencey pakistan
              </p>
            </div>
            <div
              className="col-md-6 text-center pr-3 text-light"
              style={{ transform: "translateY(-15px)" }}
            >
              <div className="d-flex">
                <div className="circle-icon ml-3">
                  <i className="fa fa-instagram"></i>
                </div>
                <div className="circle-icon ml-3">
                  <i className="fa fa-twitter"></i>
                </div>
                <div className="circle-icon ml-3">
                  <a href="https://www.facebook.com/Hunza2gojal/?ref=page_internal">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
                <div className="circle-icon ml-3">
                <a href="https://www.youtube.com/channel/UChI3TItkSFqJn3_wUGzUtAA">
                  <i className="fa fa-youtube"></i>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Models />
    </Styles>
  );
};

export default Footer;
