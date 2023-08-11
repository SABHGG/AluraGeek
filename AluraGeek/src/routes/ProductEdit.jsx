import { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../services/client-service";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";



import { useParams } from "react-router-dom";
const ProductEdit = () => {

    const [producto, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const updateData = {
                id: producto.id,
                name: data["Nombre del producto"],
                imgUrl: data["Url de la imagen"],
                price: data["Precio del producto"],
                description: data["Descripción del producto"]
            };
            const response = await updateProduct(id, updateData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    const { id } = useParams();
    useEffect(() => {
        setIsLoading(true); // Indicar que se están cargando los productos
        getProductById(id)
            .then((data) => {
                setProducto(data);
                console.log(data);
                setIsLoading(false); // Indicar que la carga ha terminado
            })
            .catch((error) => {
                console.error("Error al cargar los productos:", error);
                setIsLoading(false);
            });
    }, [id]);

    const defaultValues = {
        "Url de la imagen": producto.imgUrl,
        "Nombre del producto": producto.name,
        "Precio del producto": producto.price,
        "Descripción del producto": producto.description
    };

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center mx-auto max-w-[1000px]">
            <Header />
            <div>
                <h2>Agregar nuevo producto</h2>
                <form className='flex flex-col w-screen' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Url de la imagen</label>
                    <input
                        type="text"
                        defaultValue={defaultValues["Url de la imagen"]}
                        placeholder="Url de la imagen"
                        {...register("Url de la imagen", { required: true, pattern: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/i })}
                    />
                    <input
                        type="text"
                        defaultValue={defaultValues["Nombre del producto"]}
                        placeholder="Nombre del producto"
                        {...register("Nombre del producto", { required: true, maxLength: 100 })}
                    />
                    <input
                        type="number"
                        defaultValue={defaultValues["Precio del producto"]}
                        placeholder="Precio del producto"
                        {...register("Precio del producto", { required: true })} />
                    <textarea
                        defaultValue={defaultValues["Descripción del producto"]}
                        {...register("Descripción del producto", { required: true })}
                    />

                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </div>

    );
};

export default ProductEdit;