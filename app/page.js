import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CryptoForecast from "./Components/cryptoForecast";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-bold mb-6">Cryptocurrency Forecast</h1> */}
        <CryptoForecast />
      </main>
      <Footer />
    </div>
  );
}
