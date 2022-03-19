import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from "../../../redux/action/checkout-action";

function Transaction () {
    const [uploadShow, setUploadShow] = useState(false);
    const dispatch = useDispatch();
    const { data_transaction, user_id } = useSelector(state => {
        return {
            data_transaction: state.transaction.data,
            user_id: state.auth.data.id
        }
    });

    useEffect(() => {
        dispatch(getTransaction(user_id));
    }, []);

    const transactionHandler = () => {
        if (data_transaction) {
            return data_transaction.map((val, idx) => {
                return (
                    <li key={idx} className="transaction-list">
                        <div className="head-list d-flex justify-content-between">
                            <div className="head-list-left">
                                <div className="d-flex">
                                    <span className="fas fa-shopping-bag text-success mr-2"></span>
                                    <h5 className='text-black mb-0'>
                                        Transaction <span style={{ fontSize: 14 }} className="text-muted">({ val.status })</span>
                                    </h5>
                                </div>
                                <span className='text-muted ml-4' style={{ fontSize: 14 }}>
                                    { val.created_at }
                                </span>
                            </div>
                            <div className="head-list-right">
                                {
                                    val.status_id === 1 ? (
                                        <button className='btn btn-dark' onClick={ () => setUploadShow(uploadShow == false ? true : false) }>
                                            Upload Receipt Transfer
                                        </button>
                                    ) : (
                                        ''
                                    )
                                }
                                <button className='btn btn-transparent'>
                                    <span className="fas fa-ellipsis-v"></span>
                                </button>
                            </div>
                        </div>
                        <div className="body-list">
                            <ul style={{ listStyle: 'none' }} className="transaction-items">
                                {
                                    val.item.map((obj, index) => {
                                        return (
                                            <li key={index} className="list-item">
                                                <div className="image">
                                                    <img src={ `http://localhost:3000/images/products/${obj.image}` } alt="" style={{ width: 80 }} />
                                                </div>
                                                <div className="detail">
                                                    <h5 className='mb-0'>{obj.product_name}</h5>
                                                    <p className='mb-0'>{obj.price} x {obj.quantity} items</p>
                                                    <p className='mb-0'>{obj.sub_total}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            val.status_id === 1 ? (
                                <div className={`form-upload-wrapper ${uploadShow === true ? 'open' : ''}`}>
                                    <div className="form-upload">
                                        <input type="file" />
                                    </div>
                                </div>
                            ) : (
                                ''
                            )
                        }

                    </li>
                )
            })
        } else {
            return (
                <li>
                    <h5>No Transaction</h5>
                </li>
            )
        }
    }

    return (
        <div>
            <h4>Transaction History</h4>
            <ul style={{ listStyle: 'none' }}>
                { transactionHandler() }
            </ul>
        </div>
    )
}

export default Transaction;