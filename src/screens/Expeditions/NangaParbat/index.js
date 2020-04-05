import React,{useState} from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function NangaParbat() {

    
    const [headToggler, changeHeadToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>Nanga Parbat</h2>
                            <p>Nanga Parbat is the ninth highest mountain in the world and the second highest in Pakistan after K2. It is Located in Diamir district of Gilgit Baltistan, Pakistan. Nanga Parbat is the western anchor of the Himalaya. It is separated from the Karakoram range by the mighty Indus River. It rises directly from the Indus valley.
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Mountain Range: <h4>Himalaya</h4></span>
                                <span>Max Altitude: <h4>8125 m</h4></span>
                                <span>Duration : <h4>55 days</h4></span>
                                <span>Best time: <h4>All Seasons</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row side-images">
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/np2.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/np3.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/np4.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <FsLightbox
                            toggler={headToggler}
                            sources={[
                                require("../../../assets/img/expeditions/np2.jpg"),
                                require("../../../assets/img/expeditions/np3.jpg"),
                                require("../../../assets/img/expeditions/np4.jpg")
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>About Nanga Parbat</h3>
                            <p>Our Nanga Parbat journey starts from Islamabad. Our representative will meet and greet you at the Islamabad International Airport, then transfer you to the hotel for a rest. We will meet in the afternoon for a briefing about the Nanga Parbat Expedition. After a good night sleep in Islamabad, today you will head towards Chillas Town via Karakoram Highway. Night stay in Chillas then driving and Trekking for 2-3 hours among quiet richly wooded scenery, winding up along the side of some kind of gorge, with nothing very big to look at, just lush, leafy, Region of steep hillsides and waterfalls, suddenly you will come round a corner where the view opens up the valley, and you are almost struck senseless by the blinding splendour of that vast face of ice-hung precipices and soaring ridges, sixteen thousand feet from top to toe, filling a whole quarter of the heavens at a distance of only a dozen miles. That is Nanga Parbat. the most Beautiful and challenging mountain on earth.

                            Since the first disastrous British Nanga Parbat expedition led by A. F. Mummery in 1895, mountaineers have tried to ascend its summit through different routes but few lucky ones have succeeded. Nanga Parbat is not a single peak but consists of 20km long series of peaks and ridges culminating in an ice crest of (8,125m). Its South Face known as Rupal Face is (5,000m) high, while the North or Raikot Face plunging over (7,000m) from the summit to the Indus forms one of the world’s deepest gorge. It was first climbed in 1953 by a joint Austrian – German Expedition. Hermann Buhl made the final ascent in a tortuous 41 hours solo ordeal without oxygen. Italian mountaineer Reinhold Messner climbed the south face (Rupal Face) with his brother Gunther in 1970, descending by the Diamir face. The south face is the largest in the world extending over four kilometers above base camp. To date there have only been five ascents from the south.

                            Nanga Parbat’s isolation means that all ascents must start from a much lower altitude than other 8,000m peaks. The Polish climber Jerzy Kukuczka described it as the only mountain which is climbed through all four seasons, from baking summer at its base to minus 40º at the summit. Most attempts nowadays are via the Westerly Diamir face which is generally considered to be the easiest and safest with the Kinshofer Route the normal route. It was successfully climbed in winter on February 2016, by a team consisting of our friend Ali Sadpara, Alex Txikon, and Simone Moro. The second winter ascent was made by Polish Climber Tomasz Mackiewicz and French woman Elisabeth Revol on January 2018.Nangan</p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col">
                            <img src={require("../../../assets/img/expeditions/np.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </Styles>
    );
}

export default NangaParbat;
