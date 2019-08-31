import React from 'react';
// import unmuh from '../assets/unmuh.png';
import gresikdev from '../assets/community/gresikdev.png';
import gnomeid from '../assets/community/gnome-id.png';
import gimpscape from '../assets/community/gimpscape.png';
import klim from '../assets/community/KLiM.png'


const Image = props =>{
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ height:'100px' }}/>
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
                            <li className="list-inline-item">
                                <Image 
                                    name="KLiM"
                                    src={klim}
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