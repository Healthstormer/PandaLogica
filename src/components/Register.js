import React from 'react';
import { Link } from "react-router-dom";
var $ = require("jquery");

class Register extends React.Component {
    componentDidMount() {
        $('#register-button').click( () => {
            $('#register-message').toggleClass('d-none');
        });
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="register_container0">
                        We've found:
            <br></br>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">- masks within 25km</li>
                            <li class="list-group-item">- tests within 50km</li>
                        </ul>
                        <br></br>
                        <br></br>
            Currently there is no supply for:
            <br></br>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">- specialists</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
            You may though post a request that might be
            matched later on.
            <div>To proceed, we need to know who you are</div>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="register_container1">
                        <form>
                            <div class="form-group">
                                <label for="register-form-email">Email</label>
                                <input class="form-control" type="email" id="register-form-email" />
                            </div>
                            <div class="form-group">
                                <label for="register-form-gln">GLN</label>
                                <input class="form-control" type="text" id="register-form-gln" />
                            </div>
                            <button id="register-button" type="button" class="btn btn-primary">Register</button>
                            <p class="d-none alert alert-warning" id="register-message">
                            Please confirm your email by clicking on the link we have just sent to your email address.
                            </p>
                        </form>
                    </div>
                    <br></br><br></br>
                    <div className="register_container2">
                        <form action="/results">
                            <div class="form-group">
                                <label for="login-form-username">Username</label>
                                <input class="form-control" type="text" id="login-form-username" />
                            </div>
                            <div class="form-group">
                                <label for="login-form-password">Password</label>
                                <input class="form-control" type="password" id="login-form-password"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
} 


export default Register
