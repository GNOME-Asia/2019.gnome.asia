import React from 'react';
import String from '../Components/Contents';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';
import Carousel from '../Components/Carousel';
class Home extends React.Component{  
    render(){
        String.setLanguage(this.props.lang)

        return(
            <div className="Page pt-5">
                <br/>
                <Carousel/>
                <div className="container my-3">
                    <h2>{String.home.news.title}</h2>
                    <hr/>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>{String.home.news.cfpjudul}</h5>
                        <p>
                        {String.home.news.cfpcontent}
                        <br/>
                        <span><a href={String.home.news.cfplink} target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>{String.home.news.pengumumanjudul}</h5>
                        <p>
                        {String.home.news.pengumumancontent}
                        <br/>
                        <span><a href={String.home.news.pengumumanlink} target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
                    <div className="my-5">
                        <h5 style={{ fontWeight:'bold' }}>{String.home.news.logo}</h5>
                        <p>
                        {String.home.news.logocontent}
                        <br/>
                        <span><a href={String.home.news.logolink} target="__blank">{String.etc.more}</a></span>
                        </p>
                    </div>
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
