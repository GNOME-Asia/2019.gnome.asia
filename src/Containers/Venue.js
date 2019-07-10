import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Venue extends React.Component{

    render(){
        
        return(
            <div className="Page py-5">
                <div className="container py-3">
                    <h1>Venue</h1>
                    <hr />
                    <br/>
                    <h3>Universitas Muhammadiyah Gresik</h3>
                    <br/>
                    <div>
                    <iframe title="universitas muhammadiyah gresik" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.695776787119!2d112.61358151487462!3d-7.16112617225026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77ffd7112b48ef%3A0xbc0320214ba5fa8e!2sUniversitas+Muhammadiyah+Gresik!5e0!3m2!1sen!2sid!4v1560074004247!5m2!1sen!2sid" width="100%" height="600"  frameBorder='0' style={{ border:0 }} allowFullScreen>

                    </iframe>
                    </div>

                </div>
                
            </div>
            
        )
    }
}


const mapStateToProps = state =>{
    return{
        loc: state.Reducers.location
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setloc: (loc) => dispatch(setLocation(loc))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Venue)