import React from 'react';
import Styles from './styles';
import Models from '../../Common/Models';
import FsLightbox from 'fslightbox-react';

class ToursAndTravels extends React.Component {

    state = {
        operationSectionToggler: true,
        serviceToggler:true
    }

    render() {
        const { operationSectionToggler, serviceToggler} = this.state;
        return (
            <Styles>
                <div>
                    <section>
                        <div className="container oil-gas-section pb-5">
                            <div className="row ">
                                <div className="container">
                                    <div className="col-md-12 content-box mt-5">
                                        <div className="text">
                                            <h1 className="title">Tours and Travels</h1>
                                            <p className="pl-3">At Pakistan travel & Tours, our personalized tour plans are designed for
                                                relaxation, to
                                rejuvenate your energy and to <br />send your precious time with your loved ones in a remember-able way.
                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* *******__First Section with Carousal__******** */}
                    <section id="head-section">
                        <div className="container pb-3">
                            <div id="carouselExampleIndicators" className="carousel slide carousel-fade img" data-ride="carousel">

                                <ol className="carousel-indicators justify-content-start">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                </ol>
                                <div className="rgba"></div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require("../../assets/img/toursandtravels/toursandtravels5.jpg")} className=" slided-block w-100 "
                                            alt="Second slide" />
                                    </div>
                                    <div className="carousel-item bg-success ">
                                        <img src={require("../../assets/img/toursandtravels/toursandtravels6.jpg")} className=" slided-block w-100"
                                            alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/toursandtravels/toursandtravels7.jpg")} style={{ objectFit: "contain" }}
                                            className=" slided-block w-100" alt="Fourth slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/toursandtravels/toursandtravels4.jpeg")} className=" slided-block w-100"
                                            alt="Sixth  slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/toursandtravels/toursandtravels10.jpg")} className=" slided-block w-100"
                                            alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/shigir.jpg")} className=" slided-block w-100" alt="seveth  slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/astore.jpg")} className=" slided-block w-100" alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../assets/img/diammer.png")} className=" slided-block w-100" alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </section>


                    <section id="operation-section" className="mt-5">
                        <div className="container pt-5 pb-5">
                            <div className="row p-3">
                                <div className="col-md-6 sec-text">

                                    <h2>Operation & Maintenance</h2>
                                    <p className="operation-para">UTS Service department is capable of carrying operation & maintenance
                                        Of desalination & sewage treatment plants .UTS has well qualified and trained engineers
                                        &technicians to attend the O&M jobs without any delay .
                                        UTS has entered into long-term operation & maintenance contracts with some of prestigious
                                        clients in the region like ADMA-OPCO, TOTAL,NPCC,
                                        ADCO NDC, etc. Especially in the field of desalination .The service
                                        Division has a very successful track record for the last 20 years.
                                    </p>
                                </div>

                                <div className="col-md-6 pt-5">
                                    <img src={require("../../assets/img/toursandtravels/toursandtravels7.jpg")} alt=""
                                        style={{ width: "90%", height: "300px" }} className="text-center" onClick={() => this.setState({ operationSectionToggler: !operationSectionToggler })} />
                                    <FsLightbox
                                        toggler={operationSectionToggler}
                                        sources={[
                                            require("../../assets/img/toursandtravels/toursandtravels7.jpg"),
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row p-3 pb-5">
                                <div className="col-md-6 mt-5">
                                    <img src={require("../../assets/img/toursandtravels/tourandtravel9.jpg")} alt=""
                                        style={{ width: "90%", height: "300px" }} className="text-center" onClick={() => this.setState({ serviceToggler: !serviceToggler })}/>
                                    <FsLightbox
                                        toggler={serviceToggler}
                                        sources={[
                                            require("../../assets/img/toursandtravels/tourandtravel9.jpg"),
                                        ]}
                                    />
                                </div>

                                <div className="col-md-6 sec-text pt-5">

                                    <h2>Service Contracts</h2>
                                    <p className="operation-para">UTS also engage in service contracts .The service contracts
                                        Are usually call-off basis or an annual contract as per the clients
                                        Requirement and convenience. The service contracts are carried out
                                        For a number of clients all through the Middle East. Some of the clients
                        Include Qatar Gas, Nabors, Lamprell ,ADMA ,NPCC ,TOTAL ,Emarine, Gulfa Mineral, etc.</p>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="ToursJeepExcursions">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col pb-2">
                                    <h2 className="ToursJeepExcursions-title">Tours & Jeep Excursions</h2>
                                    <p className=" pl-2">Explore more as you desire
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pb-5">
                                    <div className="content-box">
                                        <img src={require("../../assets/img/toursandtravels/historicalSilkRoad.jpg")} alt="" />
                                        <div className="inner">
                                            <h5>Explore the Historical Silk Route</h5>
                                            <p>Traveling on Silk Route, modern Karakoram Highway (KKH) is full of thrill and adventure.
                                Centuries ago...</p>
                                            <button className="btn" type="button" data-toggle="modal" data-target='#historicalSilkRoad'>READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pb-5">
                                    <div className="content-box">
                                        <img src={require("../../assets/img/toursandtravels/polo.jpg")} alt="" />
                                        <div className="inner">
                                            <h5>Jeep Excursion to see the Polo Festival</h5>
                                            <p>Although there are number of events but Polo is the most remarkable one. The highest polo
                                ground of...</p>
                                            <button className="btn" type="button" data-toggle="modal" data-target="#poloFestival">READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pb-5">
                                    <div className="content-box">
                                        <img src={require("../../assets/img/toursandtravels/hindakush.jpg")} alt="" />
                                        <div className="inner">
                                            <h5>Jeep Safari Hindukush</h5>
                                            <p>
                                                22 days, easy/moderate treks to base camps of Diran 7,266m and Nanga Parbat We use
                                    soft top 4x4 jeeps to explore...</p>
                                            <button className="btn" type="button" data-toggle="modal" data-target="#hindukush">READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pb-5">
                                    <div className="content-box">
                                        <img src={require("../../assets/img/toursandtravels/DeosaiPlains.jpg")} alt="" />
                                        <div className="inner">
                                            <h5>Jeep Excursion Deosai Plains</h5>
                                            <p>
                                                21 days, safari through the Himalayas and Karakorams. We explore the remote valleys
                                    of Himalayas and Karakoram, the two...</p>
                                            <button className="btn" type="button" data-toggle="modal" data-target="#DeosaiPlains">READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Models />
                    </section>
                </div>
            </Styles>
        )
    }
}

export default ToursAndTravels;