import "./WppButton.css"
import wpp from "../../assets/wpp/whatsapp.png"

const WppButton = () => {
    return(
        <div className="wppbutton">
            <a  href="https://wa.me/558199697185?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+do+meu+Veículo" className="">  
                <img src={wpp} alt="" />
                Entre em contato
            </a>
        </div>

    )
};

export default WppButton;