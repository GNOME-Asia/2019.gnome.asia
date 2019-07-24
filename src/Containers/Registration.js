import React from 'react';
import { connect } from 'react-redux';
import EmailInput from '../Components/EmailInput';
class Registration extends React.Component{
    constructor(props){
        super();

        this.state = {
            name:'',
            email:'',
            password:'',
            passlength:{
                check:false,
                match:false
            },
            confirm:'',
            matchpassword:{
                check:false,
                match:false
            }
            
        }

        this._inputName = this._inputName.bind(this);
        this._inputEmail = this._inputEmail.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._inputPassword = this._inputPassword.bind(this);
        this._inputConfirm = this._inputConfirm.bind(this);
        
    }

    _inputName(e){
        this.setState({
            name:e.target.value
        })
    }
    _inputEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    _handleSubmit(e){
        e.preventDefault();

        console.log(e)
    }
    
    _inputPassword(e){
        this.setState({
            password:e.target.value
        })
    }
    _inputConfirm(e){       
        this.setState({
            confirm:e.target.value
        })
    }
    
    componentDidUpdate(prevProps,prevState){

        if(prevState.password !== this.state.password){
            if(this.state.password.length < 8 ){
                this.setState({
                    passlength:{
                        check:true
                    }
                })
            }
            else{
                this.setState({
                    passlength:{
                        check:true,
                        match:true
                    }
                })
            }
        }


        if(prevState.confirm !== this.state.confirm){
            
            if(this.state.password === this.state.confirm){
                this.setState({
                    matchpassword:{
                        check:true,
                        match:true
                    }
                })
            }
            else{
                this.setState({
                    matchpassword:{
                        check:true
                    }
                })
            }
        }
    }
    
    render(){        
        
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h1>Registration</h1>
                    <hr/>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <form onSubmit={this._handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="Text" className="form-control" 
                                    value={this.state.name} 
                                    onChange={this._inputName}
                                    required/>
                                    
                                </div>
                                <EmailInput 
                                    value={this.state.email}
                                    onChangeValue={this._inputEmail}
                                />
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" 
                                    className={this.state.passlength.check ? (this.state.passlength.match ? "form-control is-valid":"form-control is-invalid") : "form-control"} 
                                    value={this.state.password}
                                    onChange={this._inputPassword}
                                    required/>
                                    {
                                        this.state.passlength < 8 && this.state.passlength.check ? 
                                        null
                                        :
                                        <div className="invalid-feedback">
                                            Minimum 8 character
                                        </div>

                                    }
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" 
                                    className={this.state.matchpassword.check ? (this.state.matchpassword.match ? "form-control is-valid" : "form-control is-invalid") :"form-control"}
                                    value={this.state.confirm}
                                    onChange={this._inputConfirm}
                                    required/>
                                    {
                                        this.state.matchpassword.match && this.state.matchpassword.check ? 
                                        <div className="valid-feedback">
                                        Password Match
                                        </div>
                                        :
                                        <div className="invalid-feedback">
                                            Not Match!
                                        </div>
                                    }
                                </div>
                                
                                
                                
                                <button className="btn btn-block btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return{
        user: state.UserReducer.user
    }
}


export default connect(mapStateToProps,null)(Registration);
// export default Registration;