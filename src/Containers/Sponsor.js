import React from 'react';
import unmuh from '../assets/sponsors/unmuh.png';
import sakti from '../assets/sponsors/silver/sakti.png';
import gnome from '../assets/sponsors/platinum/gnome.png';
import tatalogam from '../assets/sponsors/silver/domus.png';
import fans from '../assets/sponsors/bronze/fans.png';
import cloudkilat from '../assets/sponsors/bronze/cloudkilat.png';
import kabarlinux from '../assets/sponsors/custom/kabarlinux.png';


const Image = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
}

const SponsorTitle = props => {
    return <div className="mx-auto my-5 text-white" style={{background:props.color, padding:'20px', width:'200px'}}><h5 className="my-0">{props.title}</h5></div>
}

const Platinum = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
}

const Silver = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'150px' }}/>
}

const Bronze = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'130px' }}/>
}

const Custom = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'130px' }}/>
}

class Sponsor extends React.Component{
    render(){
        return(
            <div className="Page py-5">
                <div className="container text-center py-3">
                    <h1>Sponsors</h1>
                    <hr/>
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Image
                                    name="Universitas Muhammadiyah Gresik"
                                    src={unmuh}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle color="#f57601" title="Platinum" />
                            <li className="list-inline-item">
                                <Platinum
                                    name="GNOME Foundation"
                                    src={gnome}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle color="#f57601" title="Silver" />
                            <li className="list-inline-item">
                                <Silver
                                    name="PT SAKTI KINERJA KOLABORASINDO"
                                    src={sakti}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Silver
                                    name="PT TATA LOGAM LESTARI"
                                    src={tatalogam}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle color="#f57601" title="Bronze" />
                            <li className="list-inline-item">
                                <Bronze
                                    name="FANS"
                                    src={fans}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Bronze
                                    name="Cloudkilat"
                                    src={cloudkilat}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle color="#f57601" title="Custom Sponsors" />
                            <li className="list-inline-item">
                                <Custom
                                    name="KabarLinux"
                                    src={kabarlinux}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }

  
}


export default Sponsor;
