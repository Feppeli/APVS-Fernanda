import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <h1>APVS</h1>
            </div>
            <div className="links">
                <a href="quem somos">quem somos</a>
                <a href="contato">Contato</a>
                <a href="parceiro">parceiro</a>
                <a href="cotação">cotação</a>
            </div>
        </nav>
    )
}

export default Navbar;