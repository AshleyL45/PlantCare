import * as React from 'react';
import Header from '../pages/A_header/Header'; // Assure-toi que le chemin est bon

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutWithBar: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default LayoutWithBar;
