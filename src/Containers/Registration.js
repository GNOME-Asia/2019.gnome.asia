import React from 'react';
import { connect } from 'react-redux';
import EmailInput from '../Components/EmailInput';
import gnome from '../assets/photo_2019-07-10 19.01.08.jpeg';
import { Link } from 'react-router-dom';
import Footerback from '../Components/Footerback';
import Buttonsubmit from '../Components/Buttonsubmit';
import { doRegister,doLogout } from '../Redux/action/userAction';
import PhoneInput from '../Components/PhoneInput';
class Registration extends React.Component{
    constructor(props){
        super();

        this.state = {
            name:'',
            email:'',
            countrycode: '',
            phone:'',
            password:'',
            confirm:'',
            passlength:{
                check:false,
                match:false
            },
            matchpassword:{
                check:false,
                match:false
            },
            data:'',
            loading:false
            
        }

        this._inputName = this._inputName.bind(this);
        this._inputEmail = this._inputEmail.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._inputPassword = this._inputPassword.bind(this);
        this._inputConfirm = this._inputConfirm.bind(this);
        this._countryCode = this._countryCode.bind(this)
        this._phone = this._phone.bind(this)

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

    async _handleSubmit(e){
        e.preventDefault();
        if(this.state.matchpassword.match){
            const telp = this.state.countrycode+this.state.phone
            this.props.doregister(this.state.name,this.state.email,telp,this.state.password)
        }

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

    _countryCode(code){
        this.setState({
            countrycode: code
        })
    }
    
    _phone(phone){
        this.setState({
            phone: phone
        })
    }
    
    

    render(){  
        console.log("Kode Negara: " +this.state.countrycode + this.state.phone)
        return(
            <div className="Page mb-5 mt-3">
                <div className="container py-3">
                    <h1>Registration</h1>
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
                            <form onSubmit={this._handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="Text" className="form-control" 
                                    placeholder="Gatot Kaca"
                                    value={this.state.name} 
                                    onChange={this._inputName}
                                    required/>
                                    
                                </div>
                                <EmailInput 
                                    value={this.state.email}
                                    onChangeValue={this._inputEmail}
                                />
                                <PhoneInput
                                    countrycode={this.state.countrycode}
                                    phone={this.state.phone}
                                    onChangeCode={this._countryCode}
                                    onChangePhone={this._phone}
                                />
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" 
                                    className={this.state.passlength.check ? (this.state.passlength.match ? "form-control is-valid":"form-control is-invalid") : "form-control"} 
                                    value={this.state.password}
                                    onChange={this._inputPassword}
                                    placeholder="········"
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
                                    <label htmlFor="confirm">Confirm Password</label>
                                    <input id="confirm" type="password" 
                                    className={this.state.matchpassword.check ? (this.state.matchpassword.match ? "form-control is-valid" : "form-control is-invalid") :"form-control"}
                                    value={this.state.confirm}
                                    onChange={this._inputConfirm}
                                    placeholder="········"
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

                                <Buttonsubmit 
                                    class="btn btn-block btn-primary btn-rounded"
                                    text="Sign up"
                                    loading={this.props.loading}
                                />
                                
                            </form>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <span>Already have an account?</span>
                                <Link className="ml-2" to="/login">Login</Link>
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
        name: state.UserReducer.name,
        loading:state.UserReducer.loading,
        error: state.UserReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doregister: (name,email,phone,password) => dispatch(doRegister(name,email,phone,password)),
        doLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
