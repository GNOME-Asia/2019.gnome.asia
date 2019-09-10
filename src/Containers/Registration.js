import React from 'react';
import { connect } from 'react-redux';
import EmailInput from '../Components/EmailInput';
import gnome from '../assets/2019_logo.jpeg';
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
            asal:'',
            amount:'100000',
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
            loading:false,
            ticket: 1,
            showupload: false,
            kaos:'M',
            file:{
                selected:'',
                load: 0
            }
            
        }

        this._inputName = this._inputName.bind(this);
        this._inputEmail = this._inputEmail.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._inputPassword = this._inputPassword.bind(this);
        this._inputConfirm = this._inputConfirm.bind(this);
        this._countryCode = this._countryCode.bind(this)
        this._phone = this._phone.bind(this)
        this._asal = this._asal.bind(this)
        this._amount = this._amount.bind(this)
        this._kaos = this._kaos.bind(this)
        this._uploadKtm = this._uploadKtm.bind(this)

    }

    _uploadKtm(e){
        // console.log(e.target.files[0])
        this.setState({
            file:{
                selected:e.target.files[0],
                load: 0
            }
        })

        console.log(e.target.files[0])
    }

    _kaos(e){
        this.setState({
            kaos: e.target.value
        })
    }
    _amount(e){
        console.log(e.target.value)
        if(e.target.value === '1'){
            this.setState({
                amount:100000,
                ticket: 1,
                showupload: false
            })
        }
        else if(e.target.value === '2'){
            this.setState({
                amount:50000,
                ticket: 2,
                showupload: true
            })
        }
        
    }
    _asal(e){
        this.setState({
            asal: e.target.value
        })
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
            this.props.doregister(this.state.name,this.state.email,telp,this.state.password,this.state.asal,this.state.amount,this.state.kaos,this.state.ticket,this.state.file.selected)
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
        console.log(this.state.kaos)
        return(
            <div className="Page mb-5 mt-3">
                <div className="container py-3">
                    <h1>Registrasi</h1>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="px-5">
                                <img src={gnome} className="img-fluid" alt="GNOME Asia Summit 2019" />
                            </div>
                            <div className="px-5">
                                <p>
                                    <span className="text-registration"><strong>Special Note:</strong></span><br/>
                                    This registration form is only for Indonesian citizens. <br/>
                                    If you are from outside Indonesia, please register by sending an email to <br/>
                                    <strong><a className="text-dark" target="__blank" href="mailto:humas@gnome.id?subject=GNOME.Asia Registration">humas@gnome.id</a></strong> with the subject <strong>"GNOME.Asia Registration"</strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-5">
                            {this.props.error ?  <div className="text-danger mb-3"><b><i className="far fa-times-circle mr-3"></i> {this.props.error} - {this.props.errmsg}</b></div>:null}
                            <form onSubmit={this._handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nama Lengkap</label>
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
                                    <label htmlFor="asal">Nama Instansi/Sekolah/Personal</label>
                                    <input id="asal" value={this.state.asal} onChange={this._asal} className="form-control" placeholder="Universitas Gatot Kaca" required/>
                                </div>
                                <div className="form-group">
                                    <span>Jenis Tiket</span>
                                    <br/><br/>
                                    <div className="form-check form-check-inline ml-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="umum" value="1" onChange={this._amount} defaultChecked/>
                                        <label className="form-check-label" htmlFor="umum">Umum - Rp100.000,-</label>
                                    </div>
                                    <br/>
                                    <div className="form-check form-check-inline ml-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="mahasiswa" value="2" onChange={this._amount}/>
                                        <label className="form-check-label" htmlFor="mahasiswa">Mahasiswa - Rp50.000,-</label>
                                    </div>
                                    <div className={this.state.showupload ? null : 'd-none'}>
                                        <div className="form-group mt-3 ml-3">
                                            <label htmlFor="filektm">Unggah Kartu Pelajar</label>
                                            <input type="file" className="form-control-file" id="filektm"  onChange={this._uploadKtm}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span>Ukuran Kaos</span>
                                    <br/><br/>
                                    <div className="form-check form-check-inline ml-3">
                                        <input className="form-check-input" type="radio" id="sizem" name="kaos" value="M" onChange={this._kaos} defaultChecked/>
                                        <label className="form-check-label" htmlFor="sizem">M</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="sizel" name="kaos" value="L" onChange={this._kaos}/>
                                        <label className="form-check-label" htmlFor="sizel">L</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="sizexl" name="kaos" value="XL" onChange={this._kaos}/>
                                        <label className="form-check-label" htmlFor="sizexl">XL</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="sizaxxl" name="kaos" value="XXL" onChange={this._kaos}/>
                                        <label className="form-check-label" htmlFor="sizaxxl">XXL</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="sizexxxl" name="kaos" value="XXXL" onChange={this._kaos}/>
                                        <label className="form-check-label" htmlFor="sizexxxl">XXXL</label>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="password">Sandi</label>
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
                                            Minimum 8 karakter
                                        </div>

                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm">Ketik Ulang Sandi</label>
                                    <input id="confirm" type="password" 
                                    className={this.state.matchpassword.check ? (this.state.matchpassword.match ? "form-control is-valid" : "form-control is-invalid") :"form-control"}
                                    value={this.state.confirm}
                                    onChange={this._inputConfirm}
                                    placeholder="········"
                                    required/>
                                    {
                                        this.state.matchpassword.match && this.state.matchpassword.check ? 
                                        <div className="valid-feedback">
                                        Sandi Cocok
                                        </div>
                                        :
                                        <div className="invalid-feedback">
                                            Tidak Cocok!
                                        </div>
                                    }
                                </div>

                                <Buttonsubmit 
                                    class="btn btn-block btn-primary btn-rounded btn-registration"
                                    text="Daftar"
                                    loading={this.props.loading}
                                />
                                
                            </form>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <span>Sudah punya akun?</span>
                                <Link className="text-registration ml-2" to="/login">Masuk</Link>
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
        error: state.UserReducer.error,
        errmsg: state.UserReducer.errmsg
    }
}

const mapDispatchToProps = dispatch => {
    return{
        doregister: (name,email,phone,password,asal,amount,kaos,ticket,ktm) => dispatch(doRegister(name,email,phone,password,asal,amount,kaos,ticket,ktm)),
        doLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
