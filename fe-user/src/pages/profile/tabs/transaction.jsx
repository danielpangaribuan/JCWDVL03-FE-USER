import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Dropdown } from 'react-bootstrap';
import { getTransaction, updateReceipt } from "../../../redux/action/checkout-action";
import { DateTime } from 'react-datetime-bootstrap';
import Dropzone from "react-dropzone";
import $ from 'jquery';
import moment from 'moment';

function Transaction () {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY/MM/DD'));
    const [selectedInvoice, setSelectedInvoice] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleSubmit = (e, data) => {
        e.preventDefault();
        setSelectedInvoice(data);
        handleShow();
    };

    const onSubmitReceipt = () => {
        const body = { file: selectedFile, date_transfer: selectedDate }
        dispatch(updateReceipt(selectedInvoice, body));
        handleClose();
    }
    
    const { data_transaction, data, loading, loadingUpload } = useSelector(state => {
        return {
            data_transaction: state.transaction.data,
            data: state.auth.data,
            loading: state.auth.loading,
            loadingUpload: state.transaction.loading
        }
    });

    useEffect(() => {
        if (data)
            dispatch(getTransaction(data.id));
    }, [loading]);

    const handlerShopUpload = (item) => {
        if ($(`#formUpload${item}`).hasClass('open')) $(`#formUpload${item}`).removeClass('open')
        else {
            if ($('.form-upload-wrapper.open')) {
                $('.form-upload-wrapper.open').removeClass('open');
            }
            $(`#formUpload${item}`).addClass('open')
            setSelectedFile('');
        }
    }

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
                                    { moment(val.created_at).format('MMMM Do YYYY') }
                                </span>
                            </div>
                            <div className="head-list-right d-flex align-items-center">
                                {
                                    val.status_id === 1 ? (
                                        <button className='btn btn-dark' onClick={ () => handlerShopUpload(idx) }>
                                            Upload Receipt Transfer
                                        </button>
                                    ) : (
                                        ''
                                    )
                                }
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent">
                                        <span className="fas fa-ellipsis-v"></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark" className='bg-dark'>
                                        <Dropdown.Item >
                                            {/* <PDFDownloadLink document={<MyDoc  data={user} />} fileName="somename.pdf">
                                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' :<a href={url}>Url Link here</a>)}
                                            </PDFDownloadLink> */}
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                            Download Inovice
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Batalkan Transaksi</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
                                <div className='form-upload-wrapper' id={`formUpload${idx}`}>
                                    <form>
                                        <div className="form-upload">
                                            <Dropzone onDrop={acceptedFiles => setSelectedFile(acceptedFiles[0].name)}>
                                                {({getRootProps, getInputProps}) => (
                                                    <section>
                                                        <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <div className="d-flex align items-center btn btn-primary">
                                                                <span className="fas fa-cloud-upload-alt mt-1 mr-2"></span>
                                                                Choose image
                                                            </div>
                                                            {
                                                                selectedFile === '' ? '' : <span className='mt-1 text-muted'>File : {selectedFile}</span>
                                                            }
                                                        </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </div>
                                        <DateTime pickerOptions={{format:"LL"}} value={selectedDate} id="dateTime" onChange={ (event) => setSelectedDate(moment(event).format("YYYY-MM-DD")) } className="mr-2" />
                                        <button className="btn btn-success" onClick={ (e) => handleSubmit(e, val.invoice_number) } disabled={selectedFile === '' ? true : false}>Upload</button>
                                    </form>
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
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{selectedInvoice}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to upload this receipt ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ () => onSubmitReceipt() }>Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Transaction;