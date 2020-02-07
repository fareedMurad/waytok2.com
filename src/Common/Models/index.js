import React from 'react';
import Styles from './styles';

const Models = () => {


    return (
        <Styles>

            {/* modeles portion for all above cards */}

            <div className="container">
                {/* The Modal For Explore the Historical Silk Route */}
                <div className="modal fade" id="historicalSilkRoad">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            {/* Modal Header  */}
                            <div className="modal-header">
                                <h4 className="modal-title">Explore the Historical Silk Route</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/*  Modal body */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Mountain Range: <span>Karakoram / China </span></h6>
                                        <h6>Duration : <span>21 days </span></h6>
                                        <h6>Best time: <span>May - September </span></h6>
                                        <p className="mt-5">
                                            Traveling on Silk Route, modern Karakoram Highway (KKH) is full of
                                            thrill and
                                            adventure. Centuries ago trade between east and west was carried out by
                                            this
                                            route, then a caravan trail and now a black top highway.
                                            The region along Karakoram Highway portrays some of the most
                                            breath-taking
                                            sceneries on earth. The Killer Mountain Nanga Parbat (8125m), Rakaposhi
                                            (7619m),
                                            Golden Peak (7206m), Ultar Peak, Shisper Peak are the most prominent
                                            among many
                                            other mountains dominating this region.
                                            </p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={require("../../assets/img/toursandtravels/DeosaiPlains.jpg")} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                {/* The Modal For  Polo Festival */}
                <div className="modal fade" id="poloFestival">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Jeep Excursion to see the Polo Festival</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Outline Itinerary</h3>
                                        <h4>DAY PROGRAM</h4>
                                        <h6>01<span>Fly to Urumqui China - Kashgar </span></h6>
                                        <h6>02<span>Day in Kashgar </span></h6>
                                        <h6>03 <span>Tashkorgan</span></h6>
                                        <h6>04 <span>Sost</span></h6>
                                        <h6>05 <span>Drive to Gulmit</span></h6>
                                        <h6>06 <span>Drive to Gilgit</span></h6>
                                        <h6>07 <span>Drive to Gahkuch</span></h6>
                                        <h6>08 <span>Drive to Shadur</span></h6>
                                        <h6>09 <span>Day in Shandur</span></h6>
                                        <h6>10 <span>Drive to Phundarr</span></h6>
                                        <h6>11 <span>Drive to Hunza</span></h6>
                                        <h6>12 <span>Day in Hunza</span></h6>
                                        <h6>13 <span>Drive to Tashkurgan</span></h6>
                                        <h6>14 <span>Drive to Kashgar</span></h6>
                                        <h6>15 <span>Fly back home</span></h6>
                                        <p className="mt-5">
                                            Although there are number of events but Polo is the most remarkable one.
                                            The highest polo ground of Shadur Pass 3700m. is a natural border
                                            between Chitral and Gilgit. Teams of both sides are traditional rivals
                                            in the game of polo. The tournament is held during the second week of
                                            July every year. Folk dance and folk music are other attractions of the
                                            festival.
                                            </p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={require("../../assets/img/toursandtravels/polo.jpg")} alt=""
                                            style={{ height: "750px" }} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                {/* The Modal For  Jeep Safari Hindukush */}
                <div className="modal fade" id="hindukush">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title">Jeep Safari Hindukush</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div className="modal-body">
                                <div className="col">
                                    <h3>Outline Itinerary</h3>
                                    <h4 className="pb-2">DAY PROGRAM <span className="float-right stay">STAY</span></h4>
                                    <h6>01<span>Fly to Urumqui China - Kashgar </span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>02<span>Day in Kashgar </span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>03 <span>Tashkorgan</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>04 <span>Sost</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>05 <span>Drive to Gulmit</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>06 <span>Drive to Gilgit</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>07 <span>Drive to Gahkuch</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>08 <span>Drive to Shadur</span><span className="stay float-right">Camp 1</span>
                                    </h6>
                                    <h6>09 <span>Day in Shandur</span><span className="stay float-right">Camp 2</span>
                                    </h6>
                                    <h6>10 <span>Drive to Mastuj</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>11 <span>Dir - Chitral</span><span className="stay float-right">Camp 3</span>
                                    </h6>
                                    <h6>12 <span>Birir (Kalash)</span><span className="stay float-right">Camp 4</span>
                                    </h6>
                                    <h6>13 <span>Trek - Bomburet</span><span className="stay float-right">Camp 5</span>
                                    </h6>
                                    <h6>14 <span>Mastuj</span><span className="stay float-right">camp 6</span></h6>
                                    <h6>15 <span>Phander</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>16 <span>Drive to Hunza</span><span className="stay float-right">Camp 7</span>
                                    </h6>
                                    <h6>17 <span>Day in Hunza</span><span className="stay float-right">Camp 8</span>
                                    </h6>
                                    <h6>18 <span>Drive - Minapina</span><span
                                        className="stay float-right">Hotel</span>Camp 9</h6>
                                    <h6>19 <span>Trek - Tagafuri.</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>20 <span>excursions Base Camp</span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>21 <span>Minapin - Hunza</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>22 <span>Hunza Karimabad</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>23 <span>Passu</span><span className="stay float-right">Lodge</span></h6>
                                    <h6>24 <span>Drive to Tashkurgan</span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>25 <span>Drive to Kashgar</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>15 <span>Fly back home</span><span className="stay float-right">Flight</span>
                                    </h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mt-5">
                                            Although there are number of events but Polo is the most remarkable one.
                                            The highest polo ground of Shadur Pass 3700m. is a natural border
                                            between Chitral and Gilgit. Teams of both sides are traditional rivals
                                            in the game of polo. The tournament is held during the second week of
                                            July every year. Folk dance and folk music are other attractions of the
                                            festival.
                                            handur Polo Festival (Urdu: شندور میلہ) is one of the big festivals in
                                            Pakistan. This festival is held from 7 to 9 July every year on Shandur
                                            Pass in Chitral District of Khyber PakhtunkhwaThe polo match is played
                                            between the teams of Chitral District and districts of Gilgit-Baltistan,
                                            is a free style game.
                                            </p>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <img src={require("../../assets/img/toursandtravels/polo.jpg")} alt=""
                                            style={{ borderRadius: "5px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* The Modal For  Jeep Safari Hindukush */}
                <div className="modal fade" id="DeosaiPlains">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title">Jeep Excursion Deosai Plains</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div className="modal-body">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p >

                                                21 days, safari through the Himalayas and Karakorams. We explore the
                                                remote valleys of Himalayas and Karakoram, the two highest mountain
                                                ranges of the world. Explore the area of Gilgit and Baltistan and enjoy
                                                the walk and atmosphere on the world's highest plateau, the Deosai
                                                Plains.
                                                (JULY TO SEPTEMBER)
                                                Deosai is accessible from Skardu District in the north, Galtari Kharmang District in the south-east and the Astore District in the west. Deosai is located approximately 30 km from Skardu city and it is the shortest route to visit Deosai. Most foreigners visit Deosai via Skardu. It takes one hour to reach Deosai top via Sadpara Skardu. Another route is from Astore valley via Chilim. It is also accessible from Shila valley. The people of Galtari travel via Deosai. While it is a National Park, the Gujjar-Bakwarwal travel large distances to utilize the Deosai National Park as grazing lands[4]. There is another route called Burgi la via Tsoq Kachura valley Skardu
                                                </p>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={require("../../assets/img/toursandtravels/DeosaiPlains.jpg")} alt=""
                                                style={{ borderRadius: "5px" }} />
                                        </div>
                                    </div>
                                    <h3>Outline Itinerary</h3>
                                    <h4 className="pb-2">DAY PROGRAM <span className="float-right stay">STAY</span></h4>
                                    <h6>01<span>Fly to Urumqui China - Kashgar </span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>02<span>Day in Kashgar </span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>03 <span>Tashkorgan</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>04 <span>Sost</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>05 <span>Drive to Gulmit</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>06 <span>Drive to Gilgit</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>07 <span>Drive to Gahkuch</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>08 <span>Drive to Shadur</span><span className="stay float-right">Camp 1</span>
                                    </h6>
                                    <h6>09 <span>Day in Shandur</span><span className="stay float-right">Camp 2</span>
                                    </h6>
                                    <h6>10 <span>Drive to Mastuj</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>11 <span>Dir - Chitral</span><span className="stay float-right">Camp 3</span>
                                    </h6>
                                    <h6>12 <span>Birir (Kalash)</span><span className="stay float-right">Camp 4</span>
                                    </h6>
                                    <h6>13 <span>Trek - Bomburet</span><span className="stay float-right">Camp 5</span>
                                    </h6>
                                    <h6>14 <span>Mastuj</span><span className="stay float-right">camp 6</span></h6>
                                    <h6>15 <span>Phander</span><span className="stay float-right">Hotel</span></h6>
                                    <h6>16 <span>Drive to Hunza</span><span className="stay float-right">Camp 7</span>
                                    </h6>
                                    <h6>17 <span>Day in Hunza</span><span className="stay float-right">Camp 8</span>
                                    </h6>
                                    <h6>18 <span>Drive - Minapina</span><span
                                        className="stay float-right">Hotel</span>Camp 9</h6>
                                    <h6>19 <span>Trek - Tagafuri.</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>20 <span>excursions Base Camp</span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>21 <span>Minapin - Hunza</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>22 <span>Hunza Karimabad</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>23 <span>Passu</span><span className="stay float-right">Lodge</span></h6>
                                    <h6>24 <span>Drive to Tashkurgan</span><span
                                        className="stay float-right">Hotel</span></h6>
                                    <h6>25 <span>Drive to Kashgar</span><span className="stay float-right">Hotel</span>
                                    </h6>
                                    <h6>15 <span>Fly back home</span><span className="stay float-right">Flight</span>
                                    </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Models;