import Link from 'next/link'

function Hero_Banner() {
  return (
    <>
      <section className="adu-hero-banner position-relative d-flex align-items-center">
        <img src="/housing-avatar.svg" className="vector-housing-avatar img-fluid" />
        
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="inner-content my-5 mt-md-2">
                <h1>
                  Easiest way to find <span className="adu-custom-underline">ADU potential</span> of your property
                </h1>

                <h4 className="mt-4">
                  Get a free property value card and with cost estimations to build an ADU and <br /> 
                  enhanced value of your property.&nbsp;
                  <Link href="/">
                    <a>Know more about ADUs</a>
                  </Link>
                </h4>

                <form className="adu-form--address mt-5">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your property address" aria-label="Enter your property address" aria-describedby="button-addon2" />
                    <button className="btn adu-btn--orange" type="button" id="button-addon2">Get ADU Report</button>
                  </div>
                </form>

                <h6 className="adu-h6--how-it-works">
                  How it Works&nbsp;&nbsp;
                  <Link href="/">
                    <a>?</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
        
        <div className="vector-container w-100 text-center">
          <img src="/la-skyline.svg" className="vector-skyline img-fluid" alt="" />
        </div>
      </section>
    </>
  )
};

export default Hero_Banner;