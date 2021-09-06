import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://hamburgueria-resilia.herokuapp.com/pedido";

function GetPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const reqPedidos = async () => {
      await axios
        .get(url)
        .then((response) => {
          setPedidos(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    reqPedidos();
  }, []);

  return (
    <div>
      <h1> Pedidos Realizados: </h1>
      {pedidos ? (
        pedidos.map((el) => (
          <div key={el.ID_pedido}>
            <h4>CPF do Funcionário: {el.cpf_func}</h4>
            <h4>Item comprado: {el.itens}</h4>
            <h4>Preço: {el.valor}</h4>
            <h4>Mesa: {el.ID_cliente}</h4>
          </div>
        ))
      ) : (
        <div>
          {" "}
          <h4>Oops! Nada a declarar.</h4>
        </div>
      )}
    </div>
  );
}

export default GetPedidos;