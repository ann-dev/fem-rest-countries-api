import { ThemeProvider } from 'next-themes';

import 'styles/globals.css';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div class="flex flex-col h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 xl:px-0.5">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
