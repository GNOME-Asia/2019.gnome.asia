import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Staff extends React.Component{
    render(){
        
        return(
            <div className="Page py-5" >
                <div className="container py-3">
                    <h1>Staff</h1>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Lead/Main Coordinator</h5>
                                <p>
                                    Andik Nur Ahmad
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Events</h5>
                                <p>
                                    Aries Eko & Yudhi Satrio
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Secretariat</h5>
                                <p>
                                    Andri Purnama
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Treasurer</h5>
                                <p>
                                    Awaluddin Rizal
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Design</h5>
                                <p>
                                    Rania Amina
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Public Relation</h5>
                                <p>
                                    Jordan Maulana
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Sponsorship</h5>
                                <p>
                                    Fadhil
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5 className="font-weight-bold">Documentation</h5>
                                <p>
                                    Muhammad Firdaus
                                </p>
                            </div>
                        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Staff);