import React from 'react';
import { Link } from "react-router-dom";
var $ = require("jquery");

class Login extends React.Component {
    componentDidMount() {
        $('#register-button').click( () => {
            $('#register-message').toggleClass('d-none');
        });
    }

    render() {
        return (
            <div class="panel">
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
                    <p>Not registered yet? Feel free to do so:</p>
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
        )
    }
} 
export default Login
