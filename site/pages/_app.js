import { ThemeProvider } from 'next-themes';

import 'styles/globals.css';
import Header from 'components/shared/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      <main className="container mx-auto px-4 xl:px-0.5">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

// TODO: add footer with attribution:
// Space icon by: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// Spinner by: https://tobiasahlin.com/spinkit/

export default MyApp;
