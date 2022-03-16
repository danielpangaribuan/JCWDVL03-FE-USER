import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "react-use-cart";
import { getWarehouseLocation } from "../../redux/action/product-action";
import { getProvince, getCityByProvID, getNearestWarehouse } from "../../redux/action/location-action";
import NumberFormat from "react-number-format";
import "./style.css";

const _ = require('lodash')

// ========== GOOGLE MAPS PICKER API ==============
function Checkout () {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [weight, setWeight] = useState(0);
    const [groupProduct, setGroupProduct] = useState([]);

    const dispatch = useDispatch();
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    
    const { warehouse, province, loadingProv, city, nearestWarehouse } = useSelector(state => {
        return {
            warehouse : state.warehouse.data,
            province: state.location.province,
            loadingProv: state.location.loadingProv,
            city: state.location.city,
            nearestWarehouse: state.location.nearestWarehouse
        }
    });

    useEffect(() => {
        dispatch(getWarehouseLocation());
        dispatch(getProvince());

        // const group = _.values(_.mapValues(_.groupBy(items, 'warehouse_name'), clist => clist.map(item => _.omit(item, 'warehouse_name'))));

        const group = _.values(_.mapValues(_.groupBy(items, 'warehouse_name'), clist => clist.map(item => _.omit(item, 'warehouse_name'))));
        const groups = _.chain(items)
            .groupBy("warehouse_id")
            .map((value, key) => ({
                warehouse_id: key,
                sub_total: _.sumBy(value.price),
                item: value
            }))
        console.log(group)
        setGroupProduct([ ...group ])
        // console.log(groupProduct)
    }, []);

    const renderCheckoutItem = () => {
        return (
            groupProduct.map((groups, idx) => {
                return (
                    <li className="warehouse-list" key={idx}>
                        <h4>
                            Pesanan { idx + 1}
                        </h4>
                        <ul className="item-group">
                            { 
                                groups.map((item, i) => {
                                    return (
                                        <li className="item-list">
                                            <div className="checkout-image">
                                                <a href="single.html">
                                                    <img style={{ width: 120 }} src={`http://localhost:3000/images/products/${item.image}`} alt=" " className="img-responsive"/>
                                                </a>
                                            </div>
                                            <div className="checkout-detail">
                                                <div className="checkout-name">{ item.name }</div>
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
                            }
                        </ul>
                        <div className="check-delivery mx-2 mb-2">
                            <button className="btn btn-dark d-flex w-100 justify-content-between align-items-center" >
                                <div>
                                    <span className="fas fa-truck text-success mr-2"></span>
                                    Check Delivery
                                </div>
                                <span className="fas fa-chevron-right"></span>
                            </button>
                        </div>
                        <div className="checkout-sub-total">
                            <span>Subtotal</span>

                            {/* <NumberFormat
                                thousandsGroupStyle="thousand"
                                value={item.price}
                                prefix="Rp. "
                                decimalSeparator="."
                                displayType="text"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true} />  */}
                        </div>
                    </li>
                )
            })
        )
    }

    const renderBasketCheckout = () => {
        return (
            items.map((item, idx) => {
                return (
                    <li className='d-flex justify-content-between mb-3 text-muted' key={idx}>
                        <span>{ item.name } <i> - </i>{ item.quantity }</span>
                        <span>
                            <NumberFormat
                                thousandsGroupStyle="thousand"
                                value={item.itemTotal}
                                prefix="Rp. "
                                decimalSeparator="."
                                displayType="text"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true} /> 
                        </span>
                    </li>
                )
            })
        )
    }

    const renderWarehouse = () => {
        return (
            warehouse.map((item, idx) => {
                return (
                    <li key={idx}>
                        Warehouse Name: {item.warehouse_name}
                        <button onClick={ () => checkOngkir(item.city_id) }>Check Ongkir</button>
                    </li>
                )
            })
        )
    }

    const renderOngkirResult = () => {
        // return (
        //     <>
        //         <h5>{ongkir.name}</h5>
        //         {
        //             ongkir.costs.map((item, idx) => {
        //                 return (
        //                     <div key={idx}>
        //                         <p>{item.service}</p>
        //                         <span>Description: {item.description}</span>
        //                         <span>Cost: { item.cost[0].value }</span>
        //                         <p></p>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </>
        // )
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

    const checkOngkir = () => {
        dispatch(getNearestWarehouse({ destination: destination }));
    }

    const navigate = useNavigate();
    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">Checkout </h3>
                    <div className="checkout-right">
                        <h4>Your shopping cart contains:
                            <span>{ items.length } Products</span>
                        </h4>
                        <ul className='warehouse-group'>
                            { renderCheckoutItem() }
                        </ul>
                    </div>
                    <div className="checkout-left row">
                        <div className="col-md-4 checkout-left-basket">
                            <h4 className='bg-info text-center text-white py-2'>Continue to basket</h4>
                            <ul>
                                {
                                    renderBasketCheckout()
                                }
                                <li className='d-flex justify-content-between mb-3 font-weight-bold'>
                                    <span>Total</span>
                                    <span>
                                        {
                                            <NumberFormat
                                                thousandsGroupStyle="thousand"
                                                value={cartTotal}
                                                prefix="Rp. "
                                                decimalSeparator="."
                                                displayType="text"
                                                type="text"
                                                thousandSeparator={true}
                                                allowNegative={true} /> 
                                        }
                                    </span>
                                </li>
                            </ul>
                            <div className="warehouse-group mt-4">
                                <h4 className='bg-info text-center text-white py-2'>Warehouse List</h4>
                                <ul className="warehouse-list" style={{ listStyle: 'none' }}>
                                    { renderWarehouse() }
                                </ul>
                                <div className="ongkir-result">
                                    { renderOngkirResult() }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 address_form">
                            <h4>Add a new Details</h4>
                            <form className="creditly-card-form agileinfo_form">
                                <section className="creditly-wrapper wrapper">
                                    <div className="information-wrapper">
                                        <div className="first-row form-group">
                                            <div className="controls">
                                                <label className="control-label">Full name: </label>
                                                <input className="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
                                            </div>
                                            <div className="card_number_grids">
                                                <div className="card_number_grid_left">
                                                    <div className="controls">
                                                        <label className="control-label">Mobile number:</label>
                                                        <input className="form-control" type="text" placeholder="Mobile number" />
                                                    </div>
                                                </div>
                                                <div className="card_number_grid_right">
                                                    <div className="controls">
                                                        <label className="control-label">Landmark: </label>
                                                        <input className="form-control" type="text" placeholder="Landmark" />
                                                    </div>
                                                </div>
                                                <div className="clear"> </div>
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Full Address : </label>
                                                <input className="form-control" type="text" placeholder="Full Address" />
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Province : </label>
                                                <select className="form-control option-w3ls" onChange={ (event) => setCityByProvID(event.target.value) }>
                                                    <option>Select Your Country</option>
                                                        { renderProvince() }
                                                </select>
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">City : </label>
                                                <select className="form-control option-w3ls" onChange={ (event) => setDestination(event.target.value) }>
                                                    <option>Select Your City</option>
                                                        { renderCity() }
                                                </select>
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Postal Code : </label>
                                                <input className="form-control" type="text" placeholder="Postal Code" />
                                            </div>
                                        </div>
                                        {/* <button className="submit check_out btn btn-block btn-dark" onClick={ () => navigate('/payment')}>Make a Payment</button> */}
                                    </div>
                                </section>
                            </form>
                            <button className="submit check_out btn btn-block btn-warning" onClick={ () => checkOngkir() }>Cek ongkir dulu yuk</button>
                        </div>

                        <div className="clearfix"> </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Checkout;