(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,a,t){"use strict";var n=t(8),r=t(9),l=t(11),s=t(10),c=t(12),i=t(0),m=t.n(i),o=t(37),u=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"fixed-bottom py-3 shadow"},m.a.createElement("div",{className:"d-flex justify-content-center"},m.a.createElement(o.Link,{to:"/",className:"back-link"},m.a.createElement("i",{className:"fas fa-arrow-circle-left mr-1"})," Halaman Beranda")))}}]),a}(m.a.Component);a.a=u},158:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),l=t(11),s=t(10),c=t(12),i=t(0),m=t.n(i),o=t(154),u=t.n(o),d=t(152),p=t(29),E=t(40),b=t(37),h=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{style:f.container},m.a.createElement("nav",{className:"navbar"},m.a.createElement(b.Link,{className:"navbar-brand",to:"/dashboard",style:f.text},"Dasbor Registrasi"),m.a.createElement("ul",{className:"navbar-nav ml-auto"},m.a.createElement("li",{className:"nav-item"},m.a.createElement("button",{className:"btn btn-sm btn-link",style:f.text,onClick:this.props.logout},m.a.createElement("i",{className:"fas fa-sign-out-alt"})," Keluar")))))}}]),a}(m.a.Component),f={container:{backgroundColor:"#2d3436"},text:{color:"#ecf0f1"}},v=h,k=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0,distance:0},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var a=(new Date).getTime(),t=new Date(e.props.targetdate).getTime()-a,n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);t<1e3?e.setState({days:0,hours:0,minutes:0,seconds:0,distance:t}):e.setState({days:n,hours:r,minutes:l,seconds:s,distance:t})},1e3)}},{key:"componentDidUpdate",value:function(e,a){this.state.distance<1e3&&clearInterval(this.interval)}},{key:"componentWillUnmount",value:function(){this.state.distance<=1e3&&clearInterval(this.interval),clearInterval(this.interval)}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("span",{className:"px-1"},this.state.days," ",m.a.createElement("b",null,m.a.createElement("i",null,"Hari"))),m.a.createElement("span",{className:"px-1"},this.state.hours," ",m.a.createElement("b",null,m.a.createElement("i",null,"Jam"))),m.a.createElement("span",{className:"px-1"},this.state.minutes," ",m.a.createElement("b",null,m.a.createElement("i",null,"Menit"))),m.a.createElement("span",{className:"px-1"},this.state.seconds," ",m.a.createElement("b",null,m.a.createElement("i",null,"Detik"))))}}]),a}(m.a.Component),y=t(26),g=function(e){return 0===e.code?m.a.createElement("span",{className:"text-danger font-weight-bold"},"Belum Bayar"):1===e.code?m.a.createElement("span",{className:"text-success"},"Sudah Terbayar"):2===e.code?m.a.createElement("span",{className:"text-danger"},"Kode QR Kedaluwarsa"):void 0},N=function(e){return m.a.createElement("div",null,m.a.createElement("img",{src:e.src,alt:"QRcode Payment",width:"40%"}))},O=function(e){var a=(new Date).getTime(),t=new Date(e.payments.expired_date).getTime()-a;if(0===e.payments.status){if(t<0){var n=localStorage.getItem("ken_token");return y.a.setexpired(n,e.payments.user_id).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),m.a.createElement("div",{className:"my-4"},m.a.createElement("p",null,"Kode QR pembayaran Anda telah kedaluwarsa, klik tombol di bawah ini untuk membuat Kode QR Pembayaran"),m.a.createElement("button",{className:"btn btn-primary btn-registration",onClick:e.recreateqr},e.loading?"Loading..":"Buat Ulang Kode QR"))}return m.a.createElement("div",{className:"p-3 border text-center my-2"},m.a.createElement(g,{code:e.payments.status}),m.a.createElement("br",null),m.a.createElement("small",null,"Kode QR akan kedaluwarsa dalam waktu 24 jam"),m.a.createElement("br",null),m.a.createElement(N,{src:e.payments.qrcode_url}),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("span",{className:"text-danger font-weight-bold"},"Tenggat Waktu Pembayaran"),m.a.createElement(k,{targetdate:e.payments.expired_date}),m.a.createElement("p",null,"Gunakan aplikasi MYCOOP untuk memindai kode QR di atas")))}return 1===e.payments.status?m.a.createElement("div",{className:"my-4"},m.a.createElement("div",null,m.a.createElement("p",null,"Gunakan Kode QR di bawah ini untuk melakukan registrasi ulang di hari kegiatan"),m.a.createElement("div",{className:"text-center"},m.a.createElement("img",{src:e.documents.qrcode_url,alt:"QRCODE GNOME Asia 2019",className:"img-fluid",width:"200px"}),m.a.createElement("p",{style:{lineHeight:"1.5rem"}},m.a.createElement("strong",null,e.name,m.a.createElement("br",null),"GNOME.Asia Summit 2019")))),m.a.createElement("p",{className:"text-registration"},"*Salinan informasi ini juga telah kami kirim ke surel Anda.")):2===e.payments.status?m.a.createElement("div",{className:"my-4"},m.a.createElement("p",null,"Kode QR pembayaran Anda telah kedaluwarsa, klik tombol di bawah ini untuk membuat Kode QR Pembayaran"),m.a.createElement("button",{className:"btn btn-primary btn-registration my-3",onClick:e.recreateqr},e.loading?"Loading..":"Buat Ulang Kode QR")):void 0},w=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.payments),m.a.createElement("div",{className:"Page mb-5"},m.a.createElement(v,{logout:this.props.doLogout}),m.a.createElement("div",{className:"container"},m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"p-4"},m.a.createElement("div",{className:"mb-1"},m.a.createElement("h3",null,"Hai, ",this.props.name),m.a.createElement("br",null),m.a.createElement("ul",{className:"nav flex-column"},m.a.createElement("li",{className:"nav-item"},"Alamat Surel : ",m.a.createElement("span",{className:"ml-1"},this.props.email," "),this.props.verified?m.a.createElement("span",{className:"text-success ml-1"},m.a.createElement("i",{className:"fas fa-check"})):m.a.createElement("span",{className:"text-danger ml-1"},"Belum diverifikasi")),m.a.createElement("li",{className:"nav-item"},"No. HP : ","+"+this.props.phone))))),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",null,m.a.createElement("div",{className:"my-3"},m.a.createElement("h5",null,"Kode Transaksi: ",m.a.createElement("span",{className:"text-danger font-italic"},this.props.payments.transaction_id)),m.a.createElement("p",null,"Nominal Transaksi: ",m.a.createElement("strong",null,m.a.createElement(u.a,{thousandSeparator:".",decimalSeparator:",",suffix:",-",prefix:"Rp",value:this.props.payments.amount,displayType:"text"})))),m.a.createElement("div",null,this.props.verified?m.a.createElement(O,{payments:this.props.payments,name:this.props.name,recreateqr:function(){return e.props.createQr(e.props.payments.user_id)},documents:this.props.documents,loading:this.props.loading}):m.a.createElement("div",null,m.a.createElement("p",null,"Cek Surel Anda untuk Melakukan Verifikasi dan Dapatkan Kode QR untuk Pembayaran"),m.a.createElement("button",{onClick:function(){return window.location.reload()},className:"btn btn-primary btn-registration"},"Muat Ulang")))))),m.a.createElement(d.a,null)))}}]),a}(m.a.Component);a.default=Object(p.b)(function(e){return{email:e.UserReducer.email,name:e.UserReducer.name,phone:e.UserReducer.phone,verified:e.UserReducer.verified,payments:e.UserReducer.payments,loading:e.UserReducer.loading,documents:e.UserReducer.documents}},function(e){return{doLogout:function(){return e(Object(E.b)())},createQr:function(a){return e(Object(E.d)(a))}}})(w)}}]);
//# sourceMappingURL=5.10457680.chunk.js.map