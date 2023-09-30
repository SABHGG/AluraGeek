
const Banner = () => {
  return (
    <section className="py-20 px-7 max-w-[1400px] w-full bg-[url('src/assets/banner-image.webp')]">
      <div className="flex lg:justify-start md:justify-start">
        <div className="flex flex-col gap-4 bg-opacity-50 text-white">
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
      </div>
    </section>
  );
};

export default Banner;
