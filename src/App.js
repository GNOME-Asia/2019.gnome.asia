import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { connect } from 'react-redux';

import Navigation from './Components/Navigation';
import Home from './Containers/Home';
import Venue from './Containers/Venue';
import Cityinformation from './Containers/City';
// import Notfound from './Containers/Notfound';
import Footer from './Components/Footer';
import Sponsor from './Containers/Sponsor';
import Agenda from './Containers/Agenda';
// import Registration from './Containers/Registration';
import Staff from './Containers/Staff';
import Media from './Containers/Media';
import Community from './Containers/Community';

class App extends React.Component {

  render(){
    let lang = this.props.lang

    
    return (
      
       <div className="App">
       
        <Navigation/>
        
        <Home lang={lang} location="home" warning="Ini HOME"/>
        

        <Venue lang={lang} location="venue" refProps={this.scroll}/>
        <Cityinformation lang={lang} location="travel-information"/>
        <Agenda lang={lang} location="agenda" refProps={this.scroll}/>
        <Staff lang={lang} location="staff"/>
        <Sponsor lang={lang} location="sponsor"/>
        <Media/>
        <Community/>
        <Footer/>
       </div>
        
      
    );
  }
  
}

const mapStateToProps = state => {
  return{
    lang: state.Reducers.lang
  }
}

export default connect(mapStateToProps)(App);
