import React from 'react'
import ReactDOM from 'react-dom'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div> 
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Comentario de codigo*/}
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Rodrigo"/>
        </Pai>
    </div>
    ,document.getElementById('root')) //Usa chaves para referenciar numero