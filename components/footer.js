import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className='bottom-nav bg-body border-top fixed-bottom '>
                <nav className="d-flex justify-content-around align-items-center d-md-none py-2">
                    <Link
                        href="/" className="nav-link text-center" onClick={() => changeColour("home")}>
                        <i className="ri-home-4-line fs-3"></i><br /> Home
                    </Link>

                    <Link href="/search" className='nav-link text-center' onClick={() => { changeColour("search") }}>
                        <i className="ri-search-line fs-3"></i><br /> Search
                    </Link>
                    <Link href="/explore" className="nav-link text-center" onClick={() => { changeColour("explore") }}>
                        <i className="ri-car-line fs-3"></i> <br /> Explore
                    </Link>
                    <Link href="/profile" className="nav-link text-center" onClick={() => { changeColour("profile") }}>
                        <i className="ri-user-3-line fs-3"></i> <br /> Profile
                    </Link>
                    <Link href="/contact" className='nav-link text-center' onClick={() => { changeColour("help") }}>
                        <i className="ri-customer-service-line fs-3"></i><br /> Help
                    </Link>
                </nav>
            </div>

            <footer className="d-none d-md-block bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row g-4 flex-row flex-wrap flex-lg-nowrap">

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                            <h3 className="fw-bold text-white mb-3">
                                <span> LocalNest </span>
                                <i class="ri-home-smile-fill"></i>

                            </h3>
                            <p className="text-light mb-4">
                                Discover a smarter way to rent, buy, or explore properties with a curated experience that connects you instantly with verified owners and genuine listings tailored to your needs.
                            </p>

                            <div className="d-flex gap-3">
                                <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                    <i className="ri-facebook-circle-fill"></i>
                                </a>
                                <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                    <i className="ri-twitter-x-fill" />
                                </a>
                                <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                    <i className="ri-instagram-fill" />
                                </a>
                                <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                    <i className="ri-linkedin-fill" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                            <h5 className="fw-bold text-white mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Browse Properties</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Rent Apartments</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Buy House</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">List Your </a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Pricing</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                            <h5 className="fw-bold text-white mb-4">Support</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Help Center</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">FAQ</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Terms of Service</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                            <h5 className="fw-bold text-white mb-4">Get In Touch</h5>

                            <div className="mb-3 d-flex align-items-start">
                                <i className="ri-map-pin-2-fill text-white fs-5 me-3 mt-1"></i>
                                <div>
                                    <p className="text-light mb-0">
                                        123 Business Park, <br />
                                        Delhi, India 110064
                                    </p>
                                </div>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <i className="ri-phone-fill text-white fs-5 me-3"></i>
                                <a href="tel:+919876543210" className="text-white text-decoration-none footer-link">
                                    +91 98765 43210
                                </a>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <i className="ri-mail-fill text-white fs-5 me-3"></i>
                                <a href="mailto:support@rentmyride.com" className="text-white text-decoration-none footer-link">
                                    support@localnest.com
                                </a>
                            </div>

                            <div className="d-flex align-items-center">
                                <i className="ri-time-fill text-white fs-5 me-3"></i>
                                <p className="text-light mb-0">
                                    24/7 Customer Support
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <p className="text-light mb-0">
                                <small>© 2025 LocalNest. All Rights Reserved.</small>
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="d-flex justify-content-md-end justify-content-start gap-4">
                                <a className="text-white text-decoration-none footer-link" href="#"> Privacy </a>
                                <a className="text-white text-decoration-none footer-link" href="#"> Terms </a>
                                <a className="text-white text-decoration-none footer-link" href="#"> Cookies </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
