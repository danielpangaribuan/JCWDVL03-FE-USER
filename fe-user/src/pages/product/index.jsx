import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProduct, getCategory } from "../../redux/action/product-action";
import NumberFormat from "react-number-format";

function Product () {
    const [params, setParams] = useState({
        "product_name": "",
        "category_id": []
    });
    const dispatch = useDispatch();
    const { data, category } = useSelector(state => {
        return {
            data: state.product.data,
            category: state.product.category
        }
    });

    useEffect(() => {
        dispatch(getProduct(params));
        dispatch(getCategory());
    }, []);

    const handleFilterChange = (event) => {
        setParams((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }))
    }

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(getProduct(params))
    }

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">New Arrivals for you </h3>
                    <div className="row">
                        {/* <!-- product left --> */}
                        <div className="side-bar col-lg-3">
                            <div className="search-hotel">
                                <h3 className="agileits-sear-head">Search Here..</h3>
                                <form onSubmit={ handleSearch }>
                                    <input className="form-control" type="search" name="product_name" placeholder="Search here..." required="" onChange={handleFilterChange} />
                                    <button className="btn1">
                                            <i className="fas fa-search"></i>
                                    </button>
                                    <div className="clearfix"> </div>
                                </form>
                            </div>
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Category</h3>
                                <ul>
                                    <li className="d-flex align-items-center mb-2">
                                        <input type="radio" className="checked" name='category_id' value="" style={{ width: 20, height: 20}} onClick={handleFilterChange} />
                                        <span className="span ml-3" style={{ fontSize: 18 }}>All</span>
                                    </li>
                                    {
                                        category.map((item, idx) => {
                                            return (
                                                <li key={ idx } className="d-flex align-items-center mb-2">
                                                    <input type="radio" className="checked" name='category_id' value={ item.id } style={{ width: 20, height: 20}} onClick={handleFilterChange} />
                                                    <span className="span ml-3" style={{ fontSize: 18 }}>{ item.name }</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="deal-leftmk left-side">
                                <h3 className="agileits-sear-head">Special Deals</h3>
                                <div className="special-sec1">
                                    <div className="img-deals">
                                        <img src="images/s1.jpg" alt="" />
                                    </div>
                                    <div className="img-deal1">
                                        <h3>Farenheit (Grey)</h3>
                                        <a href="single.html">$575.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/s2.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Opium (Grey)</h3>
                                        <a href="single.html">$325.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                        <div className="col-xs-4 img-deals">
                                            <img src="images/m2.jpg" alt="" />
                                        </div>
                                        <div className="col-xs-8 img-deal1">
                                            <h3>Azmani Round</h3>
                                            <a href="single.html">$725.00</a>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="special-sec1">
                                            <div className="col-xs-4 img-deals">
                                                <img src="images/m4.jpg" alt="" />
                                            </div>
                                            <div className="col-xs-8 img-deal1">
                                                <h3>Farenheit Oval</h3>
                                                <a href="single.html">$325.00</a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                            </div>
                        </div>
                        {/* <!-- //product left --> */}
                        {/* <!--/product right--> */}
                        <div className="left-ads-display col-lg-9">
                            <div className="wrapper_top_shop">
                                <div className="row">
                                    {
                                        data.map((item, idx) => {
                                            return (
                                                <div className="col-md-3 mb-2 product-men women_two shop-gd" key={ idx }>
                                                    <div className="product-googles-info googles">
                                                        <div className="men-pro-item">
                                                            <div className="men-thumb-item">
                                                                <img src={ `http://localhost:3000/images/products/${ item.image }` } className="img-fluid" alt="" />
                                                                <div className="men-cart-pro">
                                                                    <div className="inner-men-cart-pro">
                                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                                    </div>
                                                                </div>
                                                                {/* <span className="product-new-top">New</span> */}
                                                            </div>
                                                            <div className="item-info-product">
                                                                <div className="info-product-price">
                                                                    <div className="grid_meta">
                                                                        <div className="product_price">
                                                                            <h4>
                                                                                <a href="single.html">{ item.name }</a>
                                                                            </h4>
                                                                            <div className="grid-price mt-2">
                                                                                <span className="money ">
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
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="googles single-item hvr-outline-out">
                                                                        <button type="submit" className="googles-cart pgoogles-cart">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;