import React, { useState } from 'react';
import Styles from './styles';
import FsLightbox from 'fslightbox-react';

function Trekking() {

    const [headToggler, changeHeadToggler,] = useState(false);
    const [darkotToggler, changeDarkotToggler,] = useState(false);
    const [shimshalToggler, changeShimshalToggler,] = useState(false);
    const [grandToggler, changeGrandToggler,] = useState(false);
    const [baturaToggler, changeBaturaToggler,] = useState(false);
    const [gondogoroToggler, changeGondogoroToggler,] = useState(false);
    const [rushpuriToggler, changeRushpuriToggler,] = useState(false);
    const [patundasToggler, changePatundasToggler,] = useState(false);
    return (
        <Styles>
            <section className="head-section pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col k2-head-box">
                            <h2>Trekking </h2>
                            <p>
                                Pakistan’s northern areas is home world’s three great mountain ranges. These include the incredible Karakoram, the grand Himalayas and last but not the least the amazing Hindukush. The rich natural environment is made of mountains, glaciers, rivers, streams, lakes and pastures etc. The rugged and yet beautiful landscape of northern areas makes it a perfect destination for trekking in Pakistan.
                            </p>
                        </div>
                    </div>
                    <div className="row side-images">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/gondogoro1.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/patundas2.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/karakorum4.jpg")} alt="" onClick={() => changeHeadToggler(!headToggler)} />
                        </div>
                        <FsLightbox
                            toggler={headToggler}
                            sources={[
                                require("../../assets/img/treking/gondogoro1.jpg"),
                                require("../../assets/img/treking/patundas2.jpg"),
                                require("../../assets/img/treking/karakorum4.jpg"),
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="common-styles pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>The Darkot Pass Trek</h3>
                            <p>Unspoiled campsites – Two remote pass crossings- the bustling bazaar towns of Chitral and Gilgit

                            Lying close to Pakistan’s border with Afghanistan and forming a natural divide between the Hindu Kush and Hindu Raj ranges, the Yarkhun Valley has been accessible to outside visitors only since the early 1990’s. From the historically fascinating outpost of Chitral, our itinerary follows this impressive valley as far as the Boroghil Pass, formerly an important trade route into Afghanistan. Our route then turns eastwards to cross the snow-covered, but straightforward Darkot and Ishkuman passes before descending to Gilgit in the Hunza Valley. From each of these high passes (c. 4600m.), there are magnificent views towards the mountains of the central Karakoram. Offering a diversity of unspoiled landscape and an interesting mix of cultures, this is exploratory travel at its best, where the people we meet are as curious about us as we are about them.
                        </p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/darkot5.jpg")} alt="" onClick={() => changeDarkotToggler(!darkotToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/darkot4.jpg")} alt="" onClick={() => changeDarkotToggler(!darkotToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/darkot3.jpg")} alt="" onClick={() => changeDarkotToggler(!darkotToggler)} />
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/darkot2.jpg")} alt="" onClick={() => changeDarkotToggler(!darkotToggler)} />
                        </div>
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/darkot1.jpg")} alt="" onClick={() => changeDarkotToggler(!darkotToggler)} />
                        </div>
                    </div>
                    <FsLightbox
                        toggler={darkotToggler}
                        sources={[
                            // require("../../assets/img/treking/darkot5.jpg"),
                            require("../../assets/img/treking/darkot3.jpg"),
                            require("../../assets/img/treking/darkot2.jpg"),
                            require("../../assets/img/treking/darkot1.jpg"),
                        ]}
                    />
                </div>
            </section>
            <section className="common-styles pb-5" style={{ backgroundColor: '#F5F9FF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Shimshal Round Trek</h3>
                            <p>Shimshal Pass (4,735m) rises above the village. It lies on the watershed between the Indus River and Tarim River basins, and leads to the valley of the Shimshal Braldu River, a tributary of the Shaksgam River on the border with China. The pass is not part of Khunjerab National Park, but the Shimshal community has set an organization called SNT (Shimshal Nature Trust) which overlooks the entire region and takes care of its own land. It is a community based organization and is registered with the Government of
                        </p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/shimshal5.jpg")} alt="" onClick={() => changeShimshalToggler(!shimshalToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/shimshal4.jpg")} alt="" onClick={() => changeShimshalToggler(!shimshalToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/shimshal1.jpg")} alt="" onClick={() => changeShimshalToggler(!shimshalToggler)} />
                        </div>
                        <FsLightbox
                            toggler={shimshalToggler}
                            sources={[
                                // require("../../assets/img/treking/darkot5.jpg"),
                                require("../../assets/img/treking/shimshal5.jpg"),
                                require("../../assets/img/treking/shimshal4.jpg"),
                                require("../../assets/img/treking/shimshal1.jpg"),
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="common-styles pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Grand Exploration of Karakorum</h3>
                            <p>The Karakoram Grand Traverse covers Ghondogoro La, Concordia, K2 base camp, Baltoro Glacier, Biafo and Hispar Glaciers .It is is by far one of the most rewarding glacial traverses in the Karakoram. Outside the Polar Regions, this glacier system is the longest covering over 140 kilometers of Glacier. Biafo Glacier (37 miles long) and Hispar Glacier (38 miles long) meet at the 5151 m. Hispar Pass to form one of the longest glacial systems outside the Polar Regions.  This highway of ice connects two ancient mountain kingdoms: Hunza in the west with Shigar Baltistan in the east.
                        </p>
                        </div>
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/karakorum2.jpg")} alt="" height="370px" width="100%" onClick={() => changeGrandToggler(!grandToggler)} />
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/karakorum5.jpg")} alt="" onClick={() => changeGrandToggler(!grandToggler)} />
                        </div>
                        <div className="col-md-8">
                            <img src={require("../../assets/img/treking/karakorum4.jpg")} alt="" onClick={() => changeGrandToggler(!grandToggler)} />
                        </div>
                    </div>
                    <FsLightbox
                        toggler={grandToggler}
                        sources={[
                            require("../../assets/img/treking/karakorum2.jpg"),
                            require("../../assets/img/treking/karakorum5.jpg"),
                            require("../../assets/img/treking/karakorum4.jpg"),
                        ]}
                    />
                </div>
            </section>

            <section className="common-styles pb-5" style={{ backgroundColor: '#F5F9FF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Trek to Batura Passu</h3>
                            <p>
                                The Batura trek is the most accessible of giant Karakorum Glaciers from Karakorum Highway. It stretches west about 65km with more than 10 peaks above 7000m. This trek is an easy stroll along a flower-filled gully between the lateral moraine of the Batura Glacier and the mountains. It is one of the finest in the Karakorum with beautiful landscape and no major difficulties. Most of the trek is through ablation valley along streams, with almost no steep sections. The mountain views of Batura, Passu and Shispare Peak superb. The Passu women who spend the summer in the pastureland beside the glacier are friendly to female trekkers. Spending time with Passu people and their yaks in the pasture allows a glimpse into their unique way of mountain life. The views of six Batura Peaks and the huge ice-fall from them to the glacier below are among the more remarkable mountain scenes in the Karakorum.
                            </p>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/batura1.jpg")} alt="" onClick={() => changeBaturaToggler(!baturaToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/batura3.jpg")} alt="" onClick={() => changeBaturaToggler(!baturaToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/batura4.jpg")} alt="" onClick={() => changeBaturaToggler(!baturaToggler)} />
                        </div>
                        <FsLightbox
                            toggler={baturaToggler}
                            sources={[
                                require("../../assets/img/treking/batura1.jpg"),
                                require("../../assets/img/treking/batura3.jpg"),
                                require("../../assets/img/treking/batura4.jpg"),
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="common-styles" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>K2 and Gondogoro La Pass Trek</h3>
                            <p>K2 and Gondogoro La trek is in the Karakoram mountain range of Gilgit Baltistan region in Pakistan. K2 is the second highest mountain in the world. It is also known as the king of the Karakoram. K2 and Gondogoro La trek is no doubt one the of the best treks in the world. On this trek, you will see the great Trango towers, Masherbrum, Gasherbrums, the mighty K2 and Broad peak among many other famous mountains. On k2 and Gondogoro La trek, you will be trekking on the famous Baltoro Glacier and pass Concordia. Concordia has been described as the “Throne Room of the Gods” for its unique 360° panorama of 7,000m mountains and impressive views of K2.

                            Since many years Trango adventure have been organising K2 and Gondogoro La trek to mountaineering enthusiasts from around the world. Trango adventures operates a 21-23 days k2 and Gondogoro La trek to the heart of Karakoram which is best in terms of safety, acclimatisation and enjoyment. The duration may be longer or shorter depending on the clients experience, ability and time.

                            The start point of K2 and Gondogoro La trek is Islamabad. Islamabad is the purpose build green capital  city of Pakistan. Your guide will meet and greet you at the Islamabad international airport, then transfer you to the hotel for a rest to recover from the journey. We will meet again in the afternoon for a briefing about the trek. Next day you will take the spectacular mountains view flight to Skardu.  From the flight, you will have the first glimpse of Nanga Parbat, K2 and many other Himalayan & Karakoram peaks. After 45 minutes, you will arrive in Skardu. Skardu is the capital of Baltistan. You will check into your hotel and the rest of the afternoon is for rest and preparation for your trek. Following day you will start your day by driving along the mighty Indus, Shigar then Braldu river to Shigar valley towards Askoli. Askoli is the last village before you enter into the wilderness of Karakoram. You will spend your first night under the stars in your tents.  After spending your first night in the tent under the starry canvas, today will be your first day of walking. You will be walking towards Braldu, gorge and to the snout of the Baltoro glacier, which you then follow to Concordia. Concordia is the centre of the Karakoram mountain range, and centre of a complex to some of the world highest peaks and many of the largest glaciers. Concordia gives you a fantastic mountains views. On every side, within radius of 24 kms, rise up ten of the world’s thirty highest peaks, including, K2, Broad Peak, and Gasherbrum peaks. After spending a night at Concordia, you will continue your trek on upper Baltoro glacier towards Chogolisa and Ali Camp. Overnight at Ali camp. From Ali camp you will start your second part of Gondogoro La trek by crossing the Gondogoro Pass (5,585m), which requires crampons. Every year, at the beginning of the season, a rescue team from Hushe village fixes the ropes on Gondogoro La, maintains them through the trekking season and removing them at the end of the season for a fix fee (included). Rescue team member are based at booth side of the Pass. they will also help and assist you to climb the pass. You have to wake up very early in the morning to climb Gondogoro La. It is necessary to cross the Pass before sunrise to avoid any kind of ice falls and avalanches due to rise in temperature. The beginning of the ascent is gentle for two hours then there is the steep section with fixed ropes, from here onwards you will attach the safety carabiners to the rope to reach the top of the pass. Once you are on the top of the Gondogoro pass, you will have a spectacular Mountain view, including the four eight thousand meters high peaks, K2 (8,611m), Broad Peak (8,051m), Gasherbrum I (8,080m) and Gasherbrum II (8,035m). Ascending down from the Gondogoro pass, you will enter the other side of Karakoram in the Hushe valley. Hushe is a small village. It is a Typical Balti Remote Village where you will meet the friendly Balti people. Hushe is under Gangche district and Khapulu is the district headquarter. From Hushe you will drive along the Shyok and Indus river towards Skardu, on route you will Pass through many beautiful small Balti villages with a lot of smiley faces. Hushe to Skardu is 6 Hours drive. In Skardu you will sleep in a real bed and have a hot shower. Following day you will take a flight to Islamabad, in case of flight cancellation, you will drive on Karakoram highway. After spending a night in Islamabad, you will be transfer to the airport to fly back home. We strongly believe that Our K2 and Gondogoro La trek will create an amazing life long memory for you.</p>
                        </div>
                    </div>
                    <div className="row bottom-image pb-3">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/gondogoro.jpg")} alt="" onClick={() => changeGondogoroToggler(!gondogoroToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/gondogoro2.jpg")} alt="" onClick={() => changeGondogoroToggler(!gondogoroToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/gondogoro3.jpg")} alt="" onClick={() => changeGondogoroToggler(!gondogoroToggler)} />
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/gondogoro4.jpg")} alt=""
                                style={{ marginTop: 0 }}
                                onClick={() => changeGondogoroToggler(!gondogoroToggler)} />
                        </div>
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/gondogoro6.jpg")} alt=""
                                style={{ marginTop: 0 }}
                                onClick={() => changeGondogoroToggler(!gondogoroToggler)} />
                        </div>
                    </div>
                    <FsLightbox
                        toggler={gondogoroToggler}
                        sources={[
                            require("../../assets/img/treking/batura1.jpg"),
                            require("../../assets/img/treking/batura3.jpg"),
                            require("../../assets/img/treking/batura4.jpg"),
                        ]}
                    />
                </div>
            </section>




            <section className="common-styles" style={{ backgroundColor: '#F5F9FF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Trek to Rush Phari</h3>
                            <p>
                                is a turquoise lake on a ridge between Hispar Valley and the Barpu Glacier.  This trek offers an incredible panoramic view; especially from the 5,098m Rush Peak one can have a 360° view that almost includes all the main peaks in the Hunza/Nagar region.  Distant eastward views of the 8,611m K2, 8,047m Broad Peak and 7,925m Gasherbrum- IV; and views to the northeast in the Hispar Muztagh massif which includes peaks like the Lupgar Sar 7,200m, Momhil Sar 7,343m, Trivor 7,728m, Mulungutti Sar 7,025m and Distaghil Sar at 7,885m add to the magnificence of this relatively short trek.  Its pure indulgence in the marvel of nature…. totally awe-inspiring mountain panorama!
                            </p>
                        </div>
                    </div>
                    <div className="row bottom-image pb-3">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/rushphari4.jpg")} alt="" onClick={() => changeRushpuriToggler(!rushpuriToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/rushphari5.jpg")} alt="" onClick={() => changeRushpuriToggler(!rushpuriToggler)} />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/rushphari3.jpg")} alt="" onClick={() => changeRushpuriToggler(!rushpuriToggler)} />
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/rushphari1.jpg")} alt="" onClick={() => changeRushpuriToggler(!rushpuriToggler)} />
                        </div>
                        <div className="col-md-6">
                            <img src={require("../../assets/img/treking/rushphari2.jpg")} alt="" onClick={() => changeRushpuriToggler(!rushpuriToggler)} />
                        </div>
                    </div>
                    <FsLightbox
                        toggler={rushpuriToggler}
                        sources={[
                            require("../../assets/img/treking/rushphari1.jpg"),
                            require("../../assets/img/treking/rushphari2.jpg"),
                            require("../../assets/img/treking/rushphari4.jpg"),
                            require("../../assets/img/treking/rushphari5.jpg"),
                            require("../../assets/img/treking/rushphari3.jpg"),
                        ]}
                    />
                </div>
            </section>


            <section className="common-styles pb-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Petundas Trek</h3>
                            <p>
                                Patundas situated in the upper Hunza between the Batura glacier and Passu glacier at an altitude of 4170m, it’s a climb of 1500 m the moraine of Passu glacier. In a high point surrounded by high peaks of Shisper 7619m Passu Peak 7388m, Baltar Peak 7431m, and Batura one 7885m, Karoon Koh 7458m, Dastagil SAR, and Many 6000 m peak around you. The trek starts from Borit Lake of Gulkin village to Passugar, Luzdur, through summer pastures, beautiful high meadows with limestones.

                                This trek is especially recommended for those who intend to do short walks for one to five days. It has varieties for those as well who take interest in long treks of up to ten days. However, a round trip starting at Borith Lake and concludes at Batura near Passu is considered a rewarding walk. Most parts of this trek are easy with wild followers and great summer pastures. The only difficult part is grossing glacier. The panoramic views of Batura 7785m, Passu 7284m & Shisper Peak 7611m is superb. You will meet very friendly Wakhi people with their cattle in summer pastures who offer yogurt, buttermilk & fresh milk etc. to all visitors.


                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className='mt-2'>
                                <img src={require("../../assets/img/treking/patundas1.jpg")} alt="" height="300px" width="100%" onClick={() => changePatundasToggler(!patundasToggler)}/>
                            </div>
                            <div className="mt-4">
                                <img src={require("../../assets/img/treking/patundas2.jpg")} alt="" height="300px" width="100%" onClick={() => changePatundasToggler(!patundasToggler)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-image">
                        <div className="col-md-4">
                            <img src={require("../../assets/img/treking/patundas3.jpg")} alt="" onClick={() => changePatundasToggler(!patundasToggler)}/>
                        </div>
                        <div className="col-md-8">
                            <img src={require("../../assets/img/treking/patundas6.jpg")} alt="" onClick={() => changePatundasToggler(!patundasToggler)}/>
                        </div>
                    </div>
                    <FsLightbox
                        toggler={patundasToggler}
                        sources={[
                            require("../../assets/img/treking/patundas1.jpg"),
                            require("../../assets/img/treking/patundas2.jpg"),
                            require("../../assets/img/treking/patundas3.jpg"),
                            require("../../assets/img/treking/patundas4.jpg"),
                        ]}
                    />
                </div>
            </section>

        </Styles>
    );
}

export default Trekking;
