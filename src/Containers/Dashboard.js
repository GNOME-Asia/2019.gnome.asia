import React from 'react';
import Footer from '../Components/Footerback';
import { connect } from 'react-redux';
import { doLogout } from '../Redux/action/userAction';
import Navdashboard from '../Components/Navdashboard';


class Dashboard extends React.Component{
    render(){
        return(
            <div className="Page mb-5">
                <Navdashboard 
                    logout={this.props.doLogout}
                />
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4">
                                <div className="mb-1">
                                    <span>Profile</span>
                                </div>
                                <ul className="nav flex-column">
                                    <li className="nav-item">Name: <b>{this.props.name}</b></li>
                                    <li className="nav-item">Email: {this.props.email} {this.props.verified ? <span className="text-success ml-1">Verified</span> : <span className="text-danger ml-1">Not Verified</span>}</li>
                                    <li className="nav-item">Phone: {`+`+this.props.phone}</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <span>Registration Payments</span>
                            <div>
                                <span>Scan Qrcode with Mycoop Apps</span>
                                <div>
                                    {
                                        this.props.verified ? (
                                            <img src={this.props.payments.qrcode_url}  alt="Mycoop"/>
                                        ):(<p>Check your Email for Verify & Get Payment QRcode</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <Footer/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        email:state.UserReducer.email,
        name: state.UserReducer.name,
        phone: state.UserReducer.phone,
        verified: state.UserReducer.verified,
        payments: state.UserReducer.payments[0]
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        doLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);