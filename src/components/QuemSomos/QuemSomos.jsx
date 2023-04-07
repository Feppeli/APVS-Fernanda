import "./QuemSomos.css";
import descriptionImage from "../../assets/about/Group 1.png";
import descriptionImage2 from "../../assets/about/Group 2.png";
import descriptionImage3 from "../../assets/about/Group 3.png";

const QuemSomos = () => {
  return (
    <div className=" aboutContainer container">
      <div className="about1">
        <div className="aboutBox1">
          <div className="aboutDescription">
            <img src={descriptionImage} alt="" />
            <div className="aboutTxt">
              <h3>A melhor associação do Brasil</h3>
              <p>Escolhida 3 anos consecultivos como a melhor do Brasil.</p>
            </div>
          </div>
          <div className="aboutDescription">
            <img src={descriptionImage2} alt="" />
            <div className="aboutTxt">
              <h3>Consolidação no mercado</h3>
              <p>
                Na APVS , Você tem garantia de proteção, pois são mais de 14
                anos de atuação no mercado.
              </p>
            </div>
          </div>
          <div className="aboutDescription">
            <img src={descriptionImage3} alt="" />
            <div className="aboutTxt">
              <h3>Sempre perto de você</h3>
              <p>
                Contamos com 280 escritórios e mais de 300 mil associados em
                todo o território brasileiro.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutBox2">
          <iframe
            width="585"
            height="330"
            src="https://www.youtube.com/embed/orAvo-u5Gmg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay = true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="about2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5564217089327!2d-34.94213258588865!3d-8.044582382569963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fc8c51d76d%3A0x97c0900310d63d0e!2sAPVS%20-%20CAXANG%C3%81!5e0!3m2!1spt-BR!2sbr!4v1680471936622!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default QuemSomos;
