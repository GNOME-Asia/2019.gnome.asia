import React from 'react';
import unmuh from '../assets/logo_UMG.svg';


const Image = props => {
    return <img className="img-fluid" alt={props.name} src={props.src} style={{ width:'100px' }}/>
}
class Sponsor extends React.Component{
    render(){
        return(
            <div className="Page py-5" id="sponsor">
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
                    </div>
                </div>
                
            </div>
        )
    }

  
}


export default Sponsor;