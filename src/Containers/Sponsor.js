import React from 'react';
import unmuh from '../assets/sponsors/unmuh.png';
import mycoop from '../assets/sponsors/silver/mycoop.png';
import gnome from '../assets/sponsors/platinum/gnome.png';
import tatalogam from '../assets/sponsors/silver/domus.png';
import pemkab from '../assets/sponsors/silver/pemkabgresik.png';
import fans from '../assets/sponsors/bronze/fans.png';
import apjii from '../assets/sponsors/bronze/apjii.png';
import cloudkilat from '../assets/sponsors/bronze/cloudkilat.png';
import esensi from '../assets/sponsors/bronze/esensicreative.png';
import kabarlinux from '../assets/sponsors/custom/kabarlinux.png';
import pia from '../assets/sponsors/custom/pia.png';


const Image = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
}

const SponsorTitle = props => {
    return <div className="my-5"><h5 className="my-0">{props.title}</h5></div>
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
                <div className="container py-3">
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
                            <SponsorTitle title="Platinum" />
                            <li className="list-inline-item">
                                <Platinum
                                    name="GNOME Foundation"
                                    src={gnome}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle title="Silver" />
                            <li className="list-inline-item">
                                <Silver
                                    name="MyCOOP"
                                    src={mycoop}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Silver
                                    name="Pemerintah Kabupaten Gresik"
                                    src={pemkab}
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
                            <SponsorTitle title="Bronze" />
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
                            <li className="list-inline-item">
                                <Bronze
                                    name="APJII"
                                    src={apjii}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Bronze
                                    name="Esensi Creative"
                                    src={esensi}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <SponsorTitle title="Custom Sponsors" />
                            <li className="list-inline-item">
                                <Custom
                                    name="KabarLinux"
                                    src={kabarlinux}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Custom
                                    name="Private Internet Access"
                                    src={pia}
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
