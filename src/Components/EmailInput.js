 import React from 'react';

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
                                
                <label htmlFor="email">Email</label>
                <input id="email" type="email" 
                className={this.state.checkemail ? this.state.emailvalid ? "form-control is-valid" : "form-control is-invalid" :"form-control"}
                value={this.props.value}
                onChange={this.props.onChangeValue}
                placeholder="example@example.com"
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

export default EmailInput;