import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => (
  <div className="page-wrapper">
    <Head>
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
  </div>
);

export default Home;