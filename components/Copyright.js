function Copyright({ copyright }) {
  return (
    <>
      <div className="adu-copyright position-relative d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="inner-content--left my-3">
                <span>{copyright}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Copyright;