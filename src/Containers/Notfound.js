import React from 'react';
import String from '../Components/Contents';
import { connect } from 'react-redux';

const Notfound = (props) =>{
    String.setLanguage(props.lang)
    return(
        <div className="Page pt-5 text-center">
            <div className="d-flex align-items-center" style={{ height:'85vh'}}>
                <div className="container">

                <h1>{String.notfound}</h1>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        lang: state.Reducers.lang
    }
}

export default connect(mapStateToProps,null)(Notfound);