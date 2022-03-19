import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "react-use-cart";
import { getWarehouseLocation, getCheckout } from "../../redux/action/product-action";
import { addAddressUser } from "../../redux/action/user-action";
import { getProvince, getCityByProvID, getDelivery } from "../../redux/action/location-action";
import NumberFormat from "react-number-format";
import { Formik, Form, Field } from "formik";
import "./style.css";

// ========== GOOGLE MAPS PICKER API ==============
function Checkout () {
    const [idUser, setIDUser] = useState(null);
    const [citySelected, setCitySelected] = useState();
    const [citySelectedText, setCitySelectedText] = useState();
    const [provSelected, setProvSelected] = useState();
    const [provSelectedText, setProvSelectedText] = useState();
    const [deliveryFee, setdDliveryFee] = useState(0);
    const [totalCheckout, setTotalCheckout] = useState(0);
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
    
    const { isLogin, province, loadingProv, city, costDelivery, loadingCheckoutDetail, checkout } = useSelector(state => {
        return {
            isLogin: state.auth.data,
            province: state.location.province,
            loadingProv: state.location.loadingProv,
            city: state.location.city,
            costDelivery: state.location.checkoutDetail.total_cost,
            checkout: state.location.checkoutDetail,
            loadingCheckoutDetail: state.location.loadingCheckoutDetail
        }
    });

    useEffect(() => {
        if (!isLogin) navigate("/");
        else setIDUser(isLogin.id)
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

    const handleProv = (event) => {
        let index = event.target.selectedIndex;

        setProvSelectedText(event.nativeEvent.target[index].text)
        setProvSelected(event.target.value);
        dispatch(getCityByProvID(event.target.value))
    }

    const handleCity = (event) => {
        let index = event.target.selectedIndex;

        setCitySelectedText(event.nativeEvent.target[index].text)
        setCitySelected(event.target.value)
    }

    const checkDelivery = () => {
        console.log(citySelected)
        if (!citySelected) return
        dispatch(getDelivery(citySelected, { product_id: JSON.stringify(productCheckout), quantity_p: JSON.stringify(quantityCheckout)}));
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
                        <Formik  
                            initialValues={{
                                fullname: '',
                                mobile_number: '',
                                landmark: '',
                                full_address: '',
                                province: '',
                                province_id: '',
                                city: '',
                                city_id: '',
                                postal_code: ''
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                localStorage.setItem('checkout', JSON.stringify(checkout));
                                const body = { 
                                    user_id: idUser, 
                                    fullname: values.fullname, 
                                    mobile_number: values.mobile_number,
                                    full_address: values.full_address,
                                    landmark: values.landmark,
                                    province: provSelectedText,
                                    province_id: provSelected,
                                    city: citySelectedText,
                                    city_id: citySelected,
                                    postal_code: values.postal_code
                                }
                                dispatch(addAddressUser(body));
                                navigate('/payment');
                                console.log(body)
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="creditly-card-form agileinfo_form">
                                    <section className="creditly-wrapper wrapper">
                                        <div className="information-wrapper">
                                            <div className="first-row form-group">
                                                <div className="controls">
                                                    <label className="control-label">Full name: </label>
                                                    <Field 
                                                        className="billing-address-name form-control" 
                                                        name="fullname" 
                                                        required 
                                                        placeholder="Full name"
                                                        disabled={ payment === true ? true : false } />
                                                </div>
                                                <div className="card_number_grids">
                                                    <div className="card_number_grid_left">
                                                        <div className="controls">
                                                            <label className="control-label">Mobile number:</label>
                                                            <Field 
                                                                className="form-control" 
                                                                name="mobile_number"
                                                                placeholder="Mobile number" 
                                                                disabled={ payment === true ? true : false }
                                                                required />
                                                        </div>
                                                    </div>
                                                    <div className="card_number_grid_right">
                                                        <div className="controls">
                                                            <label className="control-label">Landmark: </label>
                                                            <Field 
                                                                className="form-control" 
                                                                type="text" 
                                                                name="landmark"
                                                                placeholder="Landmark"
                                                                disabled={ payment === true ? true : false }
                                                                required />
                                                        </div>
                                                    </div>
                                                    <div className="clear"> </div>
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Full Address : </label>
                                                    <Field 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Full Address" 
                                                        name="full_address"
                                                        disabled={ payment === true ? true : false }
                                                        required />
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Province : </label>
                                                    <Field as="select" 
                                                        name="province_id" 
                                                        required 
                                                        className="form-control option-w3ls"
                                                        value={provSelected}
                                                        onChange={(event) => handleProv(event)}
                                                        disabled={ payment === true ? true : false }
                                                    >
                                                        <option>Select Your Country</option>
                                                            { renderProvince() }
                                                    </Field>
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">City : </label>
                                                    <Field as="select" 
                                                        required 
                                                        className="form-control option-w3ls"
                                                        disabled={ payment === true ? true : false }
                                                        value={citySelected}
                                                        onChange={ (event) => handleCity(event) }
                                                        name="city_id"
                                                    >
                                                        <option>Select Your City</option>
                                                            { renderCity() }
                                                    </Field>
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Postal Code : </label>
                                                    <Field 
                                                        className="form-control" 
                                                        type="text" 
                                                        name="postal_code"
                                                        placeholder="Postal Code" 
                                                        disabled={ payment === true ? true : false }
                                                        required />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <a className="text-white btn btn-dark d-flex w-100 justify-content-between align-items-center mr-1"
                                                    disabled={isSubmitting}
                                                    onClick={ () => checkDelivery() } >
                                                    <span className="fas fa-truck text-success mr-2"></span>
                                                    Check Delivery
                                                </a>
                                                <button className="text-white submit check_out btn d-flex w-100 justify-content-between align-items-center btn-success ml-1"
                                                    // disabled={ payment === true ? false : true }
                                                    type="submit"
                                                >
                                                    Make a Payment
                                                    <span className="fas fa-chevron-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Checkout;