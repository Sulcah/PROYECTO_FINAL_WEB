import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import remagi_logo from './assets/remagi_logo.jpg'
import './Navegacion.css'
    

export default function Navegacion(){

    const [horaActual, setHoraActual] = useState('');

    const actualizarHora = () => {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        setHoraActual(`${horas}:${minutos}:${segundos}`);
    };

    useEffect(() => {
        actualizarHora();
        const interval = setInterval(actualizarHora, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <>
        <header>
            <nav className="navbar">
                <div className="navbar__brand">
                    <Link to="/">
                        <img className="navbar__logo" src={remagi_logo} alt="remagi_logo" />
                        <span className="color1">Remagi</span>
                        <span className="color2"> Games</span>
                        <span className="color3"> Online</span>
                    </Link>
                </div>
                <div className="navbar__menu">
                    <Link to="/inicio" className="navbar__link">Inicio</Link>
                    <Link to="/juegos" className="navbar__link">Juegos</Link>
                    <Link to="/noticia" className="navbar__link">Noticia</Link>
                    <Link to="/comunidad" className="navbar__link">Comunidad</Link>
                    <Link to="/guia_trucos" className="navbar__link">Guías y Trucos</Link>
                </div>
                <div className="d-flex">
                    <span className="navbar-time bg-primary text-white px-3 py-2 rounded">
                        <i className="bi bi-clock me-2"></i>
                        {horaActual}
                    </span>
                </div>
            </nav>
        </header>
        </>
    )
}