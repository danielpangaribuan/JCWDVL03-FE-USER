import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Carousel, Button, Form } from 'react-bootstrap'
import { getProductDetail } from "../../redux/action/product-action";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";
import './style.css'

const API_URL = process.env.REACT_APP_API_URL

const ProductDetails = (props) => {
    const { addItem, inCart } = useCart();
    const [input, setInput] = useState(1)
    const [banner, setBanner] = useState('');

    const { id } = useParams();
    const dispatch = useDispatch();

    const { UID, product_detail, product_detail_loading } = useSelector(state => {
        return {
            // UID : state.user.UID,
            product_detail : state.product.product_detail,
            product_detail_loading : state.product.product_detail_loading
        }
    })

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [])

    const alreadyAdded = inCart(product_detail.id);
    const onButtonPlus = () => {
        setInput(input + 1)
    }
    
    const onButtonMin = () => {
        if (input <= 1) return
        setInput(input - 1)
    }

    // const renderImage = () => {
    //     console.log(product_detail_loading)
    //     if (product_detail.length && product_detail) {
    //         return (
    //             product_detail.image_group.map((item, idx) => {
    //                 return (
    //                     <li data-thumb={ `http://localhost:3000/images/products/${ item.image }` } onClick={ () => setBanner(item.image) }>
    //                         <div className="thumb-image"> <img src={ `http://localhost:3000/images/products/${ item.image }` } data-imagezoom="true" className="img-fluid" alt=" " /> </div>
    //                     </li>
    //                 )
    //             })
    //         )
    //     }
    // }
    
    return (
		<section className="banner-bottom-wthreelayouts py-lg-5 py-3">
			<div className="container">
				<div className="inner-sec-shop pt-lg-4 pt-3">
					<div className="row">
                        <div className="col-lg-4 single-right-left ">
                            <div className="grid images_3_of_2">
                                <div className="slides_active">
                                    {/* <img src={ `http://localhost:3000/images/products/${product_detail.image_group[0].image}` } data-imagezoom="true" className="img-fluid" alt=" " /> */}
                                </div>
                                <div className="flexslider1">
                                    <ul className="slides">
                                        {/* <li data-thumb={ `http://localhost:3000/images/products/${product_detail.image_group[0].image}` } onClick={ () => setBanner(product_detail.image_group[0].image) }>
                                            <div className="thumb-image"> <img src={ `http://localhost:3000/images/products/${product_detail.image_group[0].image}` } data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                        </li>
                                        <li data-thumb={ `http://localhost:3000/images/products/${product_detail.image_group[1].image}` } onClick={ () => setBanner(product_detail.image_group[1].image) }>
                                            <div className="thumb-image"> <img src={ `http://localhost:3000/images/products/${product_detail.image_group[1].image}` } data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                        </li>
                                        <li data-thumb={ `http://localhost:3000/images/products/${product_detail.image_group[2].image}` } onClick={ () => setBanner(product_detail.image_group[2].image) }>
                                            <div className="thumb-image"> <img src={ `http://localhost:3000/images/products/${product_detail.image_group[2].image}` } data-imagezoom="true" className="img-fluid" alt=" " /> </div>
                                        </li> */}
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                            <h2 className='mb-4 text-danger'>{ product_detail.product_name }</h2>
                            <span className="item_price">
                                {
                                    <NumberFormat
                                        thousandsGroupStyle="thousand"
                                        value={product_detail.price }
                                        prefix="Rp. "
                                        decimalSeparator="."
                                        displayType="text"
                                        type="text"
                                        thousandSeparator={true}
                                        allowNegative={true} />
                                    
                                }
                            </span>
                            {
                                alreadyAdded ?
                                <h5 className='text-secondary my-3'>Already in Cart</h5>
                                :
                                <>
                                    <div className="color-quality my-4">
                                        <div className="color-quality-right">
                                            <h5>Quantity :</h5>
                                            <div className="input-quantity d-flex mb-1">
                                                <Button variant="btn btn-secondary" onClick={onButtonMin}>-</Button>
                                                <Form.Control className="mx-2" type="text" placeholder="" value={input} onChange={(e) => setInput(Number(e.target.value))} style={{ width: 100 }} readOnly />
                                                <Button variant="btn btn-success" onClick={onButtonPlus}>+</Button>
                                            </div>
                                            <span className='text-secondary'>Stock: { product_detail.quantity < 5 ? <span className='text-danger'>{product_detail.quantity}</span> : <span>{product_detail.quantity}</span> }</span>
                                        </div>
                                    </div>
                                    <div className="occasion-cart">
                                        <div className="googles single-item singlepage">
                                            <button type="submit" className="googles-cart pgoogles-cart" onClick={ () => addItem(product_detail, input)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="clearfix"> </div>
                        <div className="responsive_tabs">
                            <div id="horizontalTab">
                                <h4>Description</h4>
                                <div className="resp-tabs-container">
                                    <div className="single_page">
                                        <p>{ product_detail.description }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails