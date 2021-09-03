import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Clientes from "./Components/Clientes/Clientes";
import AdicionarClientes from "./Components/Clientes/AdicionarClientes";
import VerClientes from "./Components/Clientes/VerClientes";
import Fornecedores from "./Components/Fornecedores/Fornecedores";
import Pedidos from "./Components/Pedidos/Pedidos";
import Produtos from "./Components/Produtos/Produtos";
import Funcionarios from "./Components/Funcionarios/Funcionarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div classNames="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/clientes" exact>
            <Clientes />
          </Route>
          <Route path="/VerClientes" exact>
            <VerClientes />
          </Route>
          <Route path="/AdicionarClientes" exact>
            <AdicionarClientes />
          </Route>
          <Route path="/fornecedores" exact>
            <Fornecedores />
          </Route>
          <Route path="/pedidos" exact>
            <Pedidos />
          </Route>
          <Route path="/produtos" exact>
            <Produtos />
          </Route>
          <Route path="/funcionarios" exact>
            <Funcionarios />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
