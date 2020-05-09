import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartItem from './cartItem'
class Header extends Component {
    state = {
        isOpend: false,
        user:null
    }
    openCartHandler = () => {
        let isOpend = this.state.isOpend;
        if (isOpend === false) { isOpend = true }
        else { isOpend = false }
        this.setState({ isOpend })
    }

    // componentDidMount(){
    //     const user = this.props.user;
    //     this.setState(user);
    // }
    render() {
        const { cartItem } = this.props
        let { isOpend } = this.state
        console.log(cartItem)
        return (
          <React.Fragment>
            <div className='header'>
              {/* <!-- upper header --> */}
              <div className='header__upper'>
                {/* <!-- container --> */}
                <div className='container'>
                  {/* <!-- contact info --> */}
                  <ul className='list list--hr list--hr-separator'>
                    <li className='list__item'>
                      <span className='info'>
                        {/* <!-- icon --> */}
                        <i className='info__icon far fa-dot-circle'></i>
                        {/* <!-- info --> */}
                        <span className='info__data'>
                          1234 Street Name, City Name
                        </span>
                      </span>
                    </li>
                    <li className='list__item'>
                      <Link href='#' className='info'>
                        {/* <!-- icon --> */}
                        <i className='info__icon fab fa-whatsapp'></i>
                        {/* <!-- info --> */}
                        <span className='info__data'>123-456-7890</span>
                      </Link>
                    </li>
                    <li className='list__item'>
                      <Link href='#' className='info'>
                        {/* <!-- icon --> */}
                        <i className='info__icon far fa-envelope'></i>
                        {/* <!-- info --> */}
                        <span className='info__data'>mail@domain.com</span>
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- side menu --> */}
                  <ul className='list list--hr'>
                    <li className='list__item'>
                      <Link href='#' className='link'>
                        {/* <!-- icon --> */}
                        <i className='link__icon fas fa-angle-right'></i>
                        {/* <!-- info --> */}
                        About Us
                      </Link>
                    </li>
                    <li className='list__item'>
                      <Link href='#' className='link'>
                        {/* <!-- icon --> */}
                        <i className='link__icon fas fa-angle-right'></i>
                        {/* <!-- info --> */}
                        Contact Us
                      </Link>
                    </li>
                    {/* <!-- languges --> */}
                    <li className='list__item'>
                      {/* <!-- drop down -->
                        <!-- to oppen dropdown dropdown--opened --> */}
                      <div className='dropdown '>
                        {/* <!-- header --> */}
                        <div className='dropdown__header'>
                          <Link href='#' className='link'>
                            <img className='flag flag-us' src='' alt='' />
                            English
                          </Link>
                          <i className='fas fa-angle-down'></i>
                        </div>

                        {/* <!-- items --> */}
                        <div className='dropdown__body'>
                          <ul className='dropdown__items list'>
                            <li className='dropdown__item list__item'>
                              <Link href='#' className='link'>
                                <img className='flag flag-us' src='' alt='' />
                                English
                              </Link>
                            </li>
                            <li className='dropdown__item list__item'>
                              <Link href='#' className='link'>
                                <img className='flag flag-es' src='' alt='' />
                                Español
                              </Link>
                            </li>
                            <li className='dropdown__item list__item'>
                              <Link href='#' className='link'>
                                <img className='flag flag-fr' src='' alt='' />
                                Française
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- middle header --> */}
              <div className='header__middle container'>
                {/* <!-- logo --> */}
                <Link href='#' className='header__logo-box'>
                  <img className='header__logo' src='img/logo.png' alt='' />
                </Link>
                {/* <!-- user options --> */}
                <div className='header__user-options'>
                  {/* <!-- login control --> */}
                  <Link to='./login' className='link'>
                    {this.props.user ? this.props.user : 'login'}
                  </Link>

                  <div className='dropdown'>
                    <div className='dropdown__header'>
                      <div
                        className='image image--small image--circle'
                        style={{
                          backgroundImage: "url('img/PersonalImage.png')",
                        }}
                      ></div>
                    </div>
                    <div className='dropdown__body'></div>
                  </div>
                  {/* <!-- shopping card dropdown -->
                <!-- dropdown--opened to open --> */}
                  <div
                    onClick={this.openCartHandler}
                    className={
                      isOpend === false
                        ? 'dropdown dropdown--left'
                        : 'dropdown dropdown--left dropdown--opened  '
                    }
                  >
                    {/* <!-- header --> */}
                    <div className='dropdown__header'>
                      <div
                        className='image image--small'
                        style={{
                          backgroundImage: "url('img/icons/icon-cart-big.svg')",
                        }}
                      >
                        <div className='notification notification--danger'>
                          {cartItem.length}
                        </div>
                      </div>
                    </div>
                    {/* <!-- body --> */}
                    <div className='dropdown__body '>
                      {/* <!-- items --> */}
                      <ul className='dropdown__items list list--vr-separator'>
                        {cartItem.map((item) => (
                          <CartItem purchasedProduct={item} />
                        ))}
                      </ul>
                      {/* <!-- totals --> */}
                      {/* <div className="separator"></div>
                <div className="block">
                    <span className="lable">Total:</span>
                    <span className="lable">$2870</span>
                </div> */}
                      {/* <!-- actions --> */}
                      {/* <div className="block list list--hr">
                    <Link className="list-item btn btn--gray" href="">View Cart</Link>
                    <Link className="list-item btn btn--primary" href="">Checkout</Link>
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- lower header --> */}
              <div className='header__lower container'>
                {/* <!-- navigation --> */}
                <nav className='nav'>
                  <ul className='nav__items list list--hr'>
                    {/* <!-- items --> */}
                    <li className='nav__item'>
                      <Link className='nav__link' to='/home'>
                        Home
                      </Link>
                    </li>
                    <li className='nav__item dropdown '>
                      {/* <!-- title --> */}
                      <Link className='nav__link dropdown__header' href='#'>
                        Products
                      </Link>
                      {/* <!-- items --> */}
                      <div className='dropdown__body'>
                        <ul className=' list'>
                          <li className='list__item'>
                            <Link
                              className='nav__inner-link'
                              to='/product-listing'
                            >
                              Product Listing
                            </Link>
                          </li>
                          <li className='list__item'>
                            <Link className='nav__inner-link' to='/add-product'>
                              Add Product
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav__item'>
                      <Link className='nav__link' href='#'>
                        Contact Us
                      </Link>
                    </li>
                    <li className='nav__item'>
                      <Link className='nav__link' href='#'>
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </React.Fragment>
        );
    }
}
// debugger;
export default Header;