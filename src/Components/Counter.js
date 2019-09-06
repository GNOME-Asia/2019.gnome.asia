import React from 'react';


class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // targetdate: new Date("Aug 15, 2019 15:37:25").getTime(),
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
            distance:0
        }
    }

    componentDidMount(){
       this.interval =  setInterval(() => {
            let now = new Date().getTime();
            let target = new Date(this.props.targetdate).getTime()
            // Find the distance between now and the count down date
            // let distance = this.state.targetdate - now;
            let distance = target - now;


            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 1000){
                this.setState({
                    days: 0,
                    hours:0,
                    minutes:0,
                    seconds:0,
                    distance:distance
                })
            }
            else{
                this.setState({
                    days: days,
                    hours:hours,
                    minutes:minutes,
                    seconds:seconds,
                    distance:distance
                })
            }
        }, 1000);
    }

    componentDidUpdate(prevProps,PrevState){
        if(this.state.distance < 1000){
            clearInterval(this.interval)
        }
        // console.log(this.state.distance)
    }

    compo
    
    componentWillUnmount(){
        if(this.state.distance <= 1000){

            clearInterval(this.interval)
            
        }
        clearInterval(this.interval)
    }

    render(){
        
        return(
            <div>
                <span className="px-1">{this.state.days} <b><i>Days</i></b></span>
                <span className="px-1">{this.state.hours} <b><i>Hours</i></b></span>
                <span className="px-1">{this.state.minutes} <b><i>Min</i></b></span>
                <span className="px-1">{this.state.seconds} <b><i>Sec</i></b></span>
            </div>
        );
    }
}


export default Counter;