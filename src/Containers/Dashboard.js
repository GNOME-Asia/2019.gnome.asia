import React from 'react';
import Footer from '../Components/Footerback';
import { connect } from 'react-redux';
import { doLogout } from '../Redux/action/userAction';
import Navdashboard from '../Components/Navdashboard';
import Counter from '../Components/Counter';


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

class Dashboard extends React.Component{
    render(){
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
                                <div>
                                    {
                                        this.props.verified ? (
                                            this.props.payments.map((item,key) => {
                                                if(item.status === 0 ){
                                                    return (
                                                        <div key={key} className="p-3 border text-center my-2">
                                                            <h4>Rp. {item.amount}</h4>
                                                            <Status code={item.status}/><br/>
                                                            <small>QrCode akan expired dalam waktu 1x24 jam</small>
                                                            <br/>
                                                            <Qrcode src={item.qrcode_url}/>
                                                            <br/>
                                                            <div>
                                                            <span className="text-danger font-weight-bold">QR code Expired in</span>
                                                            <Counter targetdate={item.expired_date}/> 
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                else if(item.status === 1){
                                                    return(
                                                        <div className="my-4" key={key}>
                                                        <h4>Kode Registrasi & QR code telah dikirim ke Email Anda</h4>
                                                        <span>Terima Kasih telah melakukan pembayaran di Mycoop</span>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return(
                                                        <div className="my-4" key={key}>
                                                            <h4>QR Code pembayaran anda telah Expired, klik dibawah untuk membuat QRcode pembayaran</h4>
                                                            <button>Request Qr Code</button>
                                                        </div>
                                                    )
                                                }
                                            } )
                                            
                                        ):(<p>Check your Email for Verify & Get Payment QRcode</p>)
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
        payments: state.UserReducer.payments
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        doLogout: () => dispatch(doLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);