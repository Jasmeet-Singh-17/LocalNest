import React from "react";
import Footer from "@/components/footer";

const SearchPage = () => {

    const recentSearches = [
        {
            img: "/props/4.jpeg",
            name: "BlueStone Heights",
            type: "For Rent"
        },
        {
            img: "/props/3.jpeg",
            name: "Skyline Homes",
            type: "For Sale"
        },
        {
            img: "/props/5.jpeg",
            name: "Well Apartments",
            type: "For PG/Rent/Commerical Use "
        },
    ];


    return (
        <>
            {/* Search Bar */}
            <section className="d-flex align-items-center gap-2 bg-white text-black p-2 position-sticky top-0 border-bottom"> <div className="d-flex align-items-center flex-grow-1 bg-dark-subtle rounded-3 px-3 py-2">
                <i className="ri-search-line text-secondary me-2"></i>
                <input type="search"
                    placeholder="Search Property..."
                    className="border-0 bg-transparent text-dark w-100 outline-0 "
                    style={{ outline: 'none' }} />
            </div>
            </section>

            <div className="container mt-2">
                <div className="d-flex align-items-center my-2 ">
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
                    <span className="text-secondary text-uppercase fw-semibold ms-3"> Recently Viewed
                    </span>
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-md-6">
                            {recentSearches.map((item) => (
                                <div
                                    className="d-flex align-items-center mb-4 px-2"
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        width="70"
                                        className="img-fluid me-3 rounded-2"
                                    />
                                    <div>
                                        <h5 className="mb-0">{item.name}</h5>
                                        <small className="text-muted">{item.type}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default SearchPage;