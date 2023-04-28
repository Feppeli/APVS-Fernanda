import "./Servicos.css";
import React from "react";
import Moto from "../../assets/Servicos/Moto.png";
import Carro from "../../assets/Servicos/Carro.png";
import Caminhão from "../../assets/Servicos/Caminhao-em-PNG-removebg-preview.png";

const Seguros = () => {
  return (
    <div className="servicesBox container">
      <div className="serviceBox">
        <h1>Moto</h1>
        <img src={Moto} alt="" />
        <ul>
          <li>
            <p>Roubo / Furto</p>
          </li>
          <li>
            <p>Colisão</p>
          </li>
          <li>
            <p>Perda Total</p>
          </li>
          <li>
            <p>Fenômenos da natureza</p>
          </li>
          <li>
            <p>Assitência 24h</p>
          </li>
          <li>
            <p>Suporte elétrico</p>
          </li>
          <li>
            <p>Rastreador</p>
          </li>
          <li>
            <p>E muito mais!</p>
          </li>
        </ul>

        <div className="serviceButton">
          <a href="https://wa.me/558199697185?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+da+minha+moto" target="_blank">Simular</a>
        </div>
      </div>
      <div className="serviceBox">
        <h1>Carro</h1>
        <img src={Carro} alt="" />
        <ul>
          <li>
            <p>Roubo / Furto</p>
          </li>
          <li>
            <p>Colisão</p>
          </li>
          <li>
            <p>Perda Total</p>
          </li>
          <li>
            <p>Fenômenos da natureza</p>
          </li>
          <li>
            <p>Assitência 24h</p>
          </li>
          <li>
            <p>Suporte elétrico</p>
          </li>
          <li>
            <p>Rastreador</p>
          </li>
          <li>
            <p>E muito mais!</p>
          </li>
        </ul>

        <div className="serviceButton">
          <a href="https://wa.me/558199697185?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+do+meu+Carro" target="_blank">Simular</a>
        </div>
      </div>
      <div className="serviceBox">
        <h1>Caminhão</h1>
        <img src={Caminhão} alt="" />
        <ul>
          <li>
            <p>Roubo / Furto</p>
          </li>
          <li>
            <p>Colisão</p>
          </li>
          <li>
            <p>Perda Total</p>
          </li>
          <li>
            <p>Fenômenos da natureza</p>
          </li>
          <li>
            <p>Assitência 24h</p>
          </li>
          <li>
            <p>Suporte elétrico</p>
          </li>
          <li>
            <p>Rastreador</p>
          </li>
          <li>
            <p>E muito mais!</p>
          </li>
        </ul>

        <div className="serviceButton">
          <a href="https://wa.me/558199697185?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+do+meu+Caminhão" target="_blank">Simular</a>
        </div>
      </div>
    </div>
  );
};

export default Seguros;
