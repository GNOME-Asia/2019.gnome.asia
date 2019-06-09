import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem,Collapse,NavbarToggler,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { setLang,setLocation } from '../Redux/Actions';
import String from '../Components/Contents';
import '../App.css'


class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            iscolapse: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            iscolapse: !this.state.iscolapse
        })
    }
    render(){
        String.setLanguage(this.props.lang)
        
        return(
            <Navbar className="navbar bg-dark" fixed="top" expand="md">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/" style={{ color:'white' }}>Gnome Asia Summit 2019</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.iscolapse} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('home')
                            }} style={this.props.location==='home' ? {fontWeight:'bold',opacity:1}:null} to="/">{String.navigation.home}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('venue')
                            }} style={this.props.location==='venue' ? {fontWeight:'bold',opacity:1}:null} to="/venue">{String.navigation.venue}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('travel-information')
                            }} style={this.props.location==='travel-information' ? {fontWeight:'bold',opacity:1}:null} to="/travel-information">{String.navigation.cityinformation}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('registration')
                            }} style={this.props.location==='registration' ? {fontWeight:'bold',opacity:1}:null} to="/registration">{String.navigation.registration}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('agenda')
                            }} style={this.props.location==='agenda' ? {fontWeight:'bold',opacity:1}:null} to="/agenda">{String.navigation.agenda}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('staff')
                            }} style={this.props.location==='staff' ? {fontWeight:'bold',opacity:1}:null} to="/staff">{String.navigation.staff}</Link></NavItem>
                            <NavItem><Link className="nav-link" onClick={()=>{
                                this.setState({
                                    iscolapse:false
                                })
                                this.props.setLoc('sponsor')
                            }} style={this.props.location==='sponsor' ? {fontWeight:'bold',opacity:1}:null} to="/sponsor">{String.navigation.sponsor}</Link></NavItem>
                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret>{String.navigation.language}</DropdownToggle>
                                <DropdownMenu right className="bg-dark" style={{ border:'none',fontSize:'14px' }}>
                                    <DropdownItem onClick={()=> {
                                        console.log('Set Indonesia')
                                        this.props.setLang('id')
                                    }} style={this.props.lang==='id'? {fontWeight:'bolder',color:'#fff'}:{color:'#fff'}}>Indonesia</DropdownItem>
                                    <DropdownItem onClick={()=> this.props.setLang('en')} style={this.props.lang==='en'? {fontWeight:'bolder',color:'#fff'}:{color:'#fff'}}>English</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }

    componentDidMount(){
        console.log(this.props)
        if(localStorage.getItem('lang')){
            const lang = localStorage.getItem('lang')
            this.props.setLang(lang);
        }
        else{
            localStorage.setItem('lang',this.props.lang)
        }
    }
}



const mapStateToProps = state =>{
    return{
        lang: state.Reducers.lang,
        location:state.Reducers.location,
        
    }
}


const mapDispatchToProps = dispatch => {
    return{
        setLang: (lang) => dispatch(setLang(lang)),
        setLoc: (loc) => dispatch(setLocation(loc))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)