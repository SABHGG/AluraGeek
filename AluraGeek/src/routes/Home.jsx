import Header from "../components/Header";
import Banner from "../components/Banner";
import Productos from "../components/Productos";
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="">
          <Header />
          <Banner />
          <Productos />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;