import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <h1>APVS</h1>
            </div>
            <div className="links">
                <a href="#about1">quem somos</a>
                <a href="#contato1">Contato</a>
                <a href="#parceiro">parceiro</a>
                <a href="#cotacao">cotação</a>
            </div>
        </nav>
    )
}

export default Navbar;