import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import GetProdutos from './GetProdutos'
import PostProdutos from './PostProdutos'
import AtualizarProdutos from './AtualizarProdutos'
import DeletarProdutos from './DeletarProdutos'


export default function Header() {

    return (
        <Router>
            <section className='main'>
                <div className='nav'>
                    <Link to="/getProdutos" className='hItem'>Listar Produtos</Link>
                    <Link to="/postProdutos" className='hItem'>Cadastrar Produtos</Link>
                    <Link to="/updateProdutos" className='hItem'>Atualizar Produtos</Link>
                    <Link to="/deleteProdutos" className='hItem'>Deletar Produtos</Link>
                </div>
            </section>

            <Switch>
                <Route path="/getProdutos">
                    <GetProdutos />
                </Route>
                <Route path="/postProdutos">
                    <PostProdutos />
                </Route>
                <Route path="/updateProdutos">
                    <AtualizarProdutos />
                </Route>
                <Route path="/deleteProdutos">
                    <DeletarProdutos />
                </Route>
            </Switch>
        </Router>
    )

}