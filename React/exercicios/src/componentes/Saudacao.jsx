import React,{Component} from 'react'

//Atributo props n pode ser alterado, porem o atributo state pode
//O dado presente no estado é o verdadeiro e o componente so é renderizado após alterar o estado
export default class Saudacao extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome:this.props.nome
    }

    constructor(props){
        super(props) //Carregar as propriedades
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)

    }
    
    setTipo(e){
        /*let i =1
        setInterval(() => {
            this.setState({tipo: ++i})
        },1000)*/
        this.setState({tipo: e.target.value})
    }

    setNome(e){

        this.setState({nome: e.target.value})
    }

    render(){
        const {tipo,nome} = this.state
        return (<div> 
            <h1>{tipo} {nome}!</h1>
            <hr/>

            <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
            <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>

            </div>)
    }
}