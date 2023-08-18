import vectorLogo from "../assets/Vector.webp";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#EAF2FD] p-16">
      <section className="flex items-center justify-center">
        <div className="flex items-start justify-center w-full gap-32 max-w-[1400px]">
          <div className="flex items-center justify-center shrink-0">
            <img src={vectorLogo} alt="Logo" />
            <h1>SabhGeek</h1>
          </div>
          <div className="w-1/3">
            <ul className="flex flex-col gap-6">
              <li>Quienes somos</li>
              <li>Política de privacidad</li>
              <li> Programa de fidelidad</li>
              <li>Nuestras tiendas</li>
              <li>Quiero ser franquiciado</li>
              <li>Anuncie aquí</li>
            </ul>
          </div>
          <div className="w-full ">
            <h2>Hable con nosotros</h2>
            <form
              className="flex flex-col items-start shrink-0 gap-2 w-[560px]"
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
      <section className="p-8 text-center">
        <p>Desarrollado por Sergio Beleño</p>
      </section>
    </footer>
  );
};

export default Footer;
