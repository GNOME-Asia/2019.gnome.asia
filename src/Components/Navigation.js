import React from 'react';
import { Navbar,Nav,NavItem,Collapse,NavbarToggler } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import gnome from '../assets/2019_logo.jpeg';


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
                            <NavItem><a href="/#" 
                            onClick={
                                this._closed
                            }
                            className="nav-link menu-top p-3">Home</a></NavItem>
                            <NavItem><Link to="#venue" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Venue</Link></NavItem>
                            <NavItem><Link to="#schedule" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Agenda</Link></NavItem>
                            <NavItem><Link to="#staff" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Staff</Link></NavItem>
                            <NavItem><Link to="#callofproposal" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Call For Paper</Link></NavItem>
                            <NavItem><Link to="#sponsor" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">Sponsor</Link></NavItem>
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
