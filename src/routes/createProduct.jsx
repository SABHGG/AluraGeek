import Header from "../components/Header";
import Footer from "../components/Footer";
import { createProduct } from "../services/client-service";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateProdut = () => {
  const [producto, setProducto] = useState();

  const handleInputChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = {
      id: uuidv4(),
      name: producto.name,
      imgUrl: producto.imgUrl,
      price: producto.price,
      categoryId: producto.categoryId,
      description: producto.description,
    };
    createProduct(dataForm);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto font-sans">
      <Header />
      <div className="w-full">
        <h2>Editar el producto</h2>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <label htmlFor="Url de la imagen">Url de la imagen</label>
          <input
            name="imgUrl"
            type="text"
            placeholder="Url de la imagen"
            onChange={handleInputChange}
          />
          <label htmlFor="Nombre del producto">Nombre del producto</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre del producto"
            onChange={handleInputChange}
          />
          <label htmlFor="Precio del producto">Precio del producto</label>
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Precio del producto"
            onChange={handleInputChange}
          />
          <label htmlFor="Categoria del producto">Categoria del producto</label>
          <select name="categoryId" onChange={handleInputChange}>
            <option value="1">Acción</option>
            <option value="2">Ropa</option>
            <option value="3">Libros y Comics</option>
          </select>
          <label htmlFor="Descripción del producto">
            Descripción del producto
          </label>
          <textarea name="description" onChange={handleInputChange} />

          <input type="submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProdut;
