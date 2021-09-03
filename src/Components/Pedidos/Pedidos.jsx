import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const rotaPedidos = () => {
    fetch("https://hamburgueria-resilia.herokuapp.com/pedido")
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  };

  useEffect(() => {
    rotaPedidos();
  }, []);

  return (
    <div>
      <p>eu vo morre aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <BrowserRouter>
        <Switch>
          <Route path="/pedidos"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Pedidos;

