import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import WppButton from "./components/WhatsAppButton/WppButton";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Seguros from "./components/Seguros/Seguros"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <section className="about">
        <h1>Quem Somos</h1>
        <QuemSomos />
      </section>
      <section className="services">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0141BB"
            fill-opacity="1"
            d="M0,128L40,128C80,128,160,128,240,117.3C320,107,400,85,480,106.7C560,128,640,192,720,213.3C800,235,880,213,960,197.3C1040,181,1120,171,1200,170.7C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <h1>Serviços</h1>
        <Seguros/>
      </section>
      <section className="contato">
        <h1>Contato</h1>
        <Contact/>
      </section>
      <footer>
        <Footer/>
      </footer>

      {/* whatsApp Button */}
      <WppButton />
    </div>
  );
}

export default App;
