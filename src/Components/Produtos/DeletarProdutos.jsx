import React, { useState } from "react"
import axios from 'axios'

export default function AtualizarProdutos() {

    const [ID_produto, setProd] = useState("")

    const handleSubmit = () => {
        const prod = { ID_produto }
        axios.delete('https://hamburgueria-resilia.herokuapp.com/produto', prod)
    }

    const prodHandler = (event) => {
        setProd(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor='ID_produto' >ID do Produto a Ser Deletado</label>
                <input id='ID_produto' type='text' value={ID_produto} onChange={prodHandler} />
            </div>

            <button type='submit'>
                Submit
            </button>
        </form>
    )
}
