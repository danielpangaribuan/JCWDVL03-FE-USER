import React from 'react';
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import ProfileDetail from "./tabs/profile-detail";
import Transaction from "./tabs/transaction";
import TransactionHistory from "./tabs/transaction-history";
import './style.css';
import { useEffect } from 'react';

function Profile () {
    const navigate = useNavigate();

    useEffect(() => {
        const TOKEN = localStorage.getItem('token');
        if (!TOKEN) navigate('/')
    })

    return (
        <div className='profile-page my-4'>
            <div className="container">
                <h2 className='my-4'>Profile</h2>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Data Account">
                        <ProfileDetail />
                    </Tab>
                    <Tab eventKey="profile" title="Transaction Status">
                        <Transaction />
                    </Tab>
                    <Tab eventKey="contact" title="Transaction History">
                        <TransactionHistory />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Profile