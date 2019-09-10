import React from 'react';

class Loading extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{ height:'100vh' }}>
                <div className="spinner-grow text-primary" style={{ width:'8rem',height:'8rem' }} role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loading;