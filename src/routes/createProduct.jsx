import Header from "../components/Header";
import Footer from "../components/Footer";
import { createProduct } from "../services/client-service";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const CreateProdut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const id = uuidv4();
    const dataWithId = { id, ...data };
    toast.promise(createProduct(dataWithId), {
      loading: "Creando producto...",
      success: "Producto creado correctamente",
      error: "Error al crear el producto",
    });
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto max-w-[1400px] font-sans">
        <div className="flex flex-col my-[60px] px-3 min-w-[100%] lg:px-3 md:px-3 sm:px-3 ">
          <h2>Editar el producto</h2>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="imgUrl"
              >
                Url de la imagen
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nombre del producto"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre del producto es requerido",
                  },
                  max: 20,
                })}
              />
              <p className="text-red-600">{errors.name?.message}</p>
            </div>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="price"
              >
                Precio del producto
              </label>
              <input
                type="number"
                step="0.01"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              <p className="text-red-600">{errors.price?.message}</p>
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
              >
                <option value={0}>Selecciona una categoría</option>
                <option value={1}>Acción</option>
                <option value={2}> Ropa</option>
                <option value={3}> Libros y Comics</option>
              </select>
            </div>
            <p className="text-red-600">{errors.categoryId?.message}</p>
            <div>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="description"
              >
                Descripción del producto
              </label>
              <textarea
                className="w-full h-24 p-2.5 mt-2"
                {...register("description", {
                  required: {
                    value: true,
                    message: "La descripción del producto es requerido",
                  },
                  maxLength: 200,
                })}
              />
              <p className="text-red-600">{errors.description?.message}</p>
            </div>
            <input type="submit" />
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

export default CreateProdut;
