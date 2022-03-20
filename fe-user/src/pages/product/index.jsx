import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Pagination } from 'react-bootstrap';

import { getProduct, getCategory } from "../../redux/action/product-action";
import NumberFormat from "react-number-format";
import "./style.css";


function Product () {
    const { addItem, items } = useCart();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);
    const [search, setSearch] = useState('');
    const [categoryID, setCategoryID] = useState([]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, category, totalPage, currPage, totalData } = useSelector(state => {
        return {
            data: state.product.data.rows,
            category: state.product.category,
            totalPage : state.product.data.totalPage,
            currPage : state.product.data.currentPage,
            totalData : state.product.data.length,
        }
    });

    useEffect(() => {
        const params = { "product_name": "", "category_id": [], page, size}
        dispatch(getProduct(params));
        dispatch(getCategory());
    }, [page, size]);

    const handleFilterChange = (event) => {
        // setParams((prevProps) => ({
        //     ...prevProps,
        //     [event.target.name]: event.target.value
        // }))
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setPage(1);
        const params = { "product_name": search, "category_id": categoryID, size, page };
        dispatch(getProduct(params))
    }

    const handleCategory = (id) => {
        setCategoryID(id);
        setPage(1)
        const params = { "product_name": search, "category_id": id, size, page };
        dispatch(getProduct(params))
    }

    const handlerPageSize = (id) => {
        setSize(id);
        setPage(1);
        const params = { "product_name": search, "category_id": categoryID, size, page };
        dispatch(getProduct(params))
    }

    const addItemCart = (item_checkout) => {
        let disabledButton = false;
        for (let i = 0; i < items.length; i++) {
            if (items[0].id === item_checkout.id) {
                if(items[0].quantity >= parseInt(item_checkout.quantity)) {
                    disabledButton = true;
                }
            }
        }
        if (!disabledButton) {
            return (
                <button type="submit" className="googles-cart pgoogles-cart" onClick={ () => addItem(item_checkout)} >
                    <i className="fas fa-cart-plus"></i>
                </button>
            )
        } else {
            return (
                <button type="submit" className="googles-cart pgoogles-cart" disabled={true} >
                    <i className="fas fa-cart-plus"></i>
                </button>
            )
        }
    }

    const renderProduct = () => {
        return data.map((item, idx) => {
            return (
                <div className="col-md-3 mb-2 product-men women_two shop-gd" key={ idx }>
                    <div className="product-googles-info googles">
                        <div className="men-pro-item">
                            <div className="men-thumb-item">
                                <img src={ `http://localhost:3000/images/products/${ item.image }` } className="img-fluid" alt="" />
                                <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                        <a onClick={ () => navigate(`/product/detail/${item.id}`)} className="link-product-add-cart text-white">Quick View</a>
                                    </div>
                                </div>
                                {/* <span className="product-new-top">New</span> */}
                            </div>
                            <div className="item-info-product">
                                <div className="info-product-price">
                                    <div className="grid_meta">
                                        <div className="product_price">
                                            <h4>
                                                <a onClick={ () => navigate(`/product/detail/${item.id}`)}>{ item.product_name }</a>
                                                <br />
                                                <span className='text-muted' style={{ fontSize: 12 }}>{item.category}</span>
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
                                                <br />
                                                <span className='text-muted'>{item.province_name}</span>
                                                    {
                                                        item.quantity <= 0 ?
                                                        <span style={{ fontSize: 12 }} className="text-muted"> Out of stock</span>
                                                        :
                                                        item.quantity < 3 ?
                                                        <span className='text-danger' style={{ fontSize: 12 }}> ({item.quantity} items)</span>
                                                        :
                                                        <span style={{ fontSize: 12 }} className="text-muted"> Available {item.quantity} items</span>
                                                    } 
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        item.quantity <= 0 ? '' :
                                        <div className="googles single-item hvr-outline-out">
                                            {
                                                addItemCart(item)
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const renderPagination = () => {
        let pagination = [];
        for(let i = 1; i <= totalPage; i++ ) {
            let active = i === currPage ? 'active' : '';
            pagination.push(<Pagination.Item key={i} className={active} onClick={ () => setPage(i) }>{i}</Pagination.Item>)
        }
        return pagination;
    }

    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">Products for you </h3>
                    <div className="row">
                        {/* <!-- product left --> */}
                        <div className="side-bar col-lg-3">
                            <div className="search-hotel">
                                <h3 className="agileits-sear-head">Search Here..</h3>
                                <form onSubmit={ handleSearch }>
                                    <input className="form-control" type="search" name="product_name" placeholder="Search here..." required="" onChange={(event) => setSearch(event.target.value)} />
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
                                        <input type="radio" className="checked" checked={categoryID == '' ? true : false} name='category_id' value="" style={{ width: 20, height: 20}} onClick={() => handleCategory('') } />
                                        <span className="span ml-3" style={{ fontSize: 18 }}>All</span>
                                    </li>
                                    {
                                        category.map((item, idx) => {
                                            return (
                                                <li key={ idx } className="d-flex align-items-center mb-2">
                                                    <input type="radio" className="checked" checked={categoryID == item.id ? true : false} name='category_id' value={ item.id } style={{ width: 20, height: 20}} onClick={() => handleCategory(item.id) } />
                                                    <span className="span ml-3" style={{ fontSize: 18 }}>{ item.name }</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Sort</h3>
                                <ul>
                                    <li className="d-flex align-items-center mb-2">
                                        <input type="radio" className="checked" name='category_id' value='ASC' style={{ width: 20, height: 20}} onClick={handleFilterChange} />
                                        <span className="span ml-3" style={{ fontSize: 18 }}>Low to High</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <input type="radio" className="checked" name='category_id' value='DESC' style={{ width: 20, height: 20}} onClick={handleFilterChange} />
                                        <span className="span ml-3" style={{ fontSize: 18 }}>High to Low</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- //product left --> */}
                        {/* <!--/product right--> */}
                        <div className="left-ads-display col-lg-9">
                            <div className="wrapper_top_shop">
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center mb-2">
                                        Rows :
                                        <Pagination className='mb-0 ml-2'>
                                            <Pagination.Item onClick={ () => handlerPageSize(4) } className={ size == 4 ? 'active' : '' } >{4}</Pagination.Item>
                                            <Pagination.Item onClick={ () => handlerPageSize(12) } className={ size == 12 ? 'active' : '' } >{12}</Pagination.Item>
                                            <Pagination.Item onClick={ () => handlerPageSize(20) } className={ size == 20 ? 'active' : '' } >{20}</Pagination.Item>
                                            <Pagination.Item onClick={ () => handlerPageSize(100) } className={ size == 100 ? 'active' : '' } >{'All'}</Pagination.Item>
                                        </Pagination>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end align-items-center mb-2">
                                        <Pagination className='mb-0'>
                                            <Pagination.Prev onClick={ () => setPage(currPage - 1) } className={currPage ===  1 ? 'disabled' : ''} />
                                            { renderPagination() }
                                            <Pagination.Next onClick={ () => setPage(currPage + 1) } className={currPage === totalPage ? 'disabled' : ''} />
                                        </Pagination>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        data ? renderProduct() : ''
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