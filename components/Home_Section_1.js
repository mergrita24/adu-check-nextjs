const Home_Section_1 = () => (
  <section class="adu-home--section-1 position-relative d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="inner-content--left my-5">
            <h2 className="adu-sec1--what-is-adu">WHAT IS AN ADU?</h2>
            <p className="adu-sec1--an-accessory">
              An accessory dwelling unit (ADU) is a legal and regulatory term
              for a secondary house or apartment that shares the building lot of
              a larger, primary house.
            </p>
            <ul className="list-group adu-sec1--checkmark">
              <li className="list-group-item ">
                <img src="/checkmark.svg" />
                <span className="">
                  Located on the same lot as a stand-alone
                </span>
              </li>
              <li className="list-group-item">
                <img src="/checkmark.svg" />
                <span className="">
                  Could be used as accessory apartments, secondary suites, and
                  granny flats
                </span>
              </li>
              <li className="list-group-item">
                <img src="/checkmark.svg" />
                <span className="">
                  Must include permanent solutions for living, sleeping, eating,
                  cooking, and sanitation
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="inner-content--right my-5">
            <img className="adu-img1" src="/adu_1.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home_Section_1;
