import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <h1>APVS</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5564217089327!2d-34.94213258588865!3d-8.044582382569963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fc8c51d76d%3A0x97c0900310d63d0e!2sAPVS%20-%20CAXANG%C3%81!5e0!3m2!1spt-BR!2sbr!4v1680471936622!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <hr />

      <div className="direitos">
        <p> Todos os direitos reservados ©2023 Felipe Teixeira.</p>
        <a href="">Política de privacidade</a>
      </div>
    </div>
  );
};

export default Footer;
