import { useState, useEffect } from "react";
import { getAllProducts } from "../services/client-service";
import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";

const Productos = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Indicar que se están cargando los productos
    getAllProducts()
      .then((data) => {
        setProducto(data);
        setIsLoading(false); // Indicar que la carga ha terminado
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return  <p className="text-center">Cargando...</p>;
  }


  return (
    <section className="mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Todos los productos</h2>
        <a href={`/productos/create`}>Crear producto</a>
      </div>
      <article className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-auto mt-2">
        {
          producto.map((data) => (
            <div key={data.id} className="border border-gray-200 rounded-lg shadow p-3 flex flex-col justify-between">
              <div className="relative">
                <img className="w-full h-auto object-contain sm:w-90 md:w-80 lg:w-70" src={data.imgUrl} alt={data.name} />

                <div className="absolute top-2 right-2 flex gap-2">
                  <a href={`/productos/delete/${data.id}`}><img src={deleteIcon} alt="Delete icon" /></a>
                  <a href={`/productos/edit/${data.id}`}><img src={editIcon} alt="Edit icon" /></a>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                  {data.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 ">{data.price}€</p>
              </div>
            </div>
          ))

        }
      </article>

    </section>
  );
};

export default Productos;
