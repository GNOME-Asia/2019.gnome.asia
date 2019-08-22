import React from 'react'
import { Link } from 'react-router-dom';

class Navdashboard extends React.Component {
    render(){
        return(
            <div style={style.container}>
                <nav className="navbar">
                    <Link className="navbar-brand" to="/dashboard" style={style.text}>Registration Dashboard</Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><button className="btn btn-sm btn-link" style={style.text} onClick={this.props.logout} ><i className="fas fa-sign-out-alt"></i> Logout</button></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const style = {
    container: {
        backgroundColor: '#2d3436'
    },
    text: {
        color: '#ecf0f1',
    }
    
}

export default Navdashboard