import React, { useState } from "react"
import axios from 'axios'

export default function PostProdutos() {

    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [ID_fornecedor, setIDforn] = useState("")

    const handleSubmit = () => {
        const prod = { descricao, preco, quantidade, ID_fornecedor }
        const midProduto = (axios.post('https://hamburgueria-resilia.herokuapp.com/produto', prod))
    }
    
    const descricaoHandler = (event) => {
        setDescricao(event.target.value)
    }
    const precoHandler = (event) => {
        setPreco(event.target.value)
    }
    const quantidadeHandler = (event) => {
        setQuantidade(event.target.value)
    }
    const ID_fornHandler = (event) => {
        setIDforn(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='descricao' >Descrição do Produto</label>
                    <input id='descricao' type='text' value={descricao} onChange={descricaoHandler} />
                </div>
                <div>
                    <label htmlFor='preco'>Preço</label>
                    <input id='preco' type='text' value={preco} onChange={precoHandler} />
                </div>
                <div>
                    <label htmlFor='quantidade'>Quantidade</label>
                    <input id='quantidade' type='text' value={quantidade} onChange={quantidadeHandler} />
                </div>
                <div>
                    <label htmlFor='ID_fornecedor'>ID do fornecedor</label>
                    <input id='ID_fornecedor' type='text' value={ID_fornecedor} onChange={ID_fornHandler}></input>
                </div>
            </div>
                <button type='submit'>
                    Submit
                </button>
        </form>
    )
}
