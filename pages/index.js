import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>ADUCheck.com | Easiest way to find ADU potential of your property</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <Header />

    <main className="adu-main">
      <div className="w-100 text-center py-5 my-5">
        <h1>Site under construction</h1>
        <p>Powered by: <a href="https://www.stratusmeridian.com" target="_blank">
          <img src="https://www.stratusmeridian.com/images/sm-logo.svg" className="img-fluid" />  
        </a></p>
      </div>
    </main>

    <Footer />
  </>
);

export default Home;