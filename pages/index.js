import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => (
  <div className="page-wrapper">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Site under maintenance</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header title="Site under maintenance." />
      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>

    <Footer />

    
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
    <script src="/scripts/jquery.min.js"></script>
    <script src="/scripts/popper.min.js"></script>
    <script src="/scripts/bootstrap.min.js"></script>
  </div>
);

export default Home;