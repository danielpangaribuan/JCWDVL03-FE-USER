import React from 'react';
import { useNavigate } from "react-router-dom";

function Checkout () {
    const navigate = useNavigate();
    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <div className="inner-sec-shop px-lg-4 px-3">
                    <h3 className="tittle-w3layouts my-lg-4 mt-3">Checkout </h3>
                    <div className="checkout-right">
                        <h4>Your shopping cart contains:
                            <span>3 Products</span>
                        </h4>
                        <table className="timetable_sub table table-bordered">
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Product Name</th>

                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="rem1">
                                    <td className="invert">1</td>
                                    <td className="invert-image">
                                        <a href="single.html">
                                            <img style={{ width: 120 }} src="http://localhost:3000/images/products/s1.jpg" alt=" " className="img-responsive"/>
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Irayz Butterfly </td>

                                    <td className="invert">$281.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close1"> </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr className="rem2">
                                    <td className="invert">2</td>
                                    <td className="invert-image">
                                        <a href="single.html">
                                            <img style={{ width: 120 }} src="http://localhost:3000/images/products/s5.jpg" alt=" " className="img-responsive"/>
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Fastrack Aviator </td>

                                    <td className="invert">$325.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close2"> </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr className="rem3">
                                    <td className="invert">3</td>
                                    <td className="invert-image">
                                        <a href="single.html">
                                            <img style={{ width: 120 }} src="http://localhost:3000/images/products/s2.jpg" alt=" " className="img-responsive"/>
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Opium (Grey)</td>

                                    <td className="invert">$325.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close3"> </div>
                                        </div>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-left row">
                        <div className="col-md-4 checkout-left-basket">
                            <h4 className='bg-info text-center text-white py-2'>Continue to basket</h4>
                            <ul>
                                <li className='d-flex justify-content-between mb-3 text-muted'>
                                    <span>Product1 <i>-</i></span>
                                    <span>$281.00 </span>
                                </li>
                                <li className='d-flex justify-content-between mb-3 text-muted'>
                                    <span>Product2 <i>-</i></span>
                                    <span>$325.00 </span>
                                </li>
                                <li className='d-flex justify-content-between mb-3 text-muted'>
                                    <span>Product3 <i>-</i></span>
                                    <span>$325.00 </span>
                                </li>
                                <li className='d-flex justify-content-between mb-3 text-muted'>
                                    <span>Total Service Charges <i>-</i></span>
                                    <span>$55.00</span>
                                </li>
                                <li className='d-flex justify-content-between mb-3 font-weight-bold'>
                                    <span>Total <i>-</i></span>
                                    <span>$986.00</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 address_form">
                            <h4>Add a new Details</h4>
                            <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
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
                                                <label className="control-label">Town/City: </label>
                                                <input className="form-control" type="text" placeholder="Town/City" />
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Address type: </label>
                                                <select className="form-control option-w3ls">
                                                    <option>Office</option>
                                                    <option>Home</option>
                                                    <option>Commercial</option>

                                                </select>
                                            </div>
                                        </div>
                                        <button className="submit check_out btn btn-block btn-dark" onClick={ () => navigate('/payment')}>Make a Payment</button>
                                    </div>
                                </section>
                            </form>
                        </div>

                        <div className="clearfix"> </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Checkout;