import React from 'react';
import video from '../assets/gnome-5.mp4';
import poster from '../assets/poster.png';

class Video extends React.Component{

    render(){
        
        return(
            <div className="Page py-5">
                <div className="container py-3">
                    <h1>How to get to the venue</h1>
                    <hr />
                    <figure>
                      <video style={ {maxWidth: 100 + "%"} } controls poster={poster}>
                        <source src={video} type="video/mp4" />
                      </video>
                    </figure>

                </div>
                
            </div>
            
        )
    }
}



export default Video;
