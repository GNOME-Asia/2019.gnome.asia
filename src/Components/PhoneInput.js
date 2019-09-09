import React from 'react';
import Axios from 'axios';

class PhoneInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            code: [],
            value:'62',
            phone:''
        }
        this._handleValue = this._handleValue.bind(this)
        this._handlePhone = this._handlePhone.bind(this)
    }

    _handlePhone(e){
        this.setState({
            phone: e.target.value
        })
        this.props.onChangePhone(this.state.phone)
    }

    _handleValue(e){
        this.setState({
            value: e.target.value
        })
        this.props.onChangeCode(this.state.value)
        
    }

    componentDidUpdate(prevprops,prevstate){
        if(prevprops.countrycode !== this.state.value){
            this.props.onChangeCode(this.state.value)
        }
        if(prevprops.phone !== this.state.phone){
            this.props.onChangePhone(this.state.phone)
        }
    }

    render(){
       return(
        <div>
            <label>Nomor Hp</label>
            <div className="row">
                <div className="form-group col-6">
                    <div>

                    <select className="form-control" value={this.state.value} onChange={this._handleValue}>
                        
                        {
                            this.state.code.map((item,index) => {
                                if(item.callingCodes[0] !== ''){
                                    return(<option key={index} value={item.callingCodes[0]}>{item.name}{`(+`+item.callingCodes[0]+`)`}  </option>)
                                }
                                return null;
                            })
                        }                        
                    </select>
                    </div>
                    
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control" placeholder="mis: 81234567890"
                        value={this.state.phone}
                        onChange={this._handlePhone}
                    />
                </div>
            </div>
        </div>
       )
    }

    componentDidMount(){
        Axios.get('https://restcountries.eu/rest/v2/all')
        .then(resp => {
            this.setState({
                code: resp.data
            })

            
        })
        .catch( err => {

        }) 
    }
}

export default PhoneInput;