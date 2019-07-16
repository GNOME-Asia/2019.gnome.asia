import React from 'react';

class Proposal extends React.Component{
    render(){
        return(
            <div className="Page py-5" id="callofproposal">
                <div className="container py-3">
                    <h1>Call for Proposal</h1>
                    <hr/>
                    <br/>
                    <div className="d-flex align-items-left justify-content-left" style={{ height:'5vh' }} >
                    <p style={{ fontSize:20 }}>Come on, share your best ideas in this event. You can also apply for travel support to the GNOME foundation.  For further information please refer to <a href="https://wiki.gnome.org/Travel">this guides</a>. All interested contributors are highly encouraged to send in talks. See you in Gresik!</p>    
                    </div>
                </div>
                <div className="Page py-5">
                    <div className="container py-3">
                        <br></br>
                        <br></br>
                        <p style={{ fontSize:20 }}><a href="https://s.id/GNAS19-CfP" target="_blank">Submit Now</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proposal;