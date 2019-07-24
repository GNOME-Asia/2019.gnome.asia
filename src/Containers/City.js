import React from 'react';
import pesona from '../assets/pesona.png';
import santika from '../assets/santika.png';
import saptanawa from '../assets/saptanawa.jpg';

const Hotel = (props) =>{
    
    return(
        <div>
            <h5>{props.name}</h5>
            <br/>
            <div className="row">
            <div className="col-md-4 py-3">
                <img src={props.img} className="img-fluid img-hotels" alt={props.name}/>
            </div>
            <div className="col-md-8 py-3">
                <ul style={{ listStyle:'none' }}>
                    <li><span className="font-weight-bold">Address:</span> {props.address}</li>
                    <li><span className="font-weight-bold">Phone:</span> {props.phone}</li>
                    <li><span className="font-weight-bold">Start from:</span> <span className="font-italic">{props.rate}</span></li>
                    <li className="mt-3"><span className="text-primary">More information</span></li>
                </ul>
                
            </div>
            </div>
        </div>
    )
}
class Cityinformation extends React.Component{

    // componentDidMount(){
    //     pageAnalytics('/travel-information');
    //     this.props.setloc(this.props.location)
    // }

    render(){
        
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h1>Nearby Place</h1>
                    <hr />
                    <br/>
                    <h3>Hotels</h3>
                    <div>
                        <ul className="list-group">
                            <a  href="https://www.google.co.id/travel/hotels/Gresik/entity/CgoIuNq7_YGGqJheEAE?g2lb=4207876%2C4208993%2C4223281%2C4242898%2C4253230%2C4254308%2C4258167%2C4260007%2C4260036%2C4250437%2C4253015%2C4261203&hl=en&gl=id&un=0&q=hotel%20gresik&rp=OAFAAEgC&ictx=1&hrf=CgYIoPc2EAAiA0lEUioWCgcI4w8QBRgTEgcI4w8QBRgUGAEoALABAFgBmgEIEgZHcmVzaWuiARUKCy9nLzEyMTN2ZHl0EgZHcmVzaWuqAR4KAgghEgIIZRICCBUSAggNEgIIZxICCFsSAggvGAGqAQsKAggSEgMImwEYAaoBCgoCCBESAgg4GAGqARcKAgguEgIIOhIDCIcBEgIIGhICCAwYAaoBBgoCCGMYAJIBAiAB&tcfs=Ei8KCy9nLzEyMTN2ZHl0EgZHcmVzaWsaGAoKMjAxOS0wNS0xORIKMjAxOS0wNS0yMFIA" target="__blank" className="list-group-item hotel-link my-2">
                                <Hotel 
                                    name="Hotel Pesonna Gresik"
                                    address="Sidokumpul, Jalan Panglima Sudirman No.1, Pulopancikan, Kecamatan Gresik, Sumberrejo, Pulopancikan, Kec. Gresik, Kabupaten Gresik, Jawa Timur 61111"
                                    phone="(031) 99006330"
                                    rate="Rp524.522"
                                    img={pesona}
                                />
                            </a>
                            <a href="https://www.google.co.id/travel/hotels/Gresik/entity/CgsI2cy5lfjkuoeDARAB?g2lb=4207876%2C4208993%2C4223281%2C4242898%2C4253230%2C4254308%2C4258167%2C4260007%2C4260036%2C4250437%2C4253015%2C4261203&hl=en&gl=id&un=0&q=hotel%20gresik&rp=OAFAAEgC&ictx=1&hrf=CgYIoPc2EAAiA0lEUioWCgcI4w8QBRgTEgcI4w8QBRgUGAEoALABAFgBmgEIEgZHcmVzaWuiARUKCy9nLzEyMTN2ZHl0EgZHcmVzaWuqAR4KAgghEgIIZRICCBUSAggNEgIIZxICCFsSAggvGAGqAQsKAggSEgMImwEYAaoBCgoCCBESAgg4GAGqARcKAgguEgIIOhIDCIcBEgIIGhICCAwYAaoBBgoCCGMYAJIBAiAB&tcfs=Ei8KCy9nLzEyMTN2ZHl0EgZHcmVzaWsaGAoKMjAxOS0wNS0xORIKMjAxOS0wNS0yMFIA" target="__blank" className="list-group-item hotel-link my-2">
                                <Hotel 
                                    name="Hotel Santika Gresik"
                                    address="Jl. Dr. Wahidin S.H. No.788, Kembangan, Kebomas, Kabupaten Gresik, Jawa Timur 61124"
                                    phone="(031) 39929777"
                                    rate="Rp526.500"
                                    img={santika}
                                />
                            </a>
                            <a href="https://www.google.co.id/travel/hotels/Gresik/entity/CgsIjNGp_LPD1piyARAB?g2lb=4207876%2C4208993%2C4223281%2C4242898%2C4253230%2C4254308%2C4258167%2C4260007%2C4260036%2C4250437%2C4253015%2C4261203&hl=en&gl=id&un=0&q=hotel%20gresik&rp=OAFAAEgC&ictx=1&hrf=CgYIoPc2EAAiA0lEUioWCgcI4w8QBRgTEgcI4w8QBRgUGAEoALABAFgBmgEIEgZHcmVzaWuiARUKCy9nLzEyMTN2ZHl0EgZHcmVzaWuqAR4KAgghEgIIZRICCBUSAggNEgIIZxICCFsSAggvGAGqAQsKAggSEgMImwEYAaoBCgoCCBESAgg4GAGqARcKAgguEgIIOhIDCIcBEgIIGhICCAwYAaoBBgoCCGMYAJIBAiAB&tcfs=Ei8KCy9nLzEyMTN2ZHl0EgZHcmVzaWsaGAoKMjAxOS0wNS0xORIKMjAxOS0wNS0yMFIA" target="__blank" className="list-group-item hotel-link my-2">
                                <Hotel 
                                    name="Hotel Saptanawa"
                                    address="Jl. Arif Rahman Hakim Gresik No.79, Injen Barat, Sidomoro, Kebomas, Kabupaten Gresik, Jawa Timur 61122"
                                    phone="(031) 3971182"
                                    rate="Rp457.500"
                                    img={saptanawa}
                                />
                            </a>
                        </ul>
                    </div>

                </div>
                
            </div>
            
        )
    }
}



export default Cityinformation;