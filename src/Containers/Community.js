import React from 'react';
// import unmuh from '../assets/unmuh.png';
import gresikdev from '../assets/logo_GresikdevLogo.svg';
import gnomeid from '../assets/logo_gnome-id.svg';


const Image = props =>{
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ width:'100px' }}/>
}


class Community extends React.Component{
    render(){
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h3>Community Partner</h3>
                    <hr/>
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Image 
                                    name="Relawan TIK Gresik"
                                    src={gnomeid}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Image 
                                    name="Relawan TIK Gresik"
                                    src={gresikdev}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;