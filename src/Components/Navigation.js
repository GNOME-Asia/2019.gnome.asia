import React from 'react';
import { Navbar,Nav,NavItem,Collapse,NavbarToggler } from 'reactstrap';
import String from '../Components/Contents';
import gnome from '../assets/2019_logo.jpeg';
import Registrationmodal from '../Components/Registrationmodal';


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
                            className="nav-link menu-top p-3">{String.navigation.home}</a></NavItem>
                            <NavItem><a href="#venue" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">{String.navigation.venue}</a></NavItem>
                            <NavItem><a href="#schedule" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">{String.navigation.agenda}</a></NavItem>
                            <NavItem><a href="#staff" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">{String.navigation.staff}</a></NavItem>
                            <NavItem><a href="#callofproposal" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">{String.navigation.cfp}</a></NavItem>
                            <NavItem><a href="#sponsor" 
                            onClick={this._closed}
                            className="nav-link menu-top p-3">{String.navigation.sponsor}</a></NavItem>
                            <NavItem><a href="#registration" 
                            onClick={this._modalopen}
                            className="nav-link menu-top p-3">{String.navigation.registration}</a></NavItem>
                        </Nav>
                    </Collapse>
                    
                </div>
            </Navbar>
            <Registrationmodal open={this.state.modal} toggle={this._modalopen}/>
            </div>
        );
    }
}

export default Navigation;
