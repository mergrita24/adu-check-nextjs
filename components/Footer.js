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
              <div className="inner-content--left my-5">
                <img src="/adu-check-logo-2.svg" className="adu-logo" alt="" />
                <p className="adu-tagline m-0 mt-3">Easiest way to find ADU potential of your property</p>
              </div>
            </div>

            {/* Right */}
            <div className="col-12 col-lg-6">
              <div className="inner-content--right my-5">
                <div className="row">
                  <div className="col-12 col-md-4">
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

                  <div className="col-12 col-md-4">
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

                  <div className="col-12 col-md-4">
                    <p className="adu-footer--menu--title">Connect with us</p>
                    <ul className="adu-footer--menu plain">
                      <li>
                        <Link href="/">
                          <a>Facebook</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>Youtube</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/">
                          <a>Instagram</a>
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
