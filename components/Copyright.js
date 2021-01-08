import Link from 'next/link'

function Copyright({ copyright }) {
  return (
    <>
      <div className="adu-copyright position-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
            
            {/* Left */}
            <div className="col-12 col-sm-6">
              <div className="inner-content--left mt-3 my-sm-3">
                <span>{copyright}</span>
              </div>
            </div>

            {/* Right */}
            <div className="col-12 col-sm-6">
              <div className="inner-content--right my-3">
                <ul className="inline">
                  <li>
                    <Link href="/">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a>Terms of Use</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export default Copyright;