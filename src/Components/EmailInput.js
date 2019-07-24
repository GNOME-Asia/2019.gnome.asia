import React from 'react';
import { connect } from 'react-redux';

class EmailInput extends React.Component{
    constructor(props){
        super();
        this.state = {
            checkemail: false,
            emailvalid: false
        }
        
    }


    render(){
        
        return(
            <div className="form-group">
                                
                <label>Email</label>
                <input type="email" 
                className={this.state.checkemail ? this.state.emailvalid ? "form-control is-valid" : "form-control is-invalid" :"form-control"}
                value={this.props.value}
                onChange={this.props.onChangeValue}
                
                required/>
                {
                    this.state.emailvalid ? 
                    <div className="valid-feedback">
                        Email Available
                    </div>
                    :
                    <div className="invalid-feedback">
                    Email Not Available!
                </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        email: state.UserReducer.email
    }
}

export default connect(mapStateToProps,null)(EmailInput);