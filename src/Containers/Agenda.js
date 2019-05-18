import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Agenda extends React.Component{
    render(){
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h1>Agenda</h1>
                    <hr />
                    <br />

                    <div>
                        <h3>Day 1</h3>
                        <br />
                        <table className="table">
                            <thead>

                            <tr>
                                <th>Time</th>
                                <th>Schedule</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>Opening</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Keynote Session</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Paralel Session (Talk & Workshop)</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Exhibition</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div>
                        <h3>Day 2</h3>
                        <br />
                        <table className="table">
                            <thead>

                            <tr>
                                <th>Time</th>
                                <th>Schedule</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>Keynote Session</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Paralel Session (Talk & Workshop)</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Exhibition</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Closing</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                
                
            </div>
        )
    }

    componentDidMount(){
        this.props.setloc(this.props.location)
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

export default connect(mapStateToProps,mapDispatchToProps)(Agenda);