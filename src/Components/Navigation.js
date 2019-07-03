import React from 'react';
import { Navbar,Nav,NavItem,Collapse,NavbarToggler } from 'reactstrap';
import String from '../Components/Contents';
import gnome from '../assets/gnome-logo.png';

class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            iscolapse: false
        }
        this.toggle = this.toggle.bind(this)
        // console.log(this.props)
    }

    toggle(){
        this.setState({
            iscolapse: !this.state.iscolapse
        })
    }


    render(){
      
        
        return(
            <Navbar className="navbar navbar-top " dark fixed="top" expand="md">
                <div className="container-fluid">
                    
                    <a href="/" className="navbar-brand" > <img className="img-fluid" width="30" src={gnome} alt="GNOME.Asia Simmit 2019"/> GNOME.Asia Summit 2019</a>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.iscolapse} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem><a href="#home" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.home}</a></NavItem>
                            <NavItem><a href="#venue" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.venue}</a></NavItem>
                            {/* <NavItem><a href="#t" className="nav-link menu-top">{String.navigation.cityinformation}</a></NavItem> */}
                            <NavItem><a href="#schedule" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.agenda}</a></NavItem>
                            <NavItem><a href="#staff" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.staff}</a></NavItem>
                            <NavItem><a href="#sponsor" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.sponsor}</a></NavItem>
                            <NavItem><a href="#registration" 
                            onClick={()=>this.setState({
                                iscolapse:false
                            })}
                            className="nav-link menu-top">{String.navigation.registration}</a></NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;
