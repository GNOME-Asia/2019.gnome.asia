import React from 'react';
import {Link} from 'react-router-dom';

class Footerback extends React.Component{
    render(){
        return(
            <div className="fixed-bottom py-3 shadow">
                <div className="d-flex justify-content-center">
                <Link to="/" className="back-link"><i className="fas fa-arrow-circle-left mr-1"></i> Halaman Beranda</Link>
                </div>
            </div>
        );
    }
}

export default Footerback;