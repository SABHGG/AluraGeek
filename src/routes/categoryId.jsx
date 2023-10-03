import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { useParams } from "react-router-dom";

function CategoryId() {
  const { id } = useParams();
  const idParse = parseInt(id);
  const categoryNames = {
    1: "Acción",
    2: "Ropa",
    3: "Libros y cómics",
  };

  const categoryName = categoryNames[idParse] || "Unknown";

  return (
    <div className="flex flex-col items-center justify-center mx-auto font-sans">
      <Header />
      <section className="flex flex-col items-center justify-center max-w-[1400px] mx-auto my-3 max-md:mx-2 max-lg:mx-2">
        {idParse ? (
          <Cards limit={20} categoryId={idParse} categoryName={categoryName} display={false} />
        ) : (
          <div>Loading...</div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default CategoryId;
