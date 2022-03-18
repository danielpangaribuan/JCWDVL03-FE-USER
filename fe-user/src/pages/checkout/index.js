import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "react-use-cart";
import { getWarehouseLocation, getCheckout } from "../../redux/action/product-action";
import { getProvince, getCityByProvID, getDelivery } from "../../redux/action/location-action";
import NumberFormat from "react-number-format";
import "./style.css";

const _ = require('lodash')

// ========== GOOGLE MAPS PICKER API ==============
function Checkout () {
    const [deliveryFee, setdDliveryFee] = useState(0);
    const [totalCheckout, setTotalCheckout] = useState(0);
    const [destination, setDestination] = useState(null);
    const [productCheckout, setProductCheckout] = useState([]);
    const [quantityCheckout, setQuantityCheckout] = useState([]);
    const [payment, setPayment] = useState(false);
    const [fillForm, setFillForm] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        cartTotal,
        items
    } = useCart();
    
    const { warehouse, province, loadingProv, city, costDelivery, loadingCheckoutDetail, checkout } = useSelector(state => {
        return {
            warehouse : state.warehouse.data,
            province: state.location.province,
            loadingProv: state.location.loadingProv,
            city: state.location.city,
            costDelivery: state.location.checkoutDetail.total_cost,
            checkout: state.location.checkoutDetail,
            loadingCheckoutDetail: state.location.loadingCheckoutDetail
        }
    });

    useEffect(() => {
        dispatch(getWarehouseLocation());
        dispatch(getProvince());
        
        for (let i = 0; i < items.length; i++) {
            setProductCheckout(oldArray => [ ...oldArray, items[i].id])
            setQuantityCheckout(oldArray => [ ...oldArray, items[i].quantity ])
        }
        if (costDelivery) {
            setdDliveryFee(costDelivery);
            setTotalCheckout(cartTotal + costDelivery);
            setPayment(true);
        }
    }, [loadingCheckoutDetail, costDelivery]);

    const renderCheckoutItem = () => {
        return (
            items.map((item, idx) => {
                return (
                    <li className="item-list" key={idx}>
                        <div className="checkout-image">
                            <a href="single.html">
                                <img style={{ width: 120 }} src={`http://localhost:3000/images/products/${item.image}`} alt=" " className="img-responsive"/>
                            </a>
                        </div>
                        <div className="checkout-detail">
                            <div className="checkout-name">{ item.product_name }</div>
                            <div className="checkout-quantity text-muted">
                                { item.quantity } Barang ({ item.quantity * item.weight } gr)
                            </div>
                            <div className="checkout-price-item">
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={item.price}
                                    prefix="Rp. "
                                    decimalSeparator="."
                                    displayType="text"
                                    type="text"
                                    thousandSeparator={true}
                                    allowNegative={true} /> 
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }

    const renderProvince = () => {
        if (province.length) {
            return province.map((item, idx) => <option value={ item.province_id } key={idx}>{ item.province }</option> )
        }
    }

    const renderCity = () => {
        if (city.length) {
            return city.map((item, idx) => <option value={ item.city_id } key={ idx }>{ item.city_name }</option>)
        }
    }

    const setCityByProvID = (id) => {
        dispatch(getCityByProvID(id))
    }

    const checkDelivery = () => {
        if (!destination) return
        dispatch(getDelivery(destination, { product_id: JSON.stringify(productCheckout), quantity_p: JSON.stringify(quantityCheckout)}));
    }

    const paymentHandler = () => {
        console.log(checkout)
        localStorage.setItem('checkout', JSON.stringify(checkout));
        navigate('/payment');
    }

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <h3 className="tittle-w3layouts my-lg-4 mt-3">Checkout </h3>
                <div className="row">
                    
                    <div className="inner-sec-shop px-lg-4 px-3 col-sm-6">
                        <div className="checkout-right">
                            <h4>Your shopping cart contains:
                                <span>{ items.length } Products</span>
                            </h4>
                            <div className="warehouse-list">
                                <h4>
                                    Pesanan
                                </h4>
                                <ul className="item-group">
                                    { renderCheckoutItem() }
                                </ul>
                                <div className="checkout-sub-total d-flex justify-content-between align-items-center">
                                    <span>Delivery Fee</span>
                                    {
                                        loadingCheckoutDetail === true ?
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        :
                                        <NumberFormat
                                            thousandsGroupStyle="thousand"
                                            value={deliveryFee}
                                            prefix="Rp. "
                                            decimalSeparator="."
                                            displayType="text"
                                            type="text"
                                            thousandSeparator={true}
                                            allowNegative={true} /> 
                                    }
                                </div>
                                <div className="checkout-sub-total d-flex justify-content-between align-items-center">
                                    <span>Subtotal</span>
                                    <NumberFormat
                                        thousandsGroupStyle="thousand"
                                        value={cartTotal}
                                        prefix="Rp. "
                                        decimalSeparator="."
                                        displayType="text"
                                        type="text"
                                        thousandSeparator={true}
                                        allowNegative={true} /> 
                                </div>
                                <div className="checkout-sub-total d-flex justify-content-between align-items-center">
                                    <span>Total</span>
                                    <NumberFormat
                                        thousandsGroupStyle="thousand"
                                        value={totalCheckout}
                                        prefix="Rp. "
                                        decimalSeparator="."
                                        displayType="text"
                                        type="text"
                                        thousandSeparator={true}
                                        allowNegative={true} /> 

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 address_form">
                        <h4>Add a new Details</h4>
                        <form className="creditly-card-form agileinfo_form">
                            <section className="creditly-wrapper wrapper">
                                <div className="information-wrapper">
                                    <div className="first-row form-group">
                                        <div className="controls">
                                            <label className="control-label">Full name: </label>
                                            <input 
                                                className="billing-address-name form-control" 
                                                type="text" 
                                                name="name" 
                                                required 
                                                placeholder="Full name"
                                                disabled={ payment == true ? true : false } />
                                        </div>
                                        <div className="card_number_grids">
                                            <div className="card_number_grid_left">
                                                <div className="controls">
                                                    <label className="control-label">Mobile number:</label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Mobile number" 
                                                        disabled={ payment == true ? true : false }
                                                        required />
                                                </div>
                                            </div>
                                            <div className="card_number_grid_right">
                                                <div className="controls">
                                                    <label className="control-label">Landmark: </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Landmark" 
                                                        disabled={ payment == true ? true : false }
                                                        required />
                                                </div>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="controls">
                                            <label className="control-label">Full Address : </label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                placeholder="Full Address" 
                                                disabled={ payment == true ? true : false }
                                                required />
                                        </div>
                                        <div className="controls">
                                            <label className="control-label">Province : </label>
                                            <select 
                                                className="form-control option-w3ls" 
                                                onChange={ (event) => setCityByProvID(event.target.value) }
                                                required
                                                disabled={ payment == true ? true : false }>
                                                <option>Select Your Country</option>
                                                    { renderProvince() }
                                            </select>
                                        </div>
                                        <div className="controls">
                                            <label className="control-label">City : </label>
                                            <select 
                                                className="form-control option-w3ls" 
                                                required 
                                                disabled={ payment == true ? true : false }
                                                onChange={ (event) => setDestination(event.target.value) }>
                                                <option>Select Your City</option>
                                                    { renderCity() }
                                            </select>
                                        </div>
                                        <div className="controls">
                                            <label className="control-label">Postal Code : </label>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                placeholder="Postal Code" 
                                                disabled={ payment == true ? true : false }
                                                required />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <a className="text-white btn btn-dark d-flex w-100 justify-content-between align-items-center mr-1"
                                            disabled={ payment == true ? true : false }
                                            onClick={ () => checkDelivery() } >
                                            <div>
                                                <span className="fas fa-truck text-success mr-2"></span>
                                                Check Delivery
                                            </div>
                                            <span className="fas fa-chevron-right"></span>
                                        </a>
                                        <a className="text-white submit check_out btn d-flex w-100 justify-content-between align-items-center btn-success ml-1"
                                            disabled={ payment == true ? false : true }
                                            onClick={ () => paymentHandler() }>
                                                Make a Payment
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Checkout;