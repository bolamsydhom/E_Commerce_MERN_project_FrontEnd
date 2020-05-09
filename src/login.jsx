import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginUser } from './services/users'

class Login extends Component {
    state = {
        user: {
            email: "",
            password: ""
        }

    }
    loginHandler = async (e) => {
        e.preventDefault();
        console.log("login clicked");
        const { email, password } = this.state.user;
        const obj = { email, password };
        const {data, error} = await LoginUser(obj)
debugger;
        if (data) {
            console.log("Logged in")
            // this.props.lologgined(data);
            this.props.history.push("/product-listing")
        } else {
            alert(error);
        }

    }



    changeInputHandler = e => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value;
        this.setState({ user })
        
    }
    render() {
        const { loginHandler } = this.props;
        const user = this.state.user;
        return (
          <React.Fragment> 
            <div className='container'>
              <form className='login'>
                <h4 className='login__header'>I'M A RETURNING CUSTOMER</h4>
                <div className='form-group'>
                  <label htmlFor=''>Username or E-mail Address</label>
                  <input className='form-control' type='text' name='email' id='' onChange={this.changeInputHandler} />
                </div>
                <div className='form-group login__Password'>
                  <Link to='#' className='login__forget-password'>
                    (Forget Password?)
                  </Link>
                  <label htmlFor=''>Password</label>
                  <input
                    className='form-control'
                    type='text'
                    name='password'
                    id=''
                    onChange={this.changeInputHandler}
                  />
                </div>
                <div className='login__remember-me'>
                  <div className='form-group__checkbox'>
                    <input type='checkbox' name='' id='' />
                    <span>Remember Me</span>
                  </div>
                  <div className='add-product__actions'>
                    <button className='btn btn--gray'>Cancel</button>
                    {/* <button className='btn btn--primary' onClick={() => loginHandler(user)}>
                      Login
                    </button> */}

                    <Link className='btn btn--primary'  onClick={this.loginHandler}>
                      Login
                    </Link>
                  </div>
                </div>
                <Link to='/register' className='login__register-now'>
                  Register Now
                </Link>
              </form>
            </div>
          </React.Fragment>
        );
    }
}

export default Login;