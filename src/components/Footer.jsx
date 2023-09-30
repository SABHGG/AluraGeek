import vectorLogo from "../assets/Vector.webp";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#EAF2FD] p-16 py-3 max-lg:p-8 max-md:p-4">
      <section className="flex items-center justify-center">
        <div className="flex items-start justify-center w-full gap-32 max-w-[1400px] max-lg:flex-col max-lg:gap-4 ">
          <div className="flex items-center justify-center shrink-0">
            <img src={vectorLogo} alt="Logo" />
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              <span className="text-blue-700">Sabh</span>
              <span>Geek</span>
            </h1>
          </div>
          <div className="">
            <ul className="flex flex-col gap-6">
              <li className="whitespace-nowrap">Quienes somos</li>
              <li className="whitespace-nowrap">Política de privacidad</li>
              <li className="whitespace-nowrap"> Programa de fidelidad</li>
              <li className="whitespace-nowrap">Nuestras tiendas</li>
              <li className="whitespace-nowrap">Quiero ser franquiciado</li>
              <li className="whitespace-nowrap">Anuncie aquí</li>
            </ul>
          </div>
          <div className="w-full flex-grow">
            <h2 className="font-bold text-base">Hable con nosotros</h2>
            <form
              className="flex flex-col items-start shrink-0 gap-2 w-full"
              action=""
            >
              <div className="bg-white rounded-md p-3 w-full">
                <label className="text-sm opacity-50" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  className="rounded-md w-full outline-none"
                  type="text"
                  placeholder="Nombre"
                />
              </div>

              <textarea
                className="bg-white rounded-md p-3 outline-none w-full"
                name=""
                id=""
                cols=""
                rows=""
                placeholder="Escribe tu mensaje"
              ></textarea>
              <button
                className="flex items-center justify-center rounded-md bg-blue-700 p-4 text-white"
                type="submit"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="p-8 text-center max-lg:p-8 max-md:p-4">
        <p>Desarrollado por Sergio Beleño</p>
      </section>
    </footer>
  );
};

export default Footer;
