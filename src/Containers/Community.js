import React from 'react';
// import unmuh from '../assets/unmuh.png';
import gresikdev from '../assets/gresikdev.png';
import gnomeid from '../assets/gnome-id.png';
import gimpscape from '../assets/gimpscape.png';


const Image = props =>{
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ width:'144px' }}/>
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
                                    name="GNOME Indonesia"
                                    src={gnomeid}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Image 
                                    name="Gresik Dev"
                                    src={gresikdev}
                                />
                            </li>
                            <li className="list-inline-item">
                                <Image 
                                    name="GimpScape"
                                    src={gimpscape}
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