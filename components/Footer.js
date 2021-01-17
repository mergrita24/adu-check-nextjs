import Link from 'next/link'
import Copyright from '@components/Copyright'

function Footer() {
  return (
    <>
      <footer className="adu-footer position-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
        
            {/* Left */}
            <div className="col-12 col-lg-6">
              <div className="inner-content--left mt-5 mb-0 my-lg-5 ">
                <img src="/adu-check-logo-2.svg" className="adu-logo" alt="" />
                <p className="adu-tagline m-0 mt-3">Easiest way to find ADU potential of your property</p>
              </div>
            </div>

            {/* Right */}
            <div className="col-12 col-lg-6">
              <div className="inner-content--right my-5">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                    <p className="adu-footer--menu--title">Quick Links</p>
                   
                    <ul className="adu-footer--menu plain">
                      <li>
                        <Link href="/">
                          <a>About ADU Check</a>
                        </Link>
                      </li>
                      
                      <li>
                        <Link href="/">
                          <a>Get ADU Report</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 mt-sm-0 col-12 col-sm-6 col-md-4 col-lg-5">
                    <p className="adu-footer--menu--title">Partner Services</p>
                    
                    <ul className="adu-footer--menu plain">
                      <li>
                        <Link href="/">
                          <a>For Financial Services</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>For Construction</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>For Interiors</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 mt-md-0 col-12 col-sm-6 col-md-4 col-lg-3">
                    <p className="adu-footer--menu--title">Connect with us</p>
                    
                    <ul className="adu-footer--menu plain">
                      <li>
                        <Link href="/">
                          <a>
                            <i className="adu-icon-facebook"></i>
                            <span className="ms-2">Facebook</span>  
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>
                            <i className="adu-icon-youtube"></i>
                            <span className="ms-2">Youtube</span>  
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>
                            <i className="adu-icon-instagram"></i>
                            <span className="ms-2">Instagram</span>  
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <Copyright copyright="© ADUCheck.com" />
    </>
  )
};

export default Footer;
