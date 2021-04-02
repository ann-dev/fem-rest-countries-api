import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';

import 'styles/globals.css';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 xl:px-0.5">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
};

export default App;
