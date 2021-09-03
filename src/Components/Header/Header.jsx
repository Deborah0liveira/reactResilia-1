import React from "react";
import "./Header.style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav-header">
        <ul>
          <li className= "liItem">
            <Link to="/clientes" className="hItem">
              Clientes
            </Link>
            <Link to="/fornecedores" className="hItem">
              Fornecedores
            </Link>
            <Link to="/pedidos" className="hItem">
              Pedidos
            </Link>
            <Link to="/" className="hItem">
              Home
            </Link>
            <Link to="/produtos" className="hItem">
              Produtos
            </Link>
            <Link to="/funcionarios" className="hItem">
              Funcionarios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
