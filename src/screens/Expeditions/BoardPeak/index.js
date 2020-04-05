import React,{useState} from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function BoardPeak() {

    
    const [headToggler, changeHeadToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>The Broad Peak</h2>
                            <p>The name Broad Peak itself narrates the splendor dimension of the peak that has three summates. In the local language people know it as Faichan Kangri. It is the fourth highest peak of Pakistan. In 1954, the West German climber Dr.Karl M. Herligkoffer tried to climb it but he could not succeed. However in 1957 an Austrian Expedition reached the top of Broad Peak. Marcus Schmuck, Fritz Wintersteller, Kurt Diemberger and Hermann Buhl were the climbers to make the first ascent.
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Mountain Range: <h4>Himalaya</h4></span>
                                <span>Max Altitude: <h4>8,051 m</h4></span>
                                <span>Best time: <h4>All Seasons</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row side-images">
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/bp1.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/bp2.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/bp.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <FsLightbox
                            toggler={headToggler}
                            sources={[
                                require("../../../assets/img/expeditions/bp1.jpg"),
                                require("../../../assets/img/expeditions/bp2.jpg"),
                                require("../../../assets/img/expeditions/bp.jpg")
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>About Broad Peak</h3>
                            <p>Broad Peak is one of the world’s top mountaineering journeys. An ultimate adventure journey to scale the mighty Broad peak is mentally and physically demanding which requires very high level of climbing and mountaineering skills. Previous climbing experience of 6,800 meter high mountains are helpful to achieve the summit aspirations. To stand at the pinnacle of the wold’s 12th highest mountain, Broad Peak is one of the life’s rewarding experiences.

Broad Peak’s local name is ‘Falchan Kangri’. It is named for the immense bulk and because of its breadth at the top. It has a strong presence in its environs neighbouring K2. Broad Peak is one of the 8,000 meter peaks which towers above Concordia at the heart of the Karakoram mountain range dominating the entire scenario ahead of Baltoro Glacier.

Since 40 Years, Trango adventure has been organising Broad Peak Expedition for mountaineering enthusiasts from around the world, making us one of the oldest and most experience local company. Trango Adventures operate a 62 days long expedition to Broad Peak. We offer full board services until Base camp. The duration may be longer or shorter depending on the clients experience and ability.

Our Broad Peak Expedition travel itinerary starts from Islamabad. Our representative will meet and greet you at Islamabad international Airport then transfer you to the hotel, rest of the day in Islamabad is to recover from the journey. We will meet again in the afternoon for a briefing about Broad Peak Expedition. Night stay in Islamabad then next day you will catch the spectacular 45 minutes long mountains view flights to Skardu. On route you will have the first glimpse of Nanga Parbat, K2 and other stunning Himalayan & Karakoram Mountain Peaks. From Skardu airport to your hotel is around 40 minus drive. After checking in to your Hotel, rest of the day is for preparation for the Expedition. Skardu is the Capital of Baltistan and it is the getaway to the mighty K2, Deosai, Masherbrum, Gasherbrums and many other wold famous Karakoram Peaks. In Skardu, Trekkers and climber usually do their Finale purchasing and top ups for their journeys. Following day you will drive along the mighty Indus, Shigar and Braldu River to reach Askoli. Askoli is the last village before you enter into the wilderness of Karakoram mountains. In Askoli you will sleep in the tent for the first time. After spending your first night in the camp under the starry canvas, your first waking day of  Expedition will begin from Askole. Over the next few days, you will be walking towards Braldu, gorge and to the snout of the Baltoro glacier, which you then follow to Concordia and to the Base Camp of Broad Peak. Our staff will camp at the Base Camp of Broad Peak for the Whole climbing period of your broad peak expedition. Our mountain guide, Chef and other staff will stay with you for the entire time. After the Climbing Period of Broad Peak Expedition, you will follow the same Itinerary Back to Islamabad. After spending one night in Islamaabd, You will be Transfer to Islamabad International Airport for your flight back home. Your “Broad Peak Expedition” trip will conclude here in Islamabad.

We strongly believe that our four decades of Experience and the local knowledge will make your “Broad Peak Expedition” successful.</p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col">
                            <img src={require("../../../assets/img/expeditions/bp3.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </Styles>
    );
}

export default BoardPeak;
