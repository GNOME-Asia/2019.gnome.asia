import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
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
import Loading from './Components/Loading';
import { 
  HashRouter as Router
  // BrowserRouter as Router
  ,Switch,Route,Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = React.lazy(()=>import('./Containers/Dashboard'));
const Login = React.lazy(()=>import('./Containers/Login'));
const Registration = React.lazy(()=>import('./Containers/Registration'));


const content = () => {
  return(
    <div>
          <Navigation/>
          <div className="py-3" id="home">
            <Home/>
          </div>
          <div className="pt-5" id="venue">
            <Venue />
          </div>
          <Cityinformation/>
          <div className="pt-5" id="speakers">
            <Speakers/>
          </div>
          <div className="pt-5" id="schedule">
            <Agenda/>
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
  )
}

const Dashboardroute= ({component: Component, ...props}) => {
  return(
    <Route 
      render={
        ()=> props.islogin ? (
        <React.Suspense fallback={<Loading/>}>

          <Component />
        </React.Suspense>
        ):(<Redirect to={{ pathname:'/login' }}/>)
      }
    />
  )
}

const LoginRoute = ({component:Component, ...props}) => {
  return(
    <Route
      render={
        ()=> props.islogin ? <Redirect to={{ pathname:'/dashboard' }}/> : 
        <React.Suspense fallback={<Loading/>} >

          <Component />
        </React.Suspense>
      }
    />
  )
}

const Registrationroute = ({component:Component, ...props}) => {
  return(
    <Route
      render={
        ()=> props.islogin ? <Redirect to={{ pathname:'/dashboard' }}/> : 
        <React.Suspense fallback={<Loading/>}>
          <Component />
        </React.Suspense>
      }
    />
  )
}
class App extends React.Component {
  render(){
    return (
      <Router>
       <div className="App">
       <Switch>
        <Route path="/" exact component={content} />
        <Registrationroute islogin={this.props.islogin} path="/registration" component={Registration} />
        <LoginRoute islogin={this.props.islogin} path="/login" component={Login}/>
        <Dashboardroute  islogin={this.props.islogin} path="/dashboard" component={Dashboard} />
        {/* <Route component={Notfound}/> */}
        </Switch>
       </div>
      </Router>
    );
  }
  
}

const mapStateToProps = state => {
  return{
    islogin: state.UserReducer.islogin
  }
}

export default connect(mapStateToProps,null)(App);
