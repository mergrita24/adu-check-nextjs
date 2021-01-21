const Home_section_2 = () => (
  <section className="adu-home--section-2 position-relative d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="inner-content--left adu-home--sec2-card">
            <div className="container home-sec2-card-container py-5">
              <h2 className="adu-sec2--benefits">Benefits of an ADU</h2>
              <p className="adu-sec2--benefits-description">
                In an attempt to account for the latest surge in home values,
                accessory dwelling units have helped homeowners accommodate the
                transition for years
              </p>
            </div>

            <div class="container home-sec2-card-container">
              <div className="row">
                <div className="col-lg-6 col-6">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <i
                        style={{ fontSize: "30px" }}
                        className="adu-icon-avatar"
                      ></i>
                    </div>
                    <div className="col-lg-8 col-12">
                      <p className="adu-benefits-points">
                        Increased
                        Living Space
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <i
                        style={{ fontSize: "30px" }}
                        className="adu-icon-avatar"
                      ></i>
                    </div>
                    <div className="col-lg-8 col-12">
                      <p className="adu-benefits-points">
                        Additional Rental Income
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6 mt-lg-5">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <i
                        style={{ fontSize: "30px" }}
                        className="adu-icon-avatar"
                      ></i>
                    </div>

                    <div className="col-lg-8 col-12">
                      <p className="adu-benefits-points">
                        Increased Property Value
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6 mt-lg-5">
                  <div className="row">
                    <div className="col-lg-3 col-12">
                      <i
                        style={{ fontSize: "30px" }}
                        className="adu-icon-avatar"
                      ></i>
                    </div>
                    <div className="col-lg-8 col-12">
                      <p className="adu-benefits-points">
                        Optional
                        Home Office
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="inner-content--right my-5">
            <img className="adu-img1" src="/group-31.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home_section_2;
