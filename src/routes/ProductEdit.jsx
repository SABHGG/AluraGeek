import { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../services/client-service";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
const ProductEdit = () => {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.promise(updateProduct(id ,data), {
      loading: "Actualizando el producto...",
      success: "Producto actualizado correctamente",
      error: "Error al actualizar el producto",
    });
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
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto max-w-[1400px] font-sans">
        <div className="flex flex-col my-[60px] px-3 min-w-[100%] lg:px-3 md:px-3 sm:px-3 ">
          <h2>Editar el producto</h2>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="imgUrl"
              >
                Url de la imagen
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="imgUrl"
                type="text"
                defaultValue={defaultValues.imgUrl}
                placeholder="Url de la imagen"
                {...register("imgUrl", {
                  required: {
                    value: true,
                    message: "Url de la imagen es requerido",
                  },
                  pattern: {
                    value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/i,
                    message: "Url de la imagen no es valida",
                  },
                })}
              />
              <p className="text-red-600">{errors.imgUrl?.message}</p>
            </div>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Nombre del producto
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="name"
                type="text"
                defaultValue={defaultValues.name}
                placeholder="Nombre del producto"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre del producto es requerido",
                  },
                  max: 20,
                })}
              />
            </div>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="price"
              >
                Precio del producto
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="price"
                type="number"
                step="0.01"
                defaultValue={defaultValues.price}
                placeholder="Precio del producto"
                {...register("price", {
                  required: {
                    value: true,
                    message: "El precio del producto es requerido",
                  },
                  pattern: /^[0-9]+([,.][0-9]+)?$/i,
                  maxLength: 20,
                })}
              />
            </div>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="categoryId"
              >
                Categoría del producto
              </label>
              <select
                {...register("categoryId", {
                  required: "Este campo es requerido",
                  validate: (value) => {
                    return value !== "0" || "Selecciona una categoría válida";
                  },
                })}
                defaultValue={defaultValues.categoryId}
              >
                <option value={0}>Selecciona una categoría</option>
                <option value={1}>Acción</option>
                <option value={2}> Ropa</option>
                <option value={3}> Libros y Comics</option>
              </select>
            </div>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="description"
              >
                Descripción del producto
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                defaultValue={defaultValues.description}
                {...register("description", {
                  required: {
                    value: true,
                    message: "La descripción del producto es requerido",
                  },
                  maxLength: 200,
                })}
              />
            </div>

            <input
              className="w-20 flex items-center justify-center rounded-md bg-blue-700 px-2 py-2 mt-2 text-white cursor-pointer hover:bg-blue-800"
              type="submit"
            />
          </form>
        </div>
      </main>
      <Toaster
        toastOptions={{
          style: { background: "blue", color: "#fff" },
          className: "my-toast",
        }}
      />
      <Footer />
    </>
  );
};

export default ProductEdit;
