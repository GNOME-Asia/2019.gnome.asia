import React from 'react';
import kabarlinux from '../assets//media/kabarlinux.png';


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
                                    name="Kabar Linux"
                                    src={kabarlinux}
                                />
                            </li>
                        </ul>
                        {/* <ul className="list-inline">
                            <li className="list-inline-item">
                                <Image 
                                    name="Relawan TIK Gresik"
                                    src={unmuh}
                                />
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Media;