import React from 'react'
import about1 from './img/about/1.png'
import about2 from './img/about/2.png'
import about3  from './img/about/About1.jpeg'

import './about.css'
const About = () => {
    return (
        <>
            <div class="containerr pt-5 mt-5 container">
                <h1 class="pt-5 mt-5" >About Us</h1>

                <div className="shop-image-container text-center mb-5">
                    <img className="img-fluid w-75" src={about3} alt="Shop" />
                </div>

                <hr class="mx-auto" />
                <p >Welcome to AJXS, your one-stop destination for all your printing needs. We are dedicated to providing
                    high-quality printing services with exceptional customer satisfaction.</p>

                <h2 >Our Mission</h2>
                <p >At AJXS, our mission is to deliver top-notch printing solutions that meet and exceed our customers'
                    expectations. We strive to provide a seamless printing experience by combining advanced technology, premium
                    materials, and excellent customer service.</p>


                <section id="blog-container" class="container pt-5">
                    <div class="row">

                        <div class="post col-lg-6 col-md-6 col-12 pb-5">
                            <div class="post-img">
                                <img class="img-fluid w-100" src={about1} alt="image1" />
                            </div>

                        </div>
                        <div class="post col-lg-6 col-md-6 col-12 pb-5">
                            <h2 >Our Services</h2>
                            <p>We offer a wide range of printing services to cater to various needs:</p>
                            <ul >
                                <li>Business Cards</li>
                                <li>Flyers and Brochures</li>
                                <li>Posters</li>
                                <li>Letterheads</li>
                                <li>Envelopes</li>
                                <li>Banners</li>
                                <li>Custom Printing</li>
                            </ul>

                        </div>
                    </div>
                </section>
                <section id="blog-container" class="container pt-5">
                    <div class="row">
                        <div class="post col-lg-6 col-md-6 col-12 pb-5">
                            <h2 >Why Choose AJXS?</h2>
                            <p >There are several reasons why AJXS is your best choice for printing:</p>
                            <ul >
                                <li>High-quality prints</li>
                                <li>Fast turnaround time</li>
                                <li>Competitive pricing</li>
                                <li>Responsive customer support</li>
                                <li>Secure online ordering</li>
                                <li>Wide range of customization options</li>
                            </ul>

                        </div>
                        <div class="post col-lg-6 col-md-6 col-12 pb-5">
                            <div class="post-img">
                                <img class="img-fluid w-100" src={about2} alt="image" />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About