import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Contact.css";
import Homem from "../../assets/Contatos/Homem.png";
import ImgForm from "../../assets/Contatos/forumilário icons.png";
import wave from '../../assets/Contatos/wave.png'

const Contact = () => {

  const wppMessage = () => {
    let nome = document.querySelector("#nome")
    let modelo = document.querySelector("#modelo")
    let telefone = document.querySelector("#telefone")

    /* var url = `https://wa.me/55819697185?text=Ol%C3%A1%2C+sou+${nome.value}.+Gostaria+de+fazer+cota%C3%A7%C3%A3o+no+meu+ve%C3%ADculo%3A+${modelo.value}%2C+deixo+aqui+meu+numero+para+cotato%3A+${telefone.value}.` */
    /* alert(`https://wa.me/55819697185?text=Ol%C3%A1%2C+sou+${nome.value}.+Gostaria+de+fazer+cota%C3%A7%C3%A3o+no+meu+ve%C3%ADculo%3A+${modelo.value}%2C+deixo+aqui+meu+numero+para+cotato%3A+${telefone.value}.`) */
    window.open(`https://wa.me/55819697185?text=Ol%C3%A1%2C+sou+${nome.value}.+Gostaria+de+fazer+cota%C3%A7%C3%A3o+no+meu+ve%C3%ADculo%3A+${modelo.value}%2C+deixo+aqui+meu+numero+para+cotato%3A+${telefone.value}.`, "_blank")
    /* window.location.href = `https://wa.me/55819697185?text=Ol%C3%A1%2C+sou+${nome.value}.+Gostaria+de+fazer+cota%C3%A7%C3%A3o+no+meu+ve%C3%ADculo%3A+${modelo.value}%2C+deixo+aqui+meu+numero+para+cotato%3A+${telefone.value}.`; */
  }

  return (
    <div className="contactBox container" id='cotacao'>
      <div className="contactBox1" id='parceiro'>
        <img src={Homem} alt="" />
      </div>
      <div className="contactBox2" id='contato1'>
        <img src={ImgForm} alt="" />
        <form >
          <input id="nome" type="text" placeholder="Nome" required />
          <input id="modelo" type="text" placeholder="Modelo do Veículo completo e ano" required />
          <input id="telefone" type="text" placeholder="Telefone" required />
          <p>
          Seus dados serão utilizados para fins de comunicação e marketing. você
          pode cancelar o recebimento de comunicações e mensagens quando quiser,
          Para mais informações basta entrar em contato
        </p>
        <button id='buttonBox' onClick={wppMessage} type='submit'>Simular</button>  
        </form>


      </div>

      <img id="wave" src={wave} alt="" />
    </div>
  );
};

export default Contact;
