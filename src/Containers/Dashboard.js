import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Footer from '../Components/Footerback';
import { connect } from 'react-redux';
import { doLogout,reCreateQr } from '../Redux/action/userAction';
import Navdashboard from '../Components/Navdashboard';
import Counter from '../Components/Counter';
import Api from '../Settings/api'

const Status = (props) => {
    if(props.code === 0) return <span className="text-danger font-weight-bold">Belum Bayar</span>
    else if(props.code === 1) return <span className="text-success">Sudah Terbayar</span>
    else if(props.code === 2) return <span className="text-danger">Kode QR Kedaluwarsa</span>
}

const Qrcode = (props) => {
    return(
        <div>
            <img src={props.src} alt="QRcode Payment" width="40%"/>
        </div>
    )
}

const Paymentstatus = (props) => {
    // const datenow = new Date().getTime()
    const datenow = new Date(props.payments.created_at).getTime()
    const expireddate = new Date(props.payments.expired_date).getTime() 
    const distance = expireddate - datenow 
    // const distance = 0
    

    if(props.payments.status === 0)
    {
        if(distance < 0){
            const token = localStorage.getItem('ken_token')
            Api.setexpired(token,props.payments.user_id)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })

            return(
                <div className="my-4">
                    <p>Kode QR pembayaran Anda telah kedaluwarsa, klik tombol di bawah ini untuk membuat Kode QR Pembayaran</p>
                    <button className="btn btn-primary btn-registration" onClick={props.recreateqr}>{props.loading? "Loading..": "Buat Ulang Kode QR"}</button>
                </div>
            )
            
        }
        else{
            return(
                <div className="p-3 border text-center my-2">
                    <Status code={props.payments.status}/><br/>
                    <small>Kode QR akan kedaluwarsa dalam waktu 24 jam</small>
                    <br/>
                    <Qrcode src={props.payments.qrcode_url}/>
                    <br/>
                    <div>
                    <span className="text-danger font-weight-bold">Tenggat Waktu Pembayaran</span>
                    <Counter targetdate={props.payments.expired_date}/>
                    <p>Gunakan aplikasi MYCOOP untuk memindai kode QR di atas</p>
                    </div>
                </div>
            )
        }
    }

    if(props.payments.status === 1)
    {
        return(
            <div className="my-4">
                <div>
                    <p>Gunakan Kode QR di bawah ini untuk melakukan registrasi ulang di hari kegiatan</p>
                    <div className="text-center">
                        <img src={props.documents.qrcode_url} alt="QRCODE GNOME Asia 2019" className="img-fluid" width="200px"/>
                        {/* <img src="http://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=google.com" alt="QRCODE GNOME Asia 2019" className="img-fluid" width="400px"/> */}
                        {/* {props.documents.qrcode_url} */}
                        <p style={{lineHeight:"1.5rem"}}><strong>{props.name}<br/>GNOME.Asia Summit 2019</strong></p>
                    </div>
                </div>
                <p className="text-registration">*Salinan informasi ini juga telah kami kirim ke surel Anda.</p>
            </div>
        )
    }

    if(props.payments.status === 2)
    {
        return(
            <div className="my-4">
                <p>Kode QR pembayaran Anda telah kedaluwarsa, klik tombol di bawah ini untuk membuat Kode QR Pembayaran</p>
                <button className="btn btn-primary btn-registration my-3" onClick={props.recreateqr}>{props.loading? "Loading..": "Buat Ulang Kode QR"}</button>
            </div>
        )
    }
    
}

class Dashboard extends React.Component{
    

    render(){
        console.log(this.props.documents)
        console.log(this.props.payments)

        return(
            <div className="Page mb-5">
                <Navdashboard 
                    logout={this.props.doLogout}
                />
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4">
                                <div className="mb-1">
                                    <h3>Hai, {this.props.name}</h3><br/>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                        Alamat Surel : <span className="ml-1">{this.props.email} </span>{this.props.verified ? <span className="text-success ml-1"><i className="fas fa-check"></i></span> : <span className="text-danger ml-1">Belum diverifikasi</span>}
                                        </li>
                                        <li className="nav-item">
                                        No. HP : {`+`+this.props.phone}
                                        </li>
                                    </ul>    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div className="my-3">
                                    <h5>Kode Transaksi: <span className="text-danger font-italic">{this.props.payments.transaction_id}</span></h5>
                                    <p>Nominal Transaksi: <strong><CurrencyFormat thousandSeparator={'.'} decimalSeparator={','} suffix={',-'} prefix={'Rp'} value={this.props.payments.amount} displayType={'text'}/></strong></p>
                                </div>
                                <div>
                                    {
                                        this.props.verified ? (
                                           <Paymentstatus payments={this.props.payments}
                                           name={this.props.name}
                                           recreateqr={()=>this.props.createQr(this.props.payments.user_id)} 
                                           documents={this.props.documents}
                                           loading={this.props.loading} 
                                           />
                                        ):(
                                            <div>
                                            <p>Cek Surel Anda untuk Melakukan Verifikasi dan Dapatkan Kode QR untuk Pembayaran</p>
                                            <button onClick={()=>window.location.reload()} className="btn btn-primary btn-registration">Muat Ulang</button>
                                            </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <Footer/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        email:state.UserReducer.email,
        name: state.UserReducer.name,
        phone: state.UserReducer.phone,
        verified: state.UserReducer.verified,
        payments: state.UserReducer.payments,
        loading: state.UserReducer.loading,
        documents: state.UserReducer.documents
        
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        doLogout: () => dispatch(doLogout()),
        createQr: (userid) => dispatch(reCreateQr(userid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);