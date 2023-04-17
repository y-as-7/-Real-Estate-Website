import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <section className="f-wrapper">
                <div className="paddings innerWidth flexCenter f-container">
                    {/* left side  */}
                    <div className="flexColStart f-let">
                        <img src="./logo2.png" alt="" width={120} />
                        <span className='secondaryText'>
                            Our Vision is to make all people <br />
                            the best place to live for them.
                        </span>
                    </div>
                    {/* right side */}
                    <div className='flexColStart f-right'>
                        <span className='primaryText'>Information</span>
                        <span className='secondaryText'>145 New York ,2422 ,USA</span>
                        <div className="flexCenter f-menu">
                            <span className=''>Property</span>
                            <span className=''>Services</span>
                            <span className=''>Product</span>
                            <span className=''>About Us</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
