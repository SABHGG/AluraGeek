import { useEffect, useState } from 'react';
import { getProductById } from "../services/client-service";
import { PropTypes } from "prop-types";
import Cards from '../components/Cards';

const Producto = ({ id }) => {
    const [producto, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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


    if (isLoading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <section className=''>
            <div>
                {
                    <div className="border border-gray-200 rounded-lg shadow p-3 flex flex-col justify-between">
                        <div className="">
                            <img className="w-full object-contain sm:w-90 md:w-80 lg:w-70" src={producto.imgUrl} alt={name} />
                        </div>

                        <div className="flex flex-col">
                            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                                {producto.name}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 ">{producto.price}€</p>
                            <p className="mb-3 font-normal text-gray-700 ">{producto.description}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='flex flex-col'>
                <div>
                    <Cards
                        limit={6}
                        categoryId={producto.categoryId}
                        categoryName="Productos Recomendados"
                    />
                </div>
            </div>
        </section>
    );
};

Producto.propTypes = {
    id: PropTypes.string.isRequired,
};
export default Producto;