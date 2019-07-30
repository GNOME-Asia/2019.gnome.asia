import React from 'react';
import Footer from '../Components/Footerback';
import { connect } from 'react-redux';
import { doLogout } from '../Redux/action/userAction';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="Page mb-5 mt-3">
                <div className="container py-3">
                    <div className="d-flex justify-content-between">
                        <h3>Dashboard</h3>
                        <button className="btn btn-link"
                        onClick={()=>this.props.doLogout()}
                        > <i className="fas fa-sign-out-alt"></i> Sign out</button>
                    </div>
                    <hr/>
                    <br/>
                    <div>
                        <h5>Hello { this.props.email }</h5>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        email:state.UserReducer.email
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        doLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);