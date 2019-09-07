import React from 'react';
import String from '../Components/Contents';
import Carousel from '../Components/Carousel';
import News from '../Components/News';
class Home extends React.Component{  
    render(){
        

        return(
            <div className="Page pt-5">
                <br/>
                <Carousel/>
                <div className="container my-3">
                    <h2>News</h2>
                    <hr/>
                    <News title={String.home.news.cfpjudul} content={String.home.news.cfpcontent} link={String.home.news.cfplink}/>
                    <News title={String.home.news.pengumumanjudul} content={String.home.news.pengumumancontent} link={String.home.news.pengumumanlink}/>
                    <News title={String.home.news.logo} content={String.home.news.logocontent} link={String.home.news.logolink}/>
                    <News title={String.home.news.tuanrumah} content={String.home.news.tuanrumahcontent} link={String.home.news.tuanrumahlink}/>
                    
                </div>
                
            </div>
                
        );
    }


}


export default Home
