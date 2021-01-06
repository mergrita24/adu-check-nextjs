import '@styles/main.scss'
import { useEffect } from 'react'

function Application({ Component, pageProps }) {
  useEffect(() => {
    import("jquery").then($ => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);

  return <Component {...pageProps} />
}

export default Application
