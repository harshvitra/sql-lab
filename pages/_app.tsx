import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../src/components/layout/Navigation'
import Footer from '../src/components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
