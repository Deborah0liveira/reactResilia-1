import React, { Component } from 'react';
import axios from 'axios';

class AddFornec extends Component {
    constructor(props){
        super(props) 

        this.state = {
            ID_fornecedor: '',
            nome: '',
            CNPJ: '',
            telefone: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    nomeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    CNPJHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    telefoneHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://hamburgueria-resilia.herokuapp.com/fornecedor', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }) 
    }

    render() {
        const {ID_fornecedor, nome, CNPJ, telefone} = this.state;
        return (
            <div>
            <form onSubmit={this.submitHandler}>
                <div>
                <label htmlFor='ID_ fornecedor' >ID_ fornecedor: </label>
                    <input 
                    type="text" 
                    name="ID_fornecedor" 
                    value = {ID_fornecedor} 
                    onChange = {this.changeHandler}
                    />
                </div>
                <div>
                <label htmlFor='nome' >Nome: </label>
                    <input 
                    type="text" 
                    name="nome" 
                    value = {nome} 
                    onChange = {this.nomeHandler}/>
                </div>
                <div>
                <label htmlFor='CNPJ' >CNPJ: </label>
                    <input 
                    type="text" 
                    name="CNPJ" 
                    value = {CNPJ}
                    onChange = {this.CNPJHandler}/>
                </div>
                <div>
                <label htmlFor='telefone' >Telefone: </label>
                    <input 
                    type="text" 
                    name="telefone" 
                    value = {telefone} 
                    onChange = {this.telefoneHandler}/>
                </div>
                <button type="submit">Enviar</button>
            </form>
            </div>
        )
    }
}

export default AddFornec;