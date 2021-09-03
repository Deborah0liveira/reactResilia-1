import React from 'react'

const VerClientes = (props) => {
    return (              
        <div>
           Ver Clientes 
           {!props.usuarios?
           (<p>Carregando</p>):(
               props.usuarios.map((user)=>{
               return (
                   <div 
                   style={{
                       width :"300px",
                       height:"170px",
                       border:"1px solid black",
                       textAlign:"center",
                   }}
                   key={user.Cliente_id}>
                       <p>Nome: {user.Nome}</p>
                       <p>Cep: {user.Cep}</p>
                       <p>Numero residencial: {user.NumeroRes}</p>
                       <p>Contato: {user.Telefone}</p>

                   </div>
               )
               })
           )}
        </div>
    )
}

export default VerClientes
