import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

class Agenda extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeTabs: '1'
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle(tab){
        if(this.state.activeTabs !== tab){
            this.setState({
                activeTabs: tab
            })
        }
    }
    render(){
        console.log(this.state.activeTabs)
        return(
            <div className="Page py-5" style={{ backgroundColor:'#E0E0E0' }}>
                <div className="container py-3">
                    <div className="text-center">

                        <h1>Schedule</h1>
                    </div>
                    <hr />
                    <br />
                    <div>
                        <h4>October, 12–13 2019</h4>
                    </div>

                    <div className="p-4 agenda-container">
                       <Nav tabs fill>
                            <NavItem>
                                <NavLink className={this.state.activeTabs === '1' ? "tab-agenda tab-agenda-active":"tab-agenda" } onClick={()=>this._toggle("1")} active={this.state.activeTabs === '1' ? true : false} >
                                    <h4>Day 1</h4>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTabs === '2' ? "tab-agenda tab-agenda-active":"tab-agenda" } onClick={()=>this._toggle("2")} active={this.state.activeTabs === '2' ? true : false} >
                                    <h4>Day 2</h4>
                                </NavLink>
                            </NavItem>
                       </Nav>
                       <TabContent activeTab={this.state.activeTabs}>
                            <TabPane tabId="1">
                                <Row className="my-3">
                                <Col sm="12">
                                    <ul>
                                        <li>
                                            Opening Ceremony
                                        </li>
                                        <li>
                                            Keynote
                                        </li>
                                        <li>
                                            Parallel Sessions
                                            <ul>
                                                <li>Talks</li>
                                                <li>Workshop</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Exhibition
                                        </li>
                                    </ul>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row className="my-3">
                                <Col sm="12">
                                    <ul>
                                        <li>
                                            Keynote
                                        </li>
                                        <li>
                                            Parallel Sessions
                                            <ul>
                                                <li>Talks</li>
                                                <li>Workshop</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Exhibition
                                        </li>
                                        <li>
                                            Closing Ceremony
                                        </li>
                                    </ul>
                                </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
 
                    </div>
                </div>
                
                <br/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Agenda);