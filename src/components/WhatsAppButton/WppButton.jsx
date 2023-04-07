import "./WppButton.css"
import wpp from "../../assets/wpp/whatsapp.png"

const WppButton = () => {
    return(
        <div className="wppbutton">
            <a  href="" className="">  
                <img src={wpp} alt="" />
                Entre em contato
            </a>
        </div>

    )
};

export default WppButton;