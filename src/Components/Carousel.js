import React from 'react';
import imgsatu from '../assets/P1160835.JPG';
// import imgdua from '../assets/photo_2019-07-01 07.22.45.jpeg';
// import imgtiga from '../assets/photo_2019-07-01 07.22.52.jpeg';
// import imgempat from '../assets/photo_2019-07-01 07.22.59.jpeg';




class Carousel extends React.Component{
    render(){
        return(
            <div>
                <img src={imgsatu} className="img-fluid" alt="Kota Gresik"/>
            </div>
        )
    }
}

export default Carousel;