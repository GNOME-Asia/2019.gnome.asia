import React from 'react';
import unmuh from '../assets/sponsors/unmuh.png';
import sakti from '../assets/sponsors/silver/sakti.png';
import gnome from '../assets/sponsors/platinum/gnome.png';
import tatalogam from '../assets/sponsors/silver/tatalogam.png';
import fans from '../assets/sponsors/bronze/fans.png';
import cloudkilat from '../assets/sponsors/bronze/cloudkilat.png';


const Image = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
}

const Platinum = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
}

// const Gold = props => {
//     return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'200px' }}/>
// }

const Silver = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'150px' }}/>
}

const Bronze = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'130px' }}/>
}

class Sponsor extends React.Component{
    render(){
        return(
            <div className="Page py-5">
                <div className="container py-3">
                    <h3>Sponsor</h3>
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
                            <br></br><br></br>
                            <h5>Platinum</h5>
                            <li className="list-inline-item">
                                <Platinum
                                    name="GNOME Foundation"
                                    src={gnome}
                                />
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <br></br><br></br>
                            <h5>Silver</h5>
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
                            <br></br><br></br>
                            <h5>Bronze</h5>
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
                    </div>
                </div>
                
            </div>
        )
    }

  
}


export default Sponsor;