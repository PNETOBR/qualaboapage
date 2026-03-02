import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForBusinesses from './components/ForBusinesses';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForBusinesses />
      </main>
      <Footer />
    </>
  );
}