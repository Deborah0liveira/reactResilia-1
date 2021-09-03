import React, { useEffect, useState } from 'react'
import{BrowserRouter,Switch,Route} from'react-router-dom'
import VerClientes from './VerClientes';
import AdicionarClientes from './AdicionarClientes';


export default function Clientes() {
    
   const [users,setUsers]= useState([])
    const rotaGet = () =>{
       
        
        fetch('https://frozen-oasis-95921.herokuapp.com/Clientes')
            .then((res) => res.json())
            .then((data) => setUsers(data))

    } 
    useEffect(()=>{
        rotaGet()

    },[])
    
   
    return (
        <div> 
            <BrowserRouter>
            pagina Clientes
            <header>
                <a href='/VerClientes'>Ver Clientes</a>
                <a href='/AdicionarClientes'>Adicionar Clientes</a>
            </header>
            <Switch>
                <Route path='/VerClientes' >
                    <VerClientes usuarios={users}/>
                </Route>
                <Route path='/AdicionarClientes' component={AdicionarClientes}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
