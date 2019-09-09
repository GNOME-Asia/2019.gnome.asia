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
                                
                <label htmlFor="email">Alamat Surel</label>
                <input id="email" type="email" 
                className={this.state.checkemail ? this.state.emailvalid ? "form-control is-valid" : "form-control is-invalid" :"form-control"}
                value={this.props.value}
                onChange={this.props.onChangeValue}
                placeholder="example@example.com"
                required/>
                {
                    this.state.emailvalid ? 
                    <div className="valid-feedback">
                        Alamat surel tersedia
                    </div>
                    :
                    <div className="invalid-feedback">
                    Alamat Surel tidak tersedia!
                </div>
                }
                
            </div>
        )
    }
}

export default EmailInput;