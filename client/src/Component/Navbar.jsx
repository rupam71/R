import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout,clearMessage,login } from '../actions/index';

class Navbar extends Component {
    state = {  }
    handleLogout = () => {
        this.props.logout()
        this.props.clearMessage()
    }
    handleLogin = () => {
        const user = {
            email: "rupamsahriar@gmail.com",
            password: "levilevi"
        }
        
        this.props.login(user)
    }
    rendernavbar = () => {
        if(this.props.user){
            return (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={this.handleLogout}            
                        className="nav-link" >Logout</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={this.handleLogin}>Login</Link>
                    </li>
                </ul>
            )
        }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-white my-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-5" to="/">Todo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNav">
                            {this.rendernavbar()}
                        </div>
                    </div>
                </nav>
            </div>
         );
    }
}
 

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user : state.auth.user
    }
}
export default connect(mapStateToProps,{logout,clearMessage,login})(Navbar);