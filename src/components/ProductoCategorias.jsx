import Cards from "./Cards";

const ProductoCategorias = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1400px] mx-auto">
      <Cards limit={6} categoryId={1} categoryName="Acción" />
      <Cards limit={6} categoryId={2} categoryName="Ropa" />
      <Cards limit={6} categoryId={3} categoryName="Libros y cómics" />
    </section>
  );
};

export default ProductoCategorias;
