import React,{useState} from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function KhunjerabTop() {

    const [headToggler, changeHeadToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>The Khunjerab Top </h2>
                            <p>The Khunjerab Pass is the highest-paved international border crossing in the world and the highest point on the Karakoram Highway. The roadway across the pass was completed in 1982, and has superseded the unpaved Mintaka and Kilik Passes as the primary passage across the Karakoram Range. The choice of Khunjerab Pass for Karakoram Highway was decided in 1966: China citing the fact that Mintaka would be more susceptible to air strikes recommended the steeper Khunjerab Pass instead
                            </p>
                            <div className="k2-intro mt-2">
                                <span>Mountain Range: <h4>Karakoram Range</h4></span>
                                <span>Elevation: <h4>4,693 m (15,397 ft)</h4></span><br/>
                                <span>Best time: <h4>All Seasons</h4></span><br />
                                <span>Location: <h4>Hunza Pakistan - administered Gilgit–Baltistan / Xinjiang, China</h4></span>
                            </div>
                        </div>
                    </div>
                    <div className="row side-images">
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/khunjerab3.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/khunjerab1.png")} alt="" onClick={() => changeHeadToggler(!headToggler)}/>
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../../assets/img/expeditions/khunjerab4.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        
                        <FsLightbox
                            toggler={headToggler}
                            sources={[
                                require("../../../assets/img/expeditions/khunjerab3.jpg"),
                                require("../../../assets/img/expeditions/khunjerab1.png"),
                                require("../../../assets/img/expeditions/khunjerab4.jpg"),
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="about-k2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>About Khunjerab Top</h3>
                            <p>Khunjerab Pass 4733 ,meter (sometimes called Khunerjab Pass) is a high mountain pass on the northern border of Pakistan with China, at an elevation of 4.733m (15,528ft) above the sea level. The Khunjerab Pass is the highest border-crossing in the world and the highest point on the Karakoram Highway.Khunjerab Pass is located in the Karakoram Mountains in a strategic position on the northern border of Pakistan's Gilgit–Baltistan Hunza-Nagar District on the southwest border of the Xinjiang region of China. For comparison, Mont Blanc, the tallest mountain in Western Europe, is 4.810 m and Mount Whitney, the highest point in the 48 contiguous United States, is 4.421m. This section of the road was completed in 1982 and is possibly the highest metalled border crossing in the world. The road to the summit is asphalted.</p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col">
                            <img src={require("../../../assets/img/expeditions/khunjerab2.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </Styles>
    );
}

export default KhunjerabTop;
