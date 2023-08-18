import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductoCategorias from "./components/ProductoCategorias";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <Header />
      <Banner />
      <ProductoCategorias />
      <Footer />
    </div>
  );
}

export default App;
