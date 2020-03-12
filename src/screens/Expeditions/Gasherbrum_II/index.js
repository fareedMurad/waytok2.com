import React, { useState } from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function Gasherbrum_II() {

    
    const [aboutToggler, changeAboutToggler,] = useState(false);
    const [plainsToggler, changePlainsToggler,] = useState(false);

    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>The Gasharbrum II</h2>
                            <p>Gasherbrum II; surveyed as K4, is the 13th highest mountain in the world at 8,035 metres above sea level. It is the third-highest peak of the Gasherbrum massif, and is located in the Karakoram, on the border between Gilgit–Baltistan, Pakistan, and Xinjiang, China.
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Elivation: <h4>8,035 m (26,362 ft); Ranked 13th</h4></span><br />
                                <span>Location : <h4>Gilgit–Baltistan, Pakistan</h4></span><br />
                                <span>Parent ranges: <h4>Gasherbrum, Himalayas, Karakoram, Baltoro Muztagh</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col k2-img">
                            <img src={require("../../../assets/img/expeditions/gasherbrumII.jpg")} alt="K2" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>About Gasherbrum II</h3>
                            <p>Gasherbrum II Expedition takes you into the Heart of the Karakoram mountain range of Gilgit-Baltistan, Pakistan. Gasherbrum II is the 13th highest mountain in the world at 8,035 metres above sea level. Gasherbrums I & II Mountains stand next to each other, they have the common base camp and the higher camps until camp II. Mountaineers have an option to attempt both Peaks by paying additional royalty fee. Gasherbrum II Expedition is not too hard so it is a perfect mountaineering experience for the Himalaya beginners.

                            Since 40 years ,we have been organising Gasherbrum II Expedition for Mountaineering enthusiasts from around the World. Trango Adventures operates a 62 days long Expedition to Gasherbrum. We offer both, full board or Base camp logistic services. The duration may be longer or shorter depending on the clients experience and ability.

                            Our Gasherbrum II Expedition starts from Islamabad. Our Representative will meet and greet you at Islamabad international Airport then transfer you to the hotel. We will meet again in the afternoon for a briefing about the Gasherbrum II Expedition. Next day you will catch the spectacular mountains view flights to Skardu, Baltistan. On route you will have the first glimpse of the great Nanga Parbat, K2 and the other stunning Himalayan & Karakoram Mountain Peaks. After checking in to your Hotel, rest of the day is for preparation in Skardu. Skardu is the Capital of Baltistan and it is the getaway to the Mighty K2, Deosai Plato, Masherbrum, Gasherbrum and many other famous Karakoram Peaks. In Skardu, Trekkers and climber usually do their Finale purchasing for their journey. Following day you will drive along the Mighty Indus, Shigar then Braldu River to reach Askoli. Askoli is the last village before you enter into the heart of the Karakorum. After spending your first night in the camp under the starry canvas, walking part of Gasherbrum II Expedition will start. You will be walking towards Braldu, gorge and to the snout of the Baltoro glacier, which you then follow to Concordia. Gasherbrum I & II base camps are 5-6 hour walk from Concordia, the junction point of Godwin Austen glacier with Baltoro glacier. Base camp of Gasherbrum mountain lies directly below the Conway Saddle, which was the first route, used to reach the major Karakoram peaks. Your Climbing session of Gasherbrum II Expedition will start from here onwards. We will camp at the Base Camp of the Mighty Gasherbrum Mountain during your Climbing Duration. Our mountain guide, Chef and other staff will stay with you for the entire time. After the Climbing Period, you will follow the same Itinerary Back to Islamabad. (Optional) return trip could be possible over the 6,000 meter Gondogoro La and the beautifully green Hushe Valley from which you return to Skardu. After spending one night in Islamabad, you will be Transfer to Islamabad International Airport for your flight back home.

                            We strongly believe that, our four decades of expertise and our experience staff can run your “Gasherbrum II Expedition” successfully</p>
                        </div>
                        <div className="col-md-6 side-images mt-4">
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrumII3.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrumII2.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrumII1.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
                            </div>
                            <div className="col">
                                <img src={require("../../../assets/img/expeditions/gasherbrumII4.jpg")} alt="" onClick={() => changeAboutToggler(!aboutToggler)}/>
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
                            <img src={require("../../../assets/img/expeditions/gasherbrumII5.jpg")} alt=""
                                style={{ borderRadius: "5px" }} onClick={() => changePlainsToggler(!plainsToggler)}/>
                        </div>
                        <div className="col-md-6 mb-5">
                            <img src={require("../../../assets/img/expeditions/gasherbrumII6.jpg")} alt=""
                                style={{ borderRadius: "5px" }} onClick={() => changePlainsToggler(!plainsToggler)}/>
                        </div>
                        <FsLightbox
                                toggler={plainsToggler}
                                sources={[
                                    require("../../../assets/img/expeditions/gasherbrumII5.jpg"),
                                    require("../../../assets/img/expeditions/gasherbrumII6.jpg")
                                ]}
                            />
                    </div>
                    
                </div>
            </section>
        </Styles>
    );
}

export default Gasherbrum_II;
