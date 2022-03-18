import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import NumberFormat from "react-number-format";
import "./style.css";

function Cart (props) {
    const navigate = useNavigate();
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    const { data } = useSelector(state => {
        return {
            data: state.auth.data,
        }
    });

    const checkoutHandler = () => {
        if (localStorage.getItem('token')) {
            navigate('/checkout')
        } else {
            alert('You have to login!')
        }
    }

    return (
        <div className={props.showCart == true ? 'cart-wrapper open' : 'cart-wrapper' } >
            <div className="d-flex">
                <button 
                    className="btn btn-transparent text-secondary" 
                    id="closeCart"
                    onClick={ props.buttonCloseCart } >
                    <span className="fas fa-chevron-right"></span>
                </button>
                <h1 className="w-100">
                    <span className="fas fa-shopping-cart mr-2" style={{ fontSize: 36 }}></span>
                    Cart
                </h1>
            </div>

            {
                isEmpty ?
                    <h3 className="text-center mt-5 text-secondary">Your Cart is Empty</h3>
                    :
                    <>
                        <div className="d-flex justify-content-between align-items-center px-3">
                            <button 
                                className="btn btn-success" 
                                id="checkoutCart"
                                onClick={ () => checkoutHandler() } >
                                <span className="fas fa-shopping-cart mr-2"></span>Checkout
                            </button>
                            <button 
                                className="btn btn-danger" 
                                id="checkoutCart"
                                onClick={ () => emptyCart()} >
                                <span className="fas fa-trash-alt mr-2"></span>Delete All
                            </button>
                        </div>


                        <ul className="cart-menu">
                            {
                                items.map(item => (
                                    <li className="cart-list p-2" key={item.id}>
                                        <div className="cart-list-image">
                                            <img src={ `http://localhost:3000/images/products/${ item.image }` } className="img-fluid" alt="" />
                                        </div>
                                        <div className="cart-list-detail d-flex flex-column">
                                            <div className="cart-list-detail-top mb-4">
                                                <h4 className="text-secondary">
                                                    { item.name }
                                                </h4>
                                                <h5 className="text-secondary">
                                                    { 
                                                        <NumberFormat
                                                        thousandsGroupStyle="thousand"
                                                        value={item.price}
                                                        prefix="Rp. "
                                                        decimalSeparator="."
                                                        displayType="text"
                                                        type="text"
                                                        thousandSeparator={true}
                                                        allowNegative={true} /> 
                                                    }
                                                </h5>
                                                <span className="text-muted">Warehouse: { item.province_name }</span>
                                            </div>
                                            <div className="cart-list-detail-bottom d-flex justify-content-end">
                                                <button className="btn btn-transparent text-danger" onClick={ () => removeItem(item.id)}>
                                                    <span className="fas fa-trash-alt"></span>
                                                </button>
                                                <div className="cart-list-button">
                                                    <button className="btn btn-transparent text-secondary rounded-circle" onClick={ () => updateItemQuantity(item.id, item.quantity - 1)}>
                                                        <span className="fas fa-minus"></span>
                                                    </button>
                                                    <input type="text" style={{ width: 80 }} className="text-secondary bg-transparent border-bottom border-top-0 border-left-0 border-right-0 mx-2" value={item.quantity} readOnly disabled />
                                                    <button className="btn btn-transparent text-success rounded-circle" onClick={ () => updateItemQuantity(item.id, item.quantity + 1)}>
                                                        <span className="fas fa-plus"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
            }

        </div>
    );
}

export default Cart;