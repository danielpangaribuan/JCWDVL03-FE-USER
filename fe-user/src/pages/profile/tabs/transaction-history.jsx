import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from "../../../redux/action/checkout-action";

function TransactionHistory () {

    const dispatch = useDispatch();
    const { data_transaction, user_id } = useSelector(state => {
        return {
            data_transaction: state.transaction.data,
            user_id: state.auth.data.id
        }
    })

    useEffect(() => {
        dispatch(getTransaction(user_id));
    }, [])

    return (
        <div>
            <h4>Transaction History</h4>
        </div>
    )
}

export default TransactionHistory;