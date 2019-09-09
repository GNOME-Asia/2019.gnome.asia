import React from 'react';
import Footer from '../Components/Footerback';
import { connect } from 'react-redux';
import { doLogout,reCreateQr } from '../Redux/action/userAction';
import Navdashboard from '../Components/Navdashboard';
import Counter from '../Components/Counter';
import Api from '../Settings/api'

const Status = (props) => {
    if(props.code === 0) return <span className="text-danger font-weight-bold">Belum Bayar</span>
    else if(props.code === 1) return <span className="text-success">Sudah Terbayar</span>
    else if(props.code === 2) return <span className="text-danger">QR CODE EXPIRED</span>
}

const Qrcode = (props) => {
    return(
        <div>
            <img src={props.src} alt="QRcode Payment" width="40%"/>
        </div>
    )
}

const Paymentstatus = (props) => {
    const datenow = new Date().getTime()
    const expireddate = new Date(props.payments.expired_date).getTime() 
    const distance = expireddate - datenow 
    // const distance = 0

    if(props.payments.status === 0)
    {
        if(distance > 0 ){
            return(
                <div className="p-3 border text-center my-2">
                    <Status code={props.payments.status}/><br/>
                    <small>QrCode akan expired dalam waktu 1x24 jam</small>
                    <br/>
                    <Qrcode src={props.payments.qrcode_url}/>
                    <br/>
                    <div>
                    <span className="text-danger font-weight-bold">QR code Expired in</span>
                    <Counter targetdate={props.payments.expired_date}/> 
                    </div>
                </div>
            )
        }
        else{
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
                    <h4>QR Code pembayaran anda telah Expired, klik dibawah untuk membuat QRcode pembayaran</h4>
                    <button onClick={props.recreateqr}>{props.loading? "Loading..": "Re-create QRcode"}</button>
                </div>
            )
        }
    }

    if(props.payments.status === 1)
    {
        return(
            <div className="my-4">
                <div>
                    <p>Berikut QR Code untuk Registrasi ulang Acara</p>
                    <img src={props.documents.qrcode_url} alt="QRCODE GNOME Asia 2019" className="img-fluid" width="200px"/>
                    {/* <img src="http://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=google.com" alt="QRCODE GNOME Asia 2019" className="img-fluid" width="400px"/> */}
                    {/* {props.documents.qrcode_url} */}
                </div>
                <p>Kode Registrasi & QR code juga telah dikirim ke Email Anda.<br/>Terima Kasih</p>
            </div>
        )
    }

    if(props.payments.status === 2)
    {
        return(
            <div className="my-4">
                <h4>QR Code pembayaran anda telah Expired, klik dibawah untuk membuat QRcode pembayaran</h4>
                <button onClick={props.recreateqr}>{props.loading? "Loading..": "Re-create QRcode"}</button>
            </div>
        )
    }
    
}

class Dashboard extends React.Component{
    

    render(){
        // console.log(this.props.documents)

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
                                    <h3>Hello, {this.props.name}</h3><br/>
                                    <p>
                                    {this.props.email} {this.props.verified ? <span className="text-success ml-1">Verified</span> : <span className="text-danger ml-1">Not Verified</span>}
                                    <br/>
                                    {`+`+this.props.phone}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <span>Registration Payments</span>
                            <div>
                                <span>Scan Qrcode with Mycoop Apps</span>
                                <div className="my-3">
                                    <h4>Transaction ID: <span className="text-danger font-italic">{this.props.payments.transaction_id}</span> - Rp. {this.props.payments.amount}</h4>
                                </div>
                                <div>
                                    {
                                        this.props.verified ? (
                                           <Paymentstatus payments={this.props.payments} 
                                           recreateqr={()=>this.props.createQr(this.props.payments.user_id)} 
                                           documents={this.props.documents}
                                           loading={this.props.loading} 
                                           />
                                        ):(
                                            <div>
                                            <p>Check your Email for Verify & Get Payment QRcode</p>
                                            <button onClick={()=>window.location.reload()} className="btn btn-primary">Reload</button>
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