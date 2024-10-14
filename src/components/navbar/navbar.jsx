import {NavLink} from "react-router-dom";
import './navbar.css';

export default function NavBar(){
  return (
    <header className="header">
    <div className="logo">
      <img src="/logo.png" alt="logo"></img>
    </div>
    <nav className="nav">

      <div className="links">
        <NavLink to={`/`}>Principal</NavLink>
        <NavLink to={`/category/overview`}>Información</NavLink>
        <NavLink to={`/category/map`}>Ubicación</NavLink>
        <NavLink to={`/category/gallery`}>Galería</NavLink>
        <NavLink to={`/category/rates`}>Valoraciones</NavLink>
        <NavLink to={`/category/localguide`}>Guía local</NavLink>
        <NavLink to={`/category/contact`}>Contacto</NavLink>
      </div>
    </nav>
    </header>
  )
}
  