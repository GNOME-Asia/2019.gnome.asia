import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Registration extends React.Component{
    render(){
        console.log(this.props.location)
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h1>Registration</h1>
                    <hr/>
                    <div className="d-flex justify-content-center align-items-center" style={{ height:'70vh' }}>
                        <div className="text-center">
                            <h3>Comming Soon</h3>
                            <p style={{ letterSpacing:'5px' }}>Conference Date : October, 12–13 2019</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount(){
        this.props.setloc(this.props.location);
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

export default connect(mapStateToProps,mapDispatchToProps)(Registration)