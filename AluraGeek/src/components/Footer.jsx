import vectorLogo from "../assets/Vector.webp";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <section className="flex justify-between">
        <div className="flex items-center">
          <img src={vectorLogo} alt="Logo" />
          <h1>SabhGeek</h1>
        </div>
        <div>
          <ul>
            <li>Quienes somos</li>
            <li>Política de privacidad</li>
            <li> Programa de fidelidad</li>
            <li>Nuestras tiendas</li>
            <li>Quiero ser franquiciado</li>
            <li>Anuncie aquí</li>
          </ul>
        </div>
        <div className="">
          <h2>Hable con nosotros</h2>
          <form className="flex flex-col" action="">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="E-mail" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
          </form>
        </div>
      </section>
      <section>
        <p>Desarrollado por Sergio Beleño</p>
      </section>
    </footer>
  );
};

export default Footer;
