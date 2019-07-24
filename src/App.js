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
import Staff from './Containers/Staff';
import Media from './Containers/Media';
import Community from './Containers/Community';
import Proposal from './Containers/Proposal';
import Speakers from './Containers/Speakers';

class App extends React.Component {

  render(){
    

    console.log(this.props.mystate)
    
    return (
      
       <div className="App">
       
        <Navigation/>
        <div className="py-3" id="home">

          <Home/>
        </div>
        <div className="pt-5" id="venue">

          <Venue />
        </div>
          <Cityinformation/>
        <div className="pt-5" id="schedule">

          <Agenda/>
        </div>
        <div className="pt-5" id="speakers">

          <Speakers/>
        </div>
        <div className="pt-5" id="staff">

          <Staff/>
        </div>
        <div className="pt-5" id="callofproposal">

          <Proposal />
        </div>
        <div className="pt-5" id="sponsor">

          <Sponsor/>
        </div>
          <Media/>
          <Community/>
        <Footer/>
       </div>
       
      
    );
  }
  
}

const mapStateToProps = state => {
  return{
    lang: state.Reducers.lang,
    mystate: state
  }
}

export default connect(mapStateToProps)(App);
