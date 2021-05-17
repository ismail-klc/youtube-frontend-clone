import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
    const location = useLocation();
    const path = location.pathname;
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (location){
            setShow(path !== '/watch')
        }
    }, [location])

    return (
        <div className="main">
            <Header 
                show={show}
                setShow={() => setShow(!show)}
            />
            <div className="page">
                { show && <Sidebar />}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
