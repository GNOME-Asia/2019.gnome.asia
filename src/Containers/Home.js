import React from 'react';
import String from '../Components/Contents';
import Carousel from '../Components/Carousel';
class Home extends React.Component{  
    render(){
        

        return(
            <div className="Page pt-5">
                <br/>
                <Carousel/>
                <div className="container my-3">
                    <h2>News</h2>
                    <hr/>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>Call for Papers for GNOME.Asia Summit 2019 Is Now Open! </h5>
                        <p>
                        GNOME.Asia Summit 2019 invites you to participate as a speaker at the conference on the 12th and 13th of October 2019 in Gresik, Indonesia.GNOME.Asia Summit is the featured annual GNOME conference in Asia. It focuses primarily on the GNOME desktop, but also covers applications and platform development tools. The summit brings together the GNOME community in Asia to provide a forum for users, developers, foundation leaders, governments and businesses to discuss the present technology and future developments.
                        
                        <br/>
                        <span><a href="https://gnome.id/en/call-for-papers-for-gnome-asia-summit-2019-is-now-open/" target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>GNOME.Asia Summit 2019 Logo Contest Announcement</h5>
                        <p>
                        GNOME.Asia Summit 2019 logo competition is over, the vote was in. The resulting jury has been decided the winner of this logo competition. The winner is “Fendi Prad” from Indonesia.
                        <br/>
                        <span><a href="https://gnome.id/pengumuman-pemenang-kontes-logo-gnome-asia-summit-2019.html" target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>GNOME.Asia Summit 2019 Logo Competition</h5>
                        <p>
                        GNOME.Asia Summit 2019 will be held in Gresik, Indonesia in October, 2019. We are looking for creative people to design logo for this year’s Summit. The contest is open from now until June 21, 2019 and the winner will be announced on June 30, 2019.
                        <br/>
                        <span><a href="https://gnome.id/Gnome-Asia-Logo-Competition/" target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>Gresik, Tuan Rumah GNOME.Asia Summit 2019</h5>
                        <p>
                        GNOME.Asia Summit merupakan acara rutin komunitas GNOME di Asia yang digelar setiap tahunnya. Kegiatan ini biasanya digelar selama beberapa hari dan mempertemukan para pengembang, pengguna, dan orang-orang yang memiliki antusiasme terhadap GNOME atau hal-hal terkait dengan tema free & open source software. Tak heran, ajang ini selalu dinanti-nanti oleh para teman-teman komunitas di Indonesia maupun Asia.
                        <br/>
                        <span><a href="https://gnome.id/Gresik-Tuan-Rumah-GNOME-Asia-Summit-2019.html" target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    
                </div>
                
            </div>
                
        );
    }


}


export default Home
