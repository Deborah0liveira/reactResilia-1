import React, {useEffect, useState} from "react"
import axios from 'axios'

import './getProdutos.css'

export default function GetProdutos() {
    const [produto, setProdutos] = useState([])

    const getData = async () => {
        const midproduto = (await axios.get('https://hamburgueria-resilia.herokuapp.com/produto')).data
        setProdutos(midproduto)
    }

    useEffect (()=>{
        getData()
    },[])

    return (
        <section className="produtos">
            <div className="prodMain">
                {produto.length?produto.map(el=>
                    <div className="prodModal">
                        <p>Descrição: {el.descricao}</p>
                        <p>Preço: {el.preco}</p>
                        <p>Quantidade: {el.quantidade}</p>
                    </div>
                ):null}
            </div>
        </section>
    )
}
