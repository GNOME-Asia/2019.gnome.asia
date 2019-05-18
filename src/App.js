import React from 'react';
import {
  BrowserRouter,Route,Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { connect } from 'react-redux';

import Navigation from './Components/Navigation';
import Home from './Containers/Home';
import Venue from './Containers/Venue';
import Notfound from './Containers/Notfound';
import Footer from './Components/Footer';
import Sponsor from './Containers/Sponsor';
import Agenda from './Containers/Agenda';
import Registration from './Containers/Registration';
import Staff from './Containers/Staff';



class App extends React.Component {
  
  render(){
    
    let lang = this.props.lang
    return (
      <BrowserRouter>
       <div className="App">
        <Navigation />
        
          <Switch>
            <Route exact path="/" component={() => <Home lang={lang} location="home"/>} />
            <Route path="/venue" component={() => <Venue lang={lang} location="venue"/>} />
            <Route path="/registration" component={() => <Registration lang={lang} location="registration"/>} />
            <Route path="/agenda" component={() => <Agenda lang={lang} location="agenda"/>} />
            <Route path="/staff" component={() => <Staff lang={lang} location="staff"/>} />
            <Route path="/sponsor" component={() => <Sponsor lang={lang} location="sponsor"/>} />
            <Route path="/registration"  component={Notfound} />
            <Route component={Notfound} />
          </Switch>
          <Footer/>
       </div>
        
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return{
    lang: state.Reducers.lang
  }
}

export default connect(mapStateToProps)(App);
