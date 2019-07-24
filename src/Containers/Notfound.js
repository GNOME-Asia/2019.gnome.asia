import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = (props) =>{
    
    return(
        <div className="Page pt-5 text-center">
            <div className="d-flex align-items-center" style={{ height:'85vh'}}>
                <div className="container">

                <h1>| Page Not Found |</h1>
                <Link to="/">Go back</Link>
                </div>
            </div>
        </div>
    )
}



export default Notfound;