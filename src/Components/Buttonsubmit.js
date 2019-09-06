import React from 'react';


class Button extends React.Component{
    render(){
        
        return(
            <div>
                <button type="submit" className={ this.props.loading ? this.props.class+" disabled" :this.props.class}>
                {
                    this.props.loading ? 
                    (<div>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </div>)
                    :
                    this.props.text
                    }
                </button>
            </div>
        )
    }
}

export default Button