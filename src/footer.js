import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css'
const Footer = () => {
    const handleClick = () => {
        window.location.href = 'https://instagram.com/avanijumboxerox?igshid=MzNlNGNkZWQ4Mg==';
      };
    return (
        <>
            <footer className="mt-3 pt-3 py-5">
                <div className="row container mx-auto mt-5">
                    <div className="footer-one col-lg-3 col-md-6 col-12">
                        <img className="img-fluid w-60 h-30 m-2" src="img/logo/name.png" alt="" />
                        <p className="pt-2">
                            AJXS is an experienced printing company that can fulfill a number of printing requirements, providing
                            exceptional design solutions for online and offline advertising content.
                        </p>
                    </div>
                    <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                        <h5 className="pb-2">Featured</h5>
                        <ul className="text-uppercase list-unstyled">
                            <li>
                                <Link to='/product'>Stationery</Link>
                            </li>
                            <li>
                                <Link to='/product'>Printing</Link>
                            </li>
                            <li>
                                <Link to='/product'>Gifting</Link>
                            </li>
                            <li>
                                <Link to='/product'>Xerox Service</Link>
                            </li>
                            <li>
                                <Link to='/product'>Combo Offer's</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                        <h5 className="pb-2">Know Us</h5>
                        <div>
                            <h6 className="text-uppercase">Address</h6>
                            <p>
                                <Link to='https://goo.gl/maps/vXF5fnxjRMY7RLdE6'>

                                    opp.Canara Bank,<br />
                                    Dahisar (West),<br />
                                    Mumbai-400068
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="text-uppercase">Phone</h6>
                            <p>
                                <Link to='tel:9320999385'>
                                    9320999385</Link>
                                    <br/>
                                    <Link to='tel:7304700495'>
                                    7304700495</Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="text-uppercase">Email</h6>
                            <p>
                                <Link to='mailto:avanixerox999@gmail.com?subject=Enquire&body=Enquiry'>

                                    avanixerox999@gmail.com
                                </Link>
                                <br />
                                <Link to='mailto:gadakirti54@gmail.com?subject=Enquire&body=Enquiry'>

                                    gadakirti54@gmail.com
                                </Link>

                            </p>
                        </div>
                        <div>
                            <h6 className="text-uppercase">whatsapp</h6>
                            <p>
                                <Link to="https://wa.me/917738405495?text=I'm%20interested%20in%20your%20service/product%20">
                                    7738405495
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="footer-one col-lg-3 col-md-6 col-12">
                        <h5 className="pb-2">Current Offers</h5>
                        <div className="row">
                            <img
                                onClick={handleClick}className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/1.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                            <img
                                onClick={handleClick}className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/2.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                            <img
                               onClick={handleClick} className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/3.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                            <img
                               onClick={handleClick}className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/4.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                            <img
                               onClick={handleClick}className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/5.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                            <img
                               onClick={handleClick}className="img-fluid w-25 h-100 m-2"
                                src="./img/offer/6.jpg"
                                style={{ cursor: 'pointer' }}
                                alt="offer"
                            />
                        </div>
                    </div>
                </div>

                <div className="copyright mt-5 mb-5">
                    <div className="row container mx-auto">
                        <div className="col-lg-2 col-md-6 col-12 mb-3">
                            <img src="./img/payment.png" alt="payment" />
                        </div>
                        <div className="col-lg-5 col-md-6 col-12  mb-2">
                            <p>AJXS eCommerce©2023. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <Link to="tel:9320999385">
                                <i className="fas fa-phone-alt"></i>
                            </Link>
                            <Link to="https://wa.me/917738405495?text=I'm%20interested%20in%20your%20service/product%20">
                                <i className="fab fa-whatsapp"></i>
                            </Link>
                            <Link to="mailto:avanixerox999@gmail.com?subject=Enquire&body=Enquiry">
                                <i className="fal fa-envelope"></i>
                            </Link>
                            <Link to="https://goo.gl/maps/vXF5fnxjRMY7RLdE6">
                                <i className="far fa-map-marker-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer