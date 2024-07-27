import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>�� {year} My Website. All rights reserved.</p>
        </footer>
    );
};

export default Footer;