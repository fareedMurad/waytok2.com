import React, { useState } from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function K2() {

    const [aboutToggler, changeAboutToggler,] = useState(false);
    const [plainsToggler, changePlainsToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>K2 </h2>
                            <p>K2 expedition is considered to be one of the top mountaineering adventures in the world, it combines the thrill of climbing and trekking in the glacial surroundings around Baltoro Glacier with the pleasure of touring in the colourful Himalayan and Karakorum valleys of Skardu, Shigar and Askoli.
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Mountain Range: <h4>Karakoram</h4></span>
                                <span>Max Altitude: <h4>8616 m</h4></span>
                                <span>Duration : <h4>60 days</h4></span>
                                <span>Best time: <h4>All Seasons</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col k2-img">
                            <img src={require("../../../assets/img/expeditions/k2One.jpg")} alt="K2" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>About K2</h3>
                            <p>K2 expedition is considered to be one of the top mountaineering adventures in the world, it combines the thrill of climbing and trekking in the glacial surroundings around Baltoro Glacier with the pleasure of touring in the colourful Himalayan and Karakorum valleys of Skardu, Shigar and Askoli. During the K2 expedition you will have spectacular view of other world famous peaks, Including  Broad Peak (8,044 m), Gasherbrum Group, Chogolisa (7,686 m), Golden Throne (7,365m), Trango Tower and many others.

                            Trango Adventure have been organising k2 expeditions for mountaineering enthusiasts from around the world since 40 years. We operates a 63 days long K2 expeditions. We offer full board logistic services to K2 Base Camp. The duration of the expedition may be longer or shorter depending on the clients experience, ability and available time.

                            Our K2 expedition starts point is Islamabad. Your guide will meet and greet you at Islamabad international Airport then transfer you to the hotel, rest of the day in Islamabad to recover from the journey. We will meet in the afternoon for a briefing about the Expedition. Next day you will catch the spectacular mountains view flights to Skardu, Baltistan. On route you will have the first glimpse of the great Nanga Parbat, K2 and the other stunning Himalayan & Karakoram Mountain Peaks. After checking in to our Hotel, will have a rest and preparation day in Skardu. Skardu is the Capital of Baltistan and it is the getaway to the Mighty K2 base camp trek, k2 and Gondogoro La Trek, Deosai Plato, Mashabrum, Gasherbrums and many other famous Karakoram Peaks. In Skardu, Trekkers and climber usually do their finale purchasing and top ups for their journeys. After breakfast you will continue your journey by a long drive along the mighty Indus, Shigar and Braldu River to Askoli.

                            Your “k2 expedition” journey will end in Islamabad to so please make sure to book your return flight from Islamabad.</p>
                        </div>
                        <div className="col-md-6 side-images mt-4">
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/k2.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)} />
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/k2Two.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)} />
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/k2Three.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)} />
                            </div>
                            <FsLightbox
                                toggler={aboutToggler}
                                sources={[
                                    require("../../../assets/img/expeditions/k2.jpg"),
                                    require("../../../assets/img/expeditions/k2Two.jpg"),
                                    require("../../../assets/img/expeditions/k2Three.jpg")
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="amazing-plains">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h4 className="mb-0 pb-1 amazing-plains-head-title">Amazing Plains</h4>
                            <p className="mt-0">you'll Enjoy that much, that you ever never forget</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mb-5">
                            <p className="amazing-plains-head-para">
                                The prefix "K" stands for Karakorum thus K-2 means Karakorum 2, the second highest peak of the world. It is also locally known as "Chogori" means lord of the mountains.
                                A large number of towering peaks of above 7500m are surrounding K-2 as if they were paying homage to their King. Hundreds of glaciers have formed the highways between the mountains. Godwin Austin Glacier is one of the charming ice highway towards K-2.
                                Concordia is the measure point from where climbers follow their routes to the summits.
                                </p>
                        </div>
                        <div className="col-md-6 mt-2">
                            <img src={require("../../../assets/img/expeditions/k2Four.jpg")} alt=""
                                style={{ borderRadius: "5px" }} onClick={() => changePlainsToggler(!plainsToggler)} />
                            <FsLightbox
                                toggler={plainsToggler}
                                sources={[
                                    require("../../../assets/img/expeditions/k2Four.jpg")
                                ]}
                            />
                        </div>
                    </div>
                    <div className="row outline-itinerary">
                        <div className="col">
                            <div className="col">
                                <h3>Outline Itinerary</h3>
                                <h4 className="pb-2">DAY PROGRAM </h4>
                                <h6>01<p className="pl-5">	Arrive Islamabad</p></h6>
                                <h6>02<p className="pl-5">Day at Islamabad for briefing and other official paperwork with ministry of tourism.</p>
                                </h6>
                                <h6>03/04 <p>Travel by road to Skardu or flight to Skardu.</p></h6>
                                <h6>05 <p className="pl-5">At Skardu for preparation of loads & other formalities.</p>
                                </h6>
                                <h6>06 <p className="pl-5">Departure by jeeps from Skardu to Askole/Thongal (trek head)</p>
                                </h6>
                                <h6>07/012 <p className="pl-3">Trek to the base camp on Baltoro Glacier</p>
                                </h6>
                                <h6>13/48 <p className="pl-4">37 days at the base camp with full board services.r</p>
                                </h6>
                                <h6>50/55 <p>Trek over Gondogoro Pass (5600 meters) to Hushe Valley.</p></h6>
                                <h6>56 <p className="pl-5">Jeep drive to Skardu.</p></h6>
                                <h6>57/58 <p>Overland journey from Skardu to Islamabad or fly to Islamabad.</p></h6>
                                <h6>59 <p className="pl-5">In Islamabad for the de-briefing of our expedition with ministry of tourism.</p>
                                </h6>
                                <h6>60 <p className="pl-5">Arbabparian</p></h6>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default K2;
