import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './login'
import Header from './header'
import Register from './register'
import Home from './home'
import ProductListing from './product-listing'
import AddProduct from "./add-product"
import ProductDetails from './product-details';
import { LoginUser } from './services/users';
import { withRouter } from 'react-router'

class App extends Component {
  state = {
    cartItem: [],
    user: {
      email: '',
      password: ''
    },
  };
  addToCartHandler = (item) => {
    const cartItem = [...this.state.cartItem];
    if (cartItem.indexOf(item) === -1) {
      cartItem.push(item);
      this.setState({ cartItem });
    }
  };

  // loginHandler = async (e) => {
  //   //  const { history: { push } } = this.props;
  //     // console.log(e.props);
  //   debugger;
  //   // e.preventDefault();
  //   console.log('login clicked');
  //   console.log(e);
    
  //   // const { email, password } = e;
  //   // const obj = { email, password };
  //   const data = await LoginUser(e);
  //   debugger;

  //   if (data) {
  //     debugger;
  //     console.log('Logged in');
  //     console.log(this.props);
  //     // this.props.lologgined(data);

  //     this.props.history.push('product-listing');
  //     this.setState({user: data})
  //     debugger;

  //   } else {
  //     debugger;
  //     alert('invalid password or email');
  //   }
  // };
 
  render() {
    return (
      <React.Fragment>
        <Header cartItem={this.state.cartItem} />
        <Route path='/product-details/:id' component={ProductDetails} />
        <Route path='/add-product' component={AddProduct} />
        <Route
          path='/product-listing'
          render={(props) => (
            <ProductListing addToCartHandler={this.addToCartHandler} />
          )}
        />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <Route
          path='/login'
          render={(props) => <Login loginHandler={this.loginHandler} />}
        /> */}
        <Route path='/home' component={Home} />
        <Redirect from='/' exact to='/home' />
      </React.Fragment>
    );
  }
}

export default App;