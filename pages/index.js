import React, { PureComponent } from 'react'
import Navbar from '@/components/navbar'
import Propertycard from '@/components/propertycard'
import Footer from '@/components/footer'

class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Navbar />

        <section style={{ height: "500px", position: "relative" }} >

          <img src="/1.webp" alt="banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          <div style={{
            position: "absolute",
            top: "35%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}>
            <h1 className='text-white fs-1 fw-bold' style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.6)"
            }}>
              Welcome to LocalNest
            </h1>
            <div className="d-flex gap-3 my-4 justify-content-center flex-wrap">
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> Instant Booking
              </span>
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> 24/7 Support
              </span>
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> Best Prices
              </span>
            </div>
          </div>
        </section>

        <section style={{ padding: "20px" }} className='' >
          <h1 className='d-flex justify-content-center align-items-center'>
            Find Your Perfect Properties
          </h1>
          <div className='d-flex justify-content-center gap-2 p-3'>
            <input
              type="text" placeholder="Search properties..." className='rounded-3 fs-6  '
              style={{
                width: "50%",
                padding: "10px 15px",
                border: "1px solid #ccc",
              }}
            />

            <button className='text-white fs-5 rounded-3 btn btn-dark'
              style={{
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Search
            </button>

          </div>
        </section>

        <section className='py-4' style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h1 className='text-center fw-semibold m-3 mb-3'>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h1>
            <div className="row g-3">

              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./2.webp" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">Buying a home</h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./3.webp" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">Renting a home</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./4.webp" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">Invest in Estate</h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./5.webp" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">Plots/Land</h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./7.png" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">Sell property </h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 col-lg-2">
                <div className="card rounded-3 p-1" style={{ cursor: 'pointer' }}>
                  <div className="card-body text-center">
                    <img src="./6.webp" className="card-img img-fluid" alt="1"></img>
                    <h5 className="card-title fw-semibold mt-1">PG and co-living</h5>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h1 className='text-center fw-semibold m-3 mb-3'>Newly-added properties</h1>


            <Propertycard />
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Index