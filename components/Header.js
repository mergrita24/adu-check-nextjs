import Navigation from '@components/Navigation'

function Header() {
  return (
    <>
      <header className="adu-header position-relative">
        <section className="adu-navigation-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <Navigation />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
};

export default Header;