import React, { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

import Modals from '../../Common/Models'
import Styles from "./styles";

function Home() {
  const [toggler, setToggler] = useState(false);
  return (
    <Styles>
      <div>
        <section id="head-section">
          <div className="customContainer">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators justify-content-start">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="6"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="7"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="8"
                ></li>
              </ol>
              <div className="rgba">
                <div id="head-box">
                  <h2 className="head-para text-success text-center" >
                    <span id="headOnlyDesktopDisplay">Welcome To </span>Way To K2
                  </h2>
                  <h5 className="head-title text-center">
                    Pakistan leading{" "}
                    <span className="text-success ">Tours & travel </span>
                    service company
                  </h5>
                  <div className="text-center mt-2">
                    <a
                      className="under-line-link "
                      href="https://www.youtube.com/watch?v=JNJyQ5OIIbU"
                    >
                      <span className="head-small-uLine " style={{borderBottom:'none'}}>Watch Profile</span>
                    <i className="fa fa-play-circle-o text-success"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../assets/img/sunset.jpg")}
                    className=" slided-block w-100"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/Nager.jpg")}
                    className=" slided-block w-100"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item bg-success ">
                  <img
                    src={require("../../assets/img/ghizer.jpg")}
                    className=" slided-block w-100"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/gilgit.jpg")}
                    className=" slided-block w-100"
                    alt="Fourth slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/kharmang.jpg")}
                    className=" slided-block w-100"
                    alt="Fifth slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/skardu.jpg")}
                    className=" slided-block w-100"
                    alt="Sixth  slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/shigir.jpg")}
                    className=" slided-block w-100"
                    alt="seveth  slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/astore.jpg")}
                    className=" slided-block w-100"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/img/diammer.png")}
                    className=" slided-block w-100"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>

        {/* *****__Section2 3_Boxes__**** */}
        <section id="small-head-box-section">
          <div className="container pb-5">
            <div>
              <h2 className="title pb-5 pt-5">
                <span className="feature-decoration">Expeditions </span>
              </h2>
            </div>
            <div className="row pb-3 wow jello">
              <div className="col-md-4 pb-5">
                <h5
                  className="small-head-box-title"
                  id="mobile-disable-small-head-box-title"
                >
                  Nanga Parbat
                </h5>
                <p className="small-head-box-para">
                  {" "}
                  Is the ninth highest mountain in the world at 8,126 metres
                  (26,660 ft) above sea level.It is situated in the extreme west
                  of the mighty Himalaya
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/nanga-p.jpg")}
                        className="small-head-box"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="nangaparbat">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3">
                <h5 className="small-head-box-title">Broad Peak</h5>
                <p className="small-head-box-para">
                  The Broad peak mountain has five summits: Broad Peak, Rocky
                  Summit, Broad Peak Central, Broad Peak North, and Kharut
                  Kangri...
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/broadpeak.jpg")}
                        className="small-head-box mb-2"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="boardpeak">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="small-head-box-title">Khunjerab Top</h5>
                <p className="small-head-box-para">
                  Is a high mountain pass in the Karakoram Mountains in a
                  strategic. The Khunjerab Pass is the highest-paved
                  international border crossing in the world.
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/khunjerab.jpg")}
                        className="small-head-box mb-2"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="khunjerabtop">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-md-4 pb-3">
                <h5
                  className="small-head-box-title"
                  id="mobile-disable-small-head-box-title"
                >
                  K-2
                </h5>
                <p className="small-head-box-para">
                  The prefix "K" stands for Karakorum thus K-2 means Karakorum
                  2, the second highest peak of the world. It is also locally
                  known as "Chogori" means lord of the mountains...
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/k2.jpg")}
                        className="small-head-box mb-2"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="k2">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pb-3">
                <h5 className="small-head-box-title">Gasherbrum II</h5>
                <p className="small-head-box-para">
                  Situated in the same line up of Gasharbrum Peaks, it is the
                  fifth highest Peak in Pakistan. Gasherbrum II Expedition takes
                  you into the Heart of the Karakoram mountain{" "}
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/gasherbrum_2.jpg")}
                        className="small-head-box mb-2"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="gasherbrum_I">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="small-head-box-title">Gasherbrum I</h5>
                <p className="small-head-box-para">
                  Is equally known as Hidden Peak but in the local language
                  people call it Shining Wall. Gasharbrum 1 is the third highest
                  popular peak of Pakistan.It is also known as Hidden Peak,
                </p>
                <div className="onhover">
                  <div className="row">
                    <div className="col">
                      <img
                        src={require("../../assets/img/khunjerab.jpg")}
                        className="small-head-box mb-2"
                        alt=""
                      />
                      <div className="overlay">
                        <Link to="gasherbrum_II">
                          <button className="btn btn-success">Explore</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* *****__Section3 Expert Lines__**** */}
        <section id="tracking">
          <div className="container">
            <div className="row">
              <div className="col mb-3">
                <h5 className="title">Trekking</h5>
                <p className="expert-line-para ml-2">
                  Enjoy your Trek in Pakistan
                </p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3 mb-2">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/gondogoro1.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>

                  {/* <div className="overlay2">
                                        <img src={require("../../assets/img/treking/image.png")} alt="View full size" data-toggle="modal" data-target="#historicalSilkRoad" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Trek to Gondogorola Pass</h6>
              </div>
              <div className="col-md-3 mb-2">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/darkot5.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Trek to Darkot Pass</h6>
              </div>
              <div className="col-md-3 mb-2">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/shimshal5.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Shimshal Round Trek</h6>
              </div>
              <div className="col-md-3 mb-2">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/karakorum3.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Grand Exploration of Karakorum</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 mb-2">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/batura2.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Trek to Batura Passu</h6>
              </div>
              <div className="col-md-3 mb-2 ">
                <div className="onhover2">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/rushphari4.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Trek to Rush Phari</h6>
              </div>
              <div className="col-md-3 mb-2">
                <div className="onhover2 ">
                  <a data-toggle="tooltip" data-placement="top" title="HD View">
                    <img
                      src={require("../../assets/img/treking/patundas2.jpg")}
                      alt=""
                      className="expert-line-img"
                      onClick={() => setToggler(!toggler)}
                    />
                  </a>
                  {/* <div className="overlay2"><img src={require("../../assets/img/treking/image.png")} alt="View full size" />
                                        <p className="preview">Preview</p>
                                    </div> */}
                </div>
                <h6>Petundas Trek</h6>
              </div>
            </div>
            <Link to="trekking">
              <button className="btn btn-success mt-3 pl-3 pr-3" type="button">
                Explore More
              </button>
            </Link>
          </div>
        </section>

        <FsLightbox
          toggler={toggler}
          sources={[
            require("../../assets/img/treking/trek2.JPG"),
            require("../../assets/img/treking/trek3.JPG"),
            require("../../assets/img/treking/trek4.JPG"),
            require("../../assets/img/treking/trek5.JPG"),
            require("../../assets/img/treking/trek6.JPG"),
            require("../../assets/img/treking/trek7.JPG"),
            require("../../assets/img/treking/gondogoro1.jpg"),
            require("../../assets/img/treking/darkot2.jpg"),
            require("../../assets/img/treking/karakorum5.jpg"),
            require("../../assets/img/treking/shimshal5.jpg"),
            require("../../assets/img/treking/batura2.jpg"),
            require("../../assets/img/treking/rushphari1.jpg"),
            require("../../assets/img/treking/patundas2.jpg")
          ]}
        />

        <Modals />
      </div>
    </Styles>
  );
}

export default Home;
