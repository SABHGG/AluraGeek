import banner from "../assets/banner-image.webp";

const Banner = () => {
  return (
    <section className="p-4 bg-red-100 h-full w-full object-cover">
      <div className="flex flex-col w-4/5 gap-4 p-8 bg-black bg-opacity-50 text-white">
        <h1 className="font-bold text-4xl">Febrero Promocional</h1>
        <p className="font-bold text-xl">
          Productos seleccionados con 33% de descuento
        </p>
        <a
          href="/productos"
          className="w-36 h-12 font-normal text-base bg-blue-600 flex items-center justify-center"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
};

export default Banner;
