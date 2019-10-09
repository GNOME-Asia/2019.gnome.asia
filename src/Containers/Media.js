import React from 'react';
import gnf from '../assets/media/gnf.png';
import inigresik from '../assets/media/ini-gresik.png';
import wicara from '../assets/media/wicara.png'


const Image = props =>{
     return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'100px' }}/>
}

class Media extends React.Component{
    render(){
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h3>Media Partner</h3>
                    <hr/>
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Image 
                                    name="GNF"
                                    src={gnf}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Image 
                                    name="Ini Gresik"
                                    src={inigresik}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Image 
                                    name="Wicara"
                                    src={wicara}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Media;
