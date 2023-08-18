import { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../services/client-service";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
const ProductEdit = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: ``,
    name: ``,
    imgUrl: ``,
    price: ``,
    categoryId: ``,
    description: ``,
  });
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true); // Indicar que se están cargando los productos
    getProductById(id)
      .then((data) => {
        setProducto(data);
        setIsLoading(false); // Indicar que la carga ha terminado
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setIsLoading(false);
      });
  }, [id]);

  const handleInputChange = (event) => {
    setFormData({
      ...producto,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(id, formData);
  };

  const defaultValues = {
    id: producto.id,
    name: producto.name,
    imgUrl: producto.imgUrl,
    price: producto.price,
    categoryId: producto.categoryId,
    description: producto.description,
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto ">
      <Header />
      <div className="w-full">
        <h2>Editar el producto</h2>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <label htmlFor="Url de la imagen">Url de la imagen</label>
          <input
            name="imgUrl"
            type="text"
            defaultValue={defaultValues.imgUrl}
            placeholder="Url de la imagen"
            onChange={handleInputChange}
          />
          <label htmlFor="Nombre del producto">Nombre del producto</label>
          <input
            name="name"
            type="text"
            defaultValue={defaultValues.name}
            placeholder="Nombre del producto"
            onChange={handleInputChange}
          />
          <label htmlFor="Precio del producto">Precio del producto</label>
          <input
            name="price"
            type="number"
            defaultValue={defaultValues.price}
            placeholder="Precio del producto"
            onChange={handleInputChange}
          />
          <label htmlFor="Descripción del producto">
            Descripción del producto
          </label>
          <textarea
            name="description"
            defaultValue={defaultValues.description}
            onChange={handleInputChange}
          />

          <input type="submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProductEdit;
