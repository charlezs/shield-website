import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
type Child ={
    children: string;
}

function Layout({children}: Child) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;