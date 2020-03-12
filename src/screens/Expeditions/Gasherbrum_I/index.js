import React, { useState } from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function Gasherbrum_I() {

    
    const [aboutToggler, changeAboutToggler,] = useState(false);
    const [plainsToggler, changePlainsToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>The Gasharbrum I</h2>
                            <p>Gasharbrum 1 is equally known as Hidden Peak but in the local language people call it Shining Wall. It is the third highest peak of Pakistan. G-1 was attempted for the first time in 1936 the French Expedition but they could not succeed. Finally in 1958, Schoening and Kaufman, members of the American Expedition reached the top of Gasharbrum I.
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Mountain Range: <h4>Karakoram</h4></span>
                                <span>Max Altitude: <h4>8068 m</h4></span>
                                <span>Duration : <h4>70 days</h4></span>
                                <span>Best time: <h4>All Seasons</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col k2-img">
                            <img src={require("../../../assets/img/expeditions/gasherbrum.jpg")} alt="K2" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>About Gasherbrum I</h3>
                            <p>Gasherbrum I Expedition Takes you to the heart of Karakoram mountain range In Pakistan. It combines the thrill of  Climbing a Karakoram Peak in the glacial surroundings around Baltoro Glacier with the pleasure of touring in the colourful valleys of Skardu, Shigar and Askole which offers magnificent mountain scenery. Gasherbrum I Expedition offer glimpses of Trango Towers, Masherbrum, Mitre Peak, Chogolisa, Golden Throne, Broad Peak, K2, and the entire Baltoro Massif. Gasherbrum i is challenging and technically difficult at lower level of ascent. The most common climbing route for Gasherbrum i is the North West Face.

                            Since 40 years, we have been organising Gasherbrum I Expedition for Mountaineering enthusiasts from around the World. Trango Adventures operates a 62 days long Gasherbrum I Expedition. We offer Full board service until the base camp. The duration may be longer or shorter depending on the clients experience and ability.

                            Our Gasherbrum I Expedition start from Islamabad, Pakistan. Our Representative will Meet and Greet you at Islamabad international Airport then transfer you to the hotel, resting day in Islamabad to recover from the journey. We will meet again in the afternoon for a briefing about the Gasherbrum i Expedition. Next day you will catch the spectacular mountains view flights to Skardu, Baltistan (weather permitting). On route you will have the first glimpse of Nanga Parbat, K2 and the other stunning Himalayan & Karakoram Mountain Peaks. After checking in to your Hotel, you will have a rest and preparation day in Skardu. Skardu is the Capital of Baltistan and it is the getaway to the Mighty K2, Deosai Plato, Masherbrum, Gasherbrum and many other famous Karakoram Peaks. In Skardu, Trekkers and climber usually do their Finale purchasing for their journey. Following day you will drive along the Mighty Indus, Shigar and Braldu River towards Askoli. Askoli is the last village before you enter into the heart of the Karakorum. After spending your first night in the camp under the starry canvas, The first walking day of Gasherbrum i Expedition will start from Askole. You will be walking towards Braldu, gorge and to the snout of the Baltoro glacier, which we then follow to Concordia. You will walk from Concordia to Gasherbrum base camp. Non guided climbing session of Gasherbrum i Expedition will begin from here onwards. Our staff will stay at the base camp through out the climbing duration. Our chefs will make delicious and nutritious food through out the trip. We strongly believe that the nutritious food plays a vital role in alpine sports. After the Climbing session of the Expedition, you can follow the same Itinerary Back to Islamabad. return trip is also possible by crossing Gondogoro La to Hushe Valley then to Skardu. From Skardu, you will take the flight to Islamabad. After spending one night in Islamabad, you will be Transfer to Islamabad International Airport for your flight back home.</p>
                        </div>
                        <div className="col-md-6 side-images mt-4">
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrum3.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrum2.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrum1.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrum.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <FsLightbox
                                toggler={aboutToggler}
                                sources={[
                                    require("../../../assets/img/expeditions/gasherbrumII3.jpg"),
                                    require("../../../assets/img/expeditions/gasherbrumII2.jpg"),
                                    require("../../../assets/img/expeditions/gasherbrumII1.jpg"),
                                    require("../../../assets/img/expeditions/gasherbrumII4.jpg")
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
                        <div className="col-md-6 mb-3">
                            <img src={require("../../../assets/img/expeditions/gasherbrum6.jpg")} alt=""
                                style={{ borderRadius: "5px" }}  onClick={() => changePlainsToggler(!plainsToggler)}/>
                        </div>
                        <div className="col-md-6 mb-5">
                            <img src={require("../../../assets/img/expeditions/gasherbrum4.jpeg")} alt=""
                                style={{ borderRadius: "5px" }}  onClick={() => changePlainsToggler(!plainsToggler)}/>
                        </div>
                        
                        <FsLightbox
                                toggler={plainsToggler}
                                sources={[
                                    require("../../../assets/img/expeditions/gasherbrum6.jpg"),
                                    require("../../../assets/img/expeditions/gasherbrum4.jpeg")
                                ]}
                            />
                    </div>
                    <div className="row outline-itinerary">
                        <div className="col">
                            <div className="col">
                                <h3>Features of Gasherbrum I</h3>
                                
                                <h6>Name :<p className="pl-4 "> Hidden Peak, K5</p></h6>
                                <h6>Elevation :<p className="pl-3">8068-m(26,509 ft)</p>
                                </h6>
                                <h6>Ranked : <p className="pl-4"> Ranked 11<sup>th</sup> (3<sup>rd</sup> in Pakistan</p></h6>
                                <h6>Location :  <p className="pl-3">Karakorum-Baltoro Skardu</p>
                                </h6>
                                <h6>Latitude :<p className="pl-5">35<sup>o</sup> -43 N</p>
                                </h6>
                                <h6>Longitude : <p className="pl-4"> 76<sup>o</sup> -42 E</p>
                                </h6>
                                <h6>BC Height : <p className="pl-4">5000-M</p>
                                </h6>
                                <h6>First Ascent :<p>July 5, 1958 by an Amircan Tea</p></h6>                    
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default Gasherbrum_I;
