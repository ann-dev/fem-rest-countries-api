import '../styles/globals.css';
import Header from '../components/shared/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 xl:px-0.5">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
