import React,{useState} from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

const TourMagzine = () => {
    
    const [toggler, setToggler] = useState(false);
    return (
        <Styles>
            <div>
                <div className="head-section pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className='text-success'>Tours & Travel Magzine</h1>
                                <p className="pl-2">The Travel Magazine is a travel portal with highly informative, upbeat and inspirational information from  the world for the people who love Tours and Travel.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={require('../../assets/icons/pak.png')} style={{ width: '90%', height: '12rem' }} alt="" onClick={() => setToggler(!toggler)}/>
                                <FsLightbox
                                    toggler={toggler}
                                    sources={[
                                        require('../../assets/icons/pak.png'),
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posts-section pb-5">
                    <div className="container ">
                        <div className="card mb-5" style={{ backgroundColor: '#F5F9FF' }}>
                            <div className="card-header bg-success text-light ">
                                <h3 className="card-title">US business magazine declares Pakistan as the best travel destination</h3>
                            </div>
                            <div className="description-wrapper p-5">
                                <p className="card-text">Wild Frontiers labels Pakistan as next big destination due to much-publicised recent visit of British royal couple. Pakistan has again been declared as the best travel destination of the current year. Yet another feat may eventually culminate in heralding big news for the tourism sector, spanning over the next decade — 2020s.
                            A recent article in an American business magazine Forbes has enlisted Pakistan in its ‘The Not Hot List: 10 Best Under-the-Radar Trips for 2020.’ Last year, the country’s tourism potential was also recognized by some global players of the tourism industry which included Condé Nast magazine, the Wanderlust travel magazine and others, setting a stage for the government to unlock its inbound tourism potential.</p>
                            </div>
                        </div>
                        <div className="card mb-5" style={{ backgroundColor: '#F5F9FF' }}>
                            <div className="card-header bg-success text-light ">
                                <h3 className="card-title">British Backpackers Society says Pakistan is the most exicting destination right now</h3>
                            </div>
                            <div className="description-wrapper p-5">
                                <p className="card-text">its time to visit Pakistan as the country is now amongst the top destionations with low cost tourism.

                                British Backpackers Society (BBS) earlier this week has declared Pakistan as the world’s third highest potential adventure destination for the 2020. “After counting the votes from its membership of adventure travel experts from around the world, the BBS is delighted to announce that Pakistan has been awarded the third place in the ranking,” said a statement issued by the BBS.

                                Talking to APP, Samuel Joynson of the BBS said that Pakistan is a travel gem and is one of the world’s most exciting travel destinations right now.</p>
                            </div>
                        </div>
                        <div className="card mb-5" style={{ backgroundColor: '#F5F9FF' }}>
                            <div className="card-header bg-success text-light ">
                                <h3 className="card-title">British FCO lift its advice against travel </h3>
                            </div>
                            <div className="description-wrapper p-5">
                                <p className="card-text">“A focus on security measures, which saw the British FCO lift its advice against travel to large parts of the north, and the election of Imran Khan, who has vowed to increase international tourist numbers, has already had an impact,” he says.</p>
                            </div>
                        </div>
                        <div className="card mb-4" style={{ backgroundColor: '#F5F9FF' }}>
                            <div className="card-header bg-success text-light ">
                                <h3 className="card-title">US business magazine declares Pakistan as the best travel destination</h3>
                            </div>
                            <div className="description-wrapper p-5">
                                <p className="card-text">Wild Frontiers labels Pakistan as next big destination due to much-publicised recent visit of British royal couple. Pakistan has again been declared as the best travel destination of the current year. Yet another feat may eventually culminate in heralding big news for the tourism sector, spanning over the next decade — 2020s.
                            A recent article in an American business magazine Forbes has enlisted Pakistan in its ‘The Not Hot List: 10 Best Under-the-Radar Trips for 2020.’ Last year, the country’s tourism potential was also recognized by some global players of the tourism industry which included Condé Nast magazine, the Wanderlust travel magazine and others, setting a stage for the government to unlock its inbound tourism potential.</p>
                            </div>
                        </div>
                        <button className="btn btn-success pl-5 pr-5">See more</button>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default TourMagzine;
{/* <h1 className="m-5 p-5">US business magazine declares Pakistan as the best travel destination</h1> */ }