function Navigation() {
  return (
    <>
     <section className="adu-navigation-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg adu-nav bg-transparent">
                <a className="navbar-brand d-flex align-items-center" href="/">
                  <img src="/adu-check-logo-1.svg" className="adu-logo" alt="" />
                </a>
                
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#aduNavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav outside-collapse d-inline d-lg-none">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="adu-icon-avatar"></i>
                    </a>
                  </li>
                </ul>
                  
                <div className="collapse navbar-collapse" id="aduNavbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">Adu Inspiration</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">Partners</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link convert-btn" href="#">Get Adu Report</a>
                    </li>

                    <li className="nav-item d-none d-lg-inline">
                      <a className="nav-link" href="#">
                        <i className="adu-icon-avatar"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Navigation;