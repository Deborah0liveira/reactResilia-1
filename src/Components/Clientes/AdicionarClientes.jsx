import React, { useState } from "react";

const AdicionarClientes = () => {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [numeroRes, setNumeroRes] = useState("");
  const [contato, setContato] = useState("");

  const handleAdicionarCliente = (e) => {
    e.preventDefault();
    const body = {
      Nome: nome,
      Cep: cep,
      NumeroRes: numeroRes,
      Telefone: contato,
    };
    RotaPost(body);
  };

  const RotaPost = (body) => {
    const endereco = `https://frozen-oasis-95921.herokuapp.com/inserir`;
    fetch(endereco, {
      method: "POST",
      body: body,
    }).then((res) => console.log(res));
  };
  return (
    <div>
      <h2>Cadastrar Clientes</h2>
      <form>
        <fieldset>
          <label>Nome:</label>
          <input
            value={nome}
            onChange={(e) => {
              const valueInput = e.target.value;
              setNome(valueInput);
            }}
          />
        </fieldset>
        <fieldset>
          <label>Cep:</label>
          <input
            value={cep}
            onChange={(e) => {
              const valueInput = e.target.value;
              setCep(valueInput);
            }}
          />
        </fieldset>
        <fieldset>
          <label>Número Residêncial:</label>
          <input
            value={numeroRes}
            onChange={(e) => {
              const valueInput = e.target.value;
              setNumeroRes(valueInput);
            }}
          />
        </fieldset>
        <fieldset>
          <label>Contato:</label>
          <input
            value={contato}
            onChange={(e) => {
              const valueInput = e.target.value;
              setContato(valueInput);
            }}
          />
        </fieldset>
        <button type="submit" onClick={handleAdicionarCliente}>
          Cadastrar Cliente
        </button>
      </form>
    </div>
  );
};

export default AdicionarClientes;
