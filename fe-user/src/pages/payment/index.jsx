import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from "../../redux/action/checkout-action";
import { getComboBank } from "../../redux/action/combo-action";
import { Button, Card } from 'react-bootstrap';
import NumberFormat from "react-number-format";

function Payment () {
    const dispatch = useDispatch();
    const [IDBank, setIDBank] = useState();
    const [checkoutItem, setCheckoutItem] = useState();
    const [checkoutDeliveryCost, setCheckoutDeliveryCost] = useState();
    const navigate = useNavigate();
    const {
        cartTotal,
        items,
        isEmpty,
        emptyCart,
    } = useCart();

    const { user_id, address_id, combo_bank, bank_loading, state } = useSelector(state => {
        return {
            user_id: state.auth.data.id,
            address_id: state.user.address_id,
            combo_bank: state.combo.bank,
            bank_loading: state.combo.bankLoading,
        }
    });

    useEffect(() => {
        if (isEmpty) navigate('/product')
        dispatch(getComboBank());

        let checkout = JSON.parse(localStorage.getItem('checkout')) || [];
        setCheckoutItem(checkout.checkout_item);
        setCheckoutDeliveryCost(checkout.total_cost);
    }, [])

    const renderComboBank = () => {
        if (combo_bank) {
            return combo_bank.map((item, idx) => {
                return (
                    <li key={idx} style={{ listStyle: 'none' }} className="d-flex">
                        <input type="radio" name="bank_id" value={item.id} onClick={ () => setIDBank(item.id) } className="mt-2 mr-2" />
                        <div>
                            <p className='mb-0'>Bank : <span className='font-weight-bold'>{ item.bank_name }</span></p>
                            <p className='mb-0'>Bank Account Number : <span className='font-weight-bold'>{ item.account_number }</span></p>
                            <p className='mb-0'>Bank Account Name : <span className='font-weight-bold'>{ item.account_name }</span></p>
                        </div>
                    </li>
                )
            })
        }
    }

    const renderItemCheckout = () => {
        return items.map((item, idx) => {
            return (
                <li key={idx} style={{ listStyle: 'none' }} className="d-flex justify-content-between mb-3a">
                    <div className="detail d-flex">
                        <div className="image">
                            <img src={`http://localhost:3000/images/products/${item.image}`} style={{ width: 80 }} alt=" " className="img-responsive"/>
                        </div>

                        <div className="detail_product">
                            <p className="font-weight-bold text-black mb-0" style={{ fontSize: 18 }}>{ item.product_name }</p>
                            <span className='font-weight-bold'>
                                
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={item.price}
                                    prefix="Rp. "
                                    decimalSeparator="."
                                    displayType="text"
                                    type="text"
                                    thousandSeparator={true}
                                    allowNegative={true} /> 
                                <span className='text-muted'> x { item.quantity } item</span></span>
                        </div>
                    </div>
                    <div className="sub-price">
                        <span className="font-weight-bold">
                            <NumberFormat
                                thousandsGroupStyle="thousand"
                                value={item.price * item.quantity}
                                prefix="Rp. "
                                decimalSeparator="."
                                displayType="text"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true} /> 
                        </span>
                    </div>
                </li>
            )
        })
    }

    const handlerConfirm = () => {
        const body = {
            total_price: cartTotal + checkoutDeliveryCost,
            delivery_fee: checkoutDeliveryCost,
            user_id: user_id,
            bank_id: IDBank,
            checkout_item: checkoutItem,
            user_address_id : address_id
        }
        emptyCart();
        dispatch(addTransaction(body));
        navigate('/profile');
    }

    return (
		<section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">Payment </h3>
                    <div className="responsive_tabs">
                        <div className="row">
                            <div className="col-lg-6">
                                <Card>
                                    <Card.Header as="h5" className='text-black'>Item List</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            { renderItemCheckout() }
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className="">
                                        <div className="d-flex justify-content-between">
                                            <p className='text-black font-weight-bold mb-0' style={{ fontSize: 16 }}>Sub Total</p>
                                            <span className="font-weight-bold">
                                                <NumberFormat
                                                    thousandsGroupStyle="thousand"
                                                    value={cartTotal}
                                                    prefix="Rp. "
                                                    decimalSeparator="."
                                                    displayType="text"
                                                    type="text"
                                                    thousandSeparator={true}
                                                    allowNegative={true} /> 
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='text-black font-weight-bold mb-0' style={{ fontSize: 16 }}>Delivery Fee</p>
                                            <span className="font-weight-bold">
                                                <NumberFormat
                                                    thousandsGroupStyle="thousand"
                                                    value={checkoutDeliveryCost}
                                                    prefix="Rp. "
                                                    decimalSeparator="."
                                                    displayType="text"
                                                    type="text"
                                                    thousandSeparator={true}
                                                    allowNegative={true} /> 
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='text-black font-weight-bold mb-0' style={{ fontSize: 16 }}>Total</p>
                                            <span className="font-weight-bold">
                                                <NumberFormat
                                                    thousandsGroupStyle="thousand"
                                                    value={cartTotal + checkoutDeliveryCost}
                                                    prefix="Rp. "
                                                    decimalSeparator="."
                                                    displayType="text"
                                                    type="text"
                                                    thousandSeparator={true}
                                                    allowNegative={true} /> 
                                            </span>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col-lg-6">
                                <Card>
                                    <Card.Header as="h5" className='text-black'>Choose Bank Account</Card.Header>
                                    <Card.Body>
                                        <ul>
                                            { renderComboBank() }
                                        </ul>
                                        <Button variant="dark" onClick={ () => handlerConfirm() }>Confirm to Buy</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Payment;