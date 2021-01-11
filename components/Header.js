import Navigation from '@components/Navigation'
import Hero_Banner from '@components/Hero_Banner'

function Header() {
  return (
    <>
      <header className="adu-header position-relative">
        <Navigation />
        <Hero_Banner />
      </header>
    </>
  )
};

export default Header;