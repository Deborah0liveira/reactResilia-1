import React, { useState } from "react"
import axios from 'axios'

export default function AtualizarProdutos() {
    
(axios.delete('https://hamburgueria-resilia.herokuapp.com/produto/deletartudo'))

    return (
        <div>Deletado</div>
    )
}
