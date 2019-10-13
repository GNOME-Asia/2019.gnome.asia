import React from 'react';
import neil from '../assets/speakers/neil_mcgovern.png';
import rosanna from '../assets/speakers/rosanna_yuen.png';
import stephanus from '../assets/speakers/stephanus_koeswandi.png';
import andika from '../assets/speakers/andika_triwidada.png';
import String from "../Components/Contents";

const SpeakerWrapper = (props) => {
    return (
        <div className="py-2">
            <span className="mx-3 border-0" title={props.topic}><a target="__blank" href={props.link}>{props.name}</a></span>
        </div>
    )
}

class Speakers extends React.Component{    
    render(){
        return(
            <div className="Page">
                <div className="container py-3">
                    <h1>GNOME.Asia Summit 2019 Speakers</h1>
                    <hr/>
                    <h3 className="text-center">Keynote Speakers</h3>
                    <div className="row d-flex d-flex-row align-items-center justify-content-center" >
                            <div className="card col-md-4 m-3 border-0" style={{width:"300px",height:"300px"}}>
                                <img className="card-img-top mx-auto" src={neil} alt="neil" style={{width:"180px"}} />
                                <div className="card-body text-center">
                                    <h6>Neil McGovern</h6>
                                    <hr/>
                                    <p>GNOME Executive Director</p>
                                </div>
                            </div>
                            <div className="card col-md-4 m-3 border-0" style={{width:"300px",height:"300px"}}>
                                <img className="card-img-top mx-auto" src={rosanna} alt="rosanna" style={{width:"180px"}}/>
                                <div className="card-body text-center">
                                    <h6>Rosanna Yuen</h6>
                                    <hr/>
                                    <p>GNOME Director of Operation</p>
                                </div>
                            </div>
                            <div className="card col-md-4 m-3 border-0" style={{width:"300px",height:"300px"}}>
                                <img className="card-img-top mx-auto" src={stephanus} alt="stephanus" style={{width:"180px"}}/>
                                <div className="card-body text-center">
                                    <h6>Stephanus Koeswandi</h6>
                                    <hr/>
                                    <p>Vice President of PT. Tatalogam Lestari</p>
                                </div>
                            </div>
                            <div className="card col-md-4 m-3 border-0" style={{width:"300px",height:"300px"}}>
                                <img className="card-img-top mx-auto" src={andika} alt="andika" style={{width:"180px"}}/>
                                <div className="card-body text-center">
                                    <h6>Andika Triwidada</h6>
                                    <hr/>
                                    <p>Director of PT. Indocisc</p>
                                </div>
                            </div>
                    </div>
                    <h3 className="text-center">Speakers</h3>
                    <div className="row justify-content-center align-items-center text-center" >
                        { String.speakers.map((value) => {
                            return <SpeakerWrapper key={value.id} name={value.name} topic={value.topic} link={value.link}/>
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Speakers;
