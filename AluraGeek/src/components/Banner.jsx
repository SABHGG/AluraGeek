import banner from "../assets/banner-image.webp";

const Banner = () => {
  return (
    <section
      className="h-[352px] w-full p-4 relative"
    >
      <img 
      className="h-full w-full object-cover absolute inset-0"
      src={banner} alt="banner" />
      <div className="flex flex-col w-4/5 gap-4 absolute bottom-0 left-0 p-8">
        <h1 className="font-bold text-4xl text-white">Febrero Promocional</h1>
        <p className="font-bold text-xl text-white">
          Productos seleccionados con 33% de descuento
        </p>
        <a href="/productos" className="w-36 h-12 font-normal text-base text-white bg-blue-600 flex items-center justify-center">
          Ver productos
        </a>
      </div>
    </section>
  );
};

export default Banner;
