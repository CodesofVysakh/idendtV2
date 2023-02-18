import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            <Header setScroll={props.setScroll}/>
                {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
