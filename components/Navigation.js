import Link from 'next/link'

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg adu-nav bg-transparent">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/adu-check-logo-1.svg" className="adu-logo" alt="" />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Adu Inspiration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Get Adu Report</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Navigation;