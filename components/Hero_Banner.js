import Link from 'next/link'

function Hero_Banner() {
  return (
    <>
      <section className="adu-hero-banner position-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="inner-content my-5">
                <h1>
                  Easiest way to find ADU potential of your property
                </h1>

                <h4 className="mt-4">
                  Get a free property value card and with cost estimations 
                  to build an ADU and enhanced value of your property.&nbsp;
                  <Link href="/">
                    <a>Know more about ADUs</a>
                  </Link>
                </h4>
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