import React, { Component } from 'react';
import axios from 'axios';
import AddFornec from './AddFornec';


class Fornecedores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fornecedor: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://hamburgueria-resilia.herokuapp.com/fornecedor')
        .then(response => {
            this.setState({fornecedor: response.data})
        })
        .catch(error => {
            this.setState({errorMsg: 'Erro ao obter dados'})
        })
    }

    render() {
        const {fornecedor, errorMsg} = this.state
        return (
            <div>
                <h1>Nossos Fonecedores</h1>
        
                {
                    fornecedor.length ?
                    fornecedor.map(fornecedor => <div key={fornecedor.ID_fornecedor}> <p>Nome: {fornecedor.nome}</p>
                    <p>Telefone: {fornecedor.telefone}</p> <p>CNPJ: {fornecedor.CNPJ}</p></div>) :
                    null
                }

                {errorMsg ? <div>{errorMsg}</div> : null}

                <h2>Cadastrar novo fornecedor</h2>
                <AddFornec />
            </div>
        );
    }
}

export default Fornecedores;






