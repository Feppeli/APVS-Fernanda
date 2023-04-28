import main_image from "../../assets/main/Main_image.png"
import "./Main.css"
const Main = () => {
    return (
        <div className=" Mainbox container"> 
            <div className="main1">
                <h1>FAÇA COTAÇÃO COM A MAIOR <br />
                ASSOCIAÇÃO DE PROTEÇÃO <br />
                VEICULAR  DA AMÉRICA LATINA</h1>

                <br />
                <div id="analiseBox">
                    <h4>SEM ANÁLISE DE PERFIL!</h4>
                </div>

                <br />

                <div className="mainButton">
                    <a href="https://wa.me/558196971854?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+do+meu+Veículo">
                        FAZER COTAÇÃO
                    </a>
                </div>
            </div>
            <div className="main2">
                <img id="image_main" src={main_image} alt="" />
            </div>
        </div>
    );
};

export default Main;