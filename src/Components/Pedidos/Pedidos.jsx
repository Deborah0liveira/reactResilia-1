//import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function Pedidos() {
  return (
    <section>
      <Link to="/verpedidos">
        <button>Consultar pedidos</button>
      </Link>

      <Link to="/fazerpedido">
        <button>Faça um Pedido</button>
      </Link>
    </section>
  );
}

export default Pedidos;
