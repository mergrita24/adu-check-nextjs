import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Site under maintenance</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="adu-main">
      <Header title="Site under maintenance." />
      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>

    <Footer />
  </>
);

export default Home;