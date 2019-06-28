import React from 'react';
import String from '../Components/Contents';
import gresik from '../assets/gresik2.jpg';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Home extends React.Component{

    componentDidMount(){
        
        this.props.setloc(this.props.location)
    }
    
    render(){
        
        String.setLanguage(this.props.lang)
        
        return(
            <div className="Page my-5">
                <div className="py-2">
{/* 
                <img src={gresik} className="img-fluid" alt="Gresik City" /> */}
                </div>
                <div className="container my-3">
                    <h2>{String.home.news.title}</h2>
                    <hr/>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>{String.home.news.logo}</h5>
                        <p>
                        {String.home.news.logocontent}
                        <br/>
                        <span><a href={String.home.news.logolink} target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>{String.home.news.tuanrumah}</h5>
                        <p>
                        {String.home.news.tuanrumahcontent}
                        <br/>
                        <span><a href={String.home.news.tuanrumahlink} target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    
                </div>
                
            </div>
                
        );
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


export default connect(mapStateToProps,mapDispatchToProps)(Home)
