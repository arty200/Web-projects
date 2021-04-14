import React from 'react'

//props são as propriedades passadas para o componente
//Pode se passar um array de elementos
export default props => [
    <h1 key='h1'> Bom dia {props.nome} !!</h1>,
    <h2 key='h2'>Até breve</h2>]

/*export default props => 
<React.Fragment> pode usar so o Fragment, mas ai deve importar  {Fragment} juntamente ao react
    <h1> Bom dia {props.nome} !!</h1>
    <h2>Até breve</h2>
</React.Fragment>*/