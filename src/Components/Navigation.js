import React from 'react';
import { Navbar,Nav,NavItem,Collapse,NavbarToggler } from 'reactstrap';
import gnome from '../assets/photo_2019-07-10 19.01.08.jpeg';
// import Registrationmodal from '../Components/Registrationmodal';
import { Link } from 'react-router-dom';


class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            iscolapse: false,
            modal: false
        }
        this.toggle = this.toggle.bind(this)
        this._closed = this._closed.bind(this)
        this._modalopen = this._modalopen.bind(this)
        // console.log(this.props)
    }

    toggle(){
        this.setState({
            iscolapse: !this.state.iscolapse
        })
    }

    _closed(){
        this.setState({
            iscolapse: false
        })
    }

    _modalopen(){
        this.setState({
            modal: !this.state.modal,
            iscolapse:false
        })
    }

    render(){
      
        
        return(
            <div>
            <Navbar className="navbar navbar-top" light fixed="top" expand="md">
                <div className="container-fluid">
                    
                    <a href="/" className="navbar-brand" > <img className="img-fluid" width="120" src={gnome} alt="GNOME.Asia Simmit 2019"/> 
                    {/* GNOME.Asia Summit 2019 */}
                    </a>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.iscolapse} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem><a href="#home" 
                            onClick={
                                this._closed
                            }
                            className="nav-link menu-top p-3">Home</a></NavItem>
                            <NavItem><a href="#venue" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Venue</a></NavItem>
                            <NavItem><a href="#schedule" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Agenda</a></NavItem>
                            <NavItem><a href="#speakers" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Speakers</a></NavItem>
                            <NavItem><a href="#staff" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Staff</a></NavItem>
                            <NavItem><a href="#callofproposal" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Call For Paper</a></NavItem>
                            <NavItem><a href="#sponsor" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Sponsor</a></NavItem>
                            <NavItem><Link to="/registration" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Registration</Link></NavItem>
                        </Nav>
                    </Collapse>
                    
                </div>
            </Navbar>
            {/* <Registrationmodal open={this.state.modal} toggle={this._modalopen}/> */}
            </div>
        );
    }
}

export default Navigation;
