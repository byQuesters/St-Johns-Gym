import styles from "../../../public/css/header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
            <h1 className="header-title">Gimnasio St. John´s | Manzanillo</h1>
            <nav className="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Conócenos</a>
                <a href="#services">Servicios</a>
                <a href="#prices">Precios</a>
                <a href="#">Contacto</a>
            </nav>
            <a href="#" className="photos-btn">Mirar Fotos</a>
            </div>
        </header>
    );
}
export default Header;