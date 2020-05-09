import React, { Component } from 'react';
class CartItem extends Component {
    state = {}

    render() {
        const { purchasedProduct } = this.props
        console.log(purchasedProduct)
        return (
            // <div className="dropdown__body ">
            //     {/* <!-- items --> */}
            //     <ul className="dropdown__items list list--vr-separator">
            <li className="dropdown__item list__item">
                {/* <!-- item small 2 --> */}
                <div className="item-small-1">
                    {/* <!-- item data --> */}
                    <div className="item-small-1__data">
                        {/* <!-- title --> */}
                        <a href="" className="item-small-1__title">{purchasedProduct.name}</a>
                        {/* <!-- price --> */}
                        <span className="item-small-1__description">
                            1 X ${purchasedProduct.price}
                        </span>
                    </div>
                    {/* <!-- item image --> */}
                    <div className="item-small-1__image-box">
                        <a href="#" className="item-small-1__image image" style={{ backgroundImage: "url('img/products/product-1.jpg')" }}>
                        </a>
                        <a href="#" className="item-small-1__action">
                            <i className="fas fa-times"></i>
                        </a>
                    </div>
                </div>
            </li>

            //     </ul>
            //     {/* <!-- totals --> */}
            //     {/* <div className="separator"></div>
            //     <div className="block">
            //         <span className="lable">Total:</span>
            //         <span className="lable">$2870</span>
            //     </div> */}
            //     {/* <!-- actions --> */}
            //     {/* <div className="block list list--hr">
            //         <a className="list-item btn btn--gray" href="">View Cart</a>
            //         <a className="list-item btn btn--primary" href="">Checkout</a>
            //     </div> */}
            // </div>
        );
    }
}

export default CartItem;
// const CartItem = () => {
//     const { purchasedProduct } = this.props
//     return (
//         <div className="dropdown__body ">
//             {/* <!-- items --> */}
//             <ul className="dropdown__items list list--vr-separator">
//                 <li className="dropdown__item list__item">
//                     {/* <!-- item small 2 --> */}
//                     <div className="item-small-1">
//                         {/* <!-- item data --> */}
//                         <div className="item-small-1__data">
//                             {/* <!-- title --> */}
//                             <a href="" className="item-small-1__title">{purchasedProduct.name}</a>
//                             {/* <!-- price --> */}
//                             <span className="item-small-1__description">
//                                 1 X ${purchasedProduct.price}
//                             </span>
//                         </div>
//                         {/* <!-- item image --> */}
//                         <div className="item-small-1__image-box">
//                             <a href="#" className="item-small-1__image image" style={{ backgroundImage: "url('img/products/product-1.jpg')" }}>
//                             </a>
//                             <a href="#" className="item-small-1__action">
//                                 <i className="fas fa-times"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </li>

//             </ul>
//             {/* <!-- totals --> */}
//             <div className="separator"></div>
//             <div className="block">
//                 <span className="lable">Total:</span>
//                 <span className="lable">$2870</span>
//             </div>
//             {/* <!-- actions --> */}
//             <div className="block list list--hr">
//                 <a className="list-item btn btn--gray" href="">View Cart</a>
//                 <a className="list-item btn btn--primary" href="">Checkout</a>
//             </div>
//         </div>
//     );
// }

// export default CartItem;