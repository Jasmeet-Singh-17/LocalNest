import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-light border-bottom d-flex d-md-none justify-content-evenly">
                <Link href="/" className="navbar-brand fw-bold fs-4">
                    LocalNest  <i class="ri-home-smile-fill"></i>
                </Link>
            </nav>

            <nav className="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-evenly align-items-center">
                <div className="container">
                    <Link href="/" className="navbar-brand fw-bold fs-4">
                        LocalNest  <i class="ri-home-smile-fill"></i>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto gap-3">
                            <li className="nav-item">
                                <Link href="/" className="nav-link custom-nav-link">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/explore" className="nav-link custom-nav-link">
                                    Explore
                                </Link>

                            </li>

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown custom-nav-link"
                                    href="/buy"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    For Buyers
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="/delhi">
                                            Property in Delhi/NCR
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" href="/mumbai">
                                            Property in Mumbai
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" href="/bangalore">
                                            Property in Bangalore
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown custom-nav-link" href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    For Owners
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="/post-property">
                                            Post Property
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" href="/owners-services">
                                            Owners Services
                                        </Link>
                                    </li>
                                </ul>

                            </li>
                        </ul>

                        <div className="d-flex gap-2">
                            <Link href="/login" className="btn btn-outline-dark fw-semibold px-3">
                                Login/Register
                            </Link>
                            <Link href="/help" className="nav-link custom-nav-link fw-bold px-3 mt-1 fs-5 ">
                                <i class="ri-customer-service-2-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


