import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floating-labels.css';
import './first_login.css';

class First_Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Ticket_No:'',
            Pass:''
        };
    }
    handlePass(event){
        this.setState({Pass:this.target.value})
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
                <p><i className="far fa-envelope"></i></p>
                <form>
                <div id="inp1" className="form-label-group">
                <input onCLick={() => this.handleTicket} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputEmail">Enter Ticket Number</label>
                </div> 
                <div id="inp2" className="form-label-group">
                <input onClick={() => this.handlePass} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
                </div>
                </form>
                <br />
            <button id="btn1" type="submit" className="btn btn-primary btn-block">Login</button>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default First_Login;