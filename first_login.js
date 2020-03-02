import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floating-labels.css';
import './first_login.css';
import axios from 'axios';

class FirstLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Ticket_No:'',
            Email:'',
        };
    }
    handleEmail = (event) => {
        this.setState({Email:event.target.value})
    }
    handleTicket = (event) => {
        this.setState({Ticket_No:event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.Ticket_No);
        console.log(this.state.Email);
        
    }
    render(){
        return (
            <div className="container-fluid image">
            <div className="row">
                <div className="col-sm-8">
                    <img src="../logo.jpg" width="900" height="600" alt="logo" />
                </div>
            <div className="card col-sm-4" >
                <div className="container" style={{height:"250px"}}>
                    </div>
                <div className="container">
                <h2>Login</h2>
                <p style={{marginTop:"-10px"}}>Enter your Login Credentials</p>
                <form onSubmit={this.handleSubmit}>
                <div id="inp1" className="form-label-group">
                <input onChange={this.handleTicket} type="text" id="inputTicket" name="Ticket" className="form-control" placeholder="HallTicket Number" required autofocus />
                <label htmlFor="inputTicket">Enter Ticket Number</label>
                </div> 
                <div id="inp2" className="form-label-group">
                <input onChange={this.handleEmail} type="email" id="inputEmail" name="Email" className="form-control" placeholder="Email" required />
                <label htmlFor="inputEmail">Enter Email</label>
                </div>
                <button id="btn1" type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                <br />
            </div>
            </div> 
            </div>
            </div>
        )
    }
}
export default FirstLogin;