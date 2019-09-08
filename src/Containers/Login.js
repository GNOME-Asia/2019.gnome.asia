import React from 'react';
import { Link } from 'react-router-dom';
import gnome from '../assets/photo_2019-07-10 19.01.08.jpeg';
import Footerback from '../Components/Footerback';
import Buttonsubmit from '../Components/Buttonsubmit';
import { connect } from 'react-redux'; 
import { doLogin } from '../Redux/action/userAction';

class Login extends React.Component{
    constructor(props){
        super();

        this.state = {
            loading: false,
            email:'',
            password:''
        }

        this._inputEmail = this._inputEmail.bind(this)
        this._inputPassword = this._inputPassword.bind(this)
        this._handleForm = this._handleForm.bind(this)
    }

    _inputEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    _inputPassword(e){
        this.setState({
            password:e.target.value
        })
    }

    _handleForm(e){
        e.preventDefault()
        this.props.doLogin(this.state.email,this.state.password)
    }

    render(){
        return(
            <div className="Page mb-5 mt-3">
                <div className="container py-3">
                    <h1>Login</h1>    
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="px-5">
                                <img src={gnome} className="img-fluid" alt="GNOME Asia Summit 2019" />
                            </div>
                        </div>
                        <div className="col-md-4 pt-5">
                        {this.props.error ?  <div className="text-danger mb-3"><b><i className="far fa-times-circle mr-3"></i> {this.props.error}</b></div>:null}
                            <form onSubmit={this._handleForm}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" className="form-control"
                                    placeholder="example@example.com"
                                    value={this.state.email}
                                    onChange={this._inputEmail}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" className="form-control"
                                    placeholder="········"
                                    value={this.state.password}
                                    onChange={this._inputPassword}
                                    required/>
                                </div>
                                <br/>
                                <Buttonsubmit 
                                    class="btn btn-block btn-primary btn-rounded"
                                    text="Sign in"
                                    loading={this.props.loading}
                                />
                            </form>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <span>Already have an account?</span>
                                <Link className="ml-2" to="/registration">Register</Link>
                            </div>
                        </div>
                    </div>
                    <Footerback/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loading: state.UserReducer.loading,
        error: state.UserReducer.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        doLogin: (email,password) => dispatch(doLogin(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);