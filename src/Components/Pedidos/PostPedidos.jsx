import React, { useState } from "react";
import axios from "axios";
const url = "https://hamburgueria-resilia.herokuapp.com/pedido";

export default function FazerPedido() {
  const [itens, setItens] = useState([]);
  const [valor, setValor] = useState([]);
  const [cpf_func, setCPF] = useState([]);
  const [ID_cliente, setCliente] = useState([]);

  function postPedido(event) {
    event.preventDefault();
    console.log("cheguei aqui");
    axios
      .post(url, {
        itens,
        valor,
        cpf_func,
        ID_cliente,
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
      <div>
        <h1> Cadastro de pedidos: </h1>
      </div>
      <form onSubmit={postPedido}>
        <label className="label" htmlFor="valor">
          Funcionário:
        </label>
        <input
          className="input"
          placeholder="CPF Funcionário"
          required
          type="text"
          value={cpf_func}
          name="cpfFunc"
          onChange={(event) => setCPF(event.target.value)}
        />

        <label className="label" htmlFor="idCliente">
          Mesa:
        </label>
        <input
          className="input"
          placeholder="3"
          required
          type="number"
          value={ID_cliente}
          name="itens"
          onChange={(event) => setCliente(event.target.value)}
        />
        <label className="label" htmlFor="itens">
          Item escolhido:
        </label>
        <input
          className="input"
          placeholder="Ex: Refrigerante"
          required
          value={itens}
          type="text"
          name="itens"
          onChange={(event) => setItens(event.target.value)}
        />

        <label className="label" htmlFor="valor">
          Valor:
        </label>
        <input
          className="input"
          placeholder="13,00"
          required
          type="number"
          value={valor}
          name="itens"
          onChange={(event) => setValor(event.target.value)}
        />
        <button className="button" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}