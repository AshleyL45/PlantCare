import * as React from 'react';
import Header from '../pages/A_header/Header';
import Footer from "../pages/C_footer/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutWithBar: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default LayoutWithBar;
