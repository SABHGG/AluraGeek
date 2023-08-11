import Card from "./Card";
import { getAllProducts } from "../services/client-service";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types"
import Loading from "./loading";

const Cards = ({ limit, categoryId, categoryName }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsToShow, setCardsToShow] = useState([...productos]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Indicar que se están cargando los productos
      try {
        await sleep(1000);
        getAllProducts(limit, categoryId)
          .then((data) => {
            setProductos(data);
            setIsLoading(false); // Indicar que la carga ha terminado
          })
          .catch((error) => {
            console.error("Error al cargar los productos:", error);
            setIsLoading(false);
          });
      }
      catch (error) {
        console.error("Error al cargar los productos:", error);
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [limit, categoryId]);


  useEffect(() => {
    function updateCardsToShow() {
      if (window.innerWidth < 1024) {

        setCardsToShow([...productos].splice(0, productos.length - 2));
      } else {

        setCardsToShow([...productos]);
      }
    }

    window.addEventListener("resize", updateCardsToShow);

    updateCardsToShow();

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, [productos]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col mt-4">
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold ">{categoryName}</h2>
          <a href={`/categorias/${categoryId}`}>Ver mas --</a>
        </div>
        <article className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-auto">
          {cardsToShow.map((product) => (
            <Card
              key={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </article>
      </div>
    </section>
  );
};

Cards.propTypes = {
  limit: PropTypes.number.isRequired,
  categoryId: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default Cards;
