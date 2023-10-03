import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "./Cards";

function categoryId() {
    return (
      <div className="flex flex-col items-center justify-center mx-auto font-sans">
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
  
  export default categoryId;