import Header from "../components/Header";
import Productos from "../components/Productos";
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto ">
      <Header />
      <Productos />
      <Footer />
    </div>
  );
}

export default Home;