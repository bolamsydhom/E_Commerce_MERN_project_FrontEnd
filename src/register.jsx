import React, { Component } from 'react';
import axios from 'axios';
import { AddUser } from './services/users'
import { Link } from 'react-router-dom'
class Register extends Component {
    state = {
        user: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    submitHandler = e => {
        e.preventDefault();
        const { email, password, repeatedPassword } = this.state.user;
        if (password === repeatedPassword) {
            const obj = { email, password ,repeatedPassword };
           if( AddUser(obj)){
            this.props.history.push("/login")
           };
        }
        else {
            console.log("Password don't match")
        }

    }
    changeInputHandler = e => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form className="login">
                        <h4 className="login__header">
                            Register An Account
            </h4>
                        <div className="form-group">
                            <label htmlFor="">E-mail Address</label>
                            <input required className="form-control" type="text" name="email" id=""
                                onChange={this.changeInputHandler} />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input className="form-control" required type="password" name="password" id=""
                                    onChange={this.changeInputHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Re-enter Password</label>
                                <input className="form-control" type="password" name="repeatedPassword" id=""
                                    onChange={this.changeInputHandler} />
                            </div>
                        </div>
                        {

                        }
                        <div>error</div>

                        <div className="login__remember-me">
                            <div className="add-product__actions">
                                <button href="#" className="btn btn--gray">Cancel</button>
                                <button className="btn btn--primary" onClick={this.submitHandler}>
                                    Register</button>
                            </div>
                        </div>
                        <Link to="/login" className="login__register-now">You are alredy a member?</Link>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;