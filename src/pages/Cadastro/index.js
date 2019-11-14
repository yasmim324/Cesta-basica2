
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {Container, Form} from './styles'
import api from '../../services/api'

import * as Yup from 'yup'

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório!!'),
  email: Yup.string()
  .email('Insira um e-mail válido')
  .required('O e-mail é obrigatório'),
  senha: Yup.string()
  .min(6, 'Mínimo 6 caracteres')
  .required('A senha é obrigatória!!')
})

class Cadastro extends Component{
  state = {
    nome: '',
    email: '',
    senha: '',
    error: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    if (!nome || !email || !senha) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/usuarios", { nome, email, senha });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu algo de errado!!" });
      }
    }
  }
   
 render(){
  return (
    <Container >
     
     <Form schema={schema} onSubmit = {this.handleSubmit}>
     {this.state.error && <p>{this.state.error}</p>}
       <input 
       name = "nome"
       type = "name" 
       placeholder = 'Nome completo'
       onChange={e => this.setState({ nome: e.target.value })}
       />
       <input 
       name = "email"
       type = "email" 
       placeholder = 'Digite seu e-mail'
       onChange={e => this.setState({ email: e.target.value })}
       />
   
       <input 
       name = "senha"
       type = "password" 
       placeholder = 'Digite a senha'
       onChange={e => this.setState({ password: e.target.value })}
       />
      
      
      <button type="submit">Desejo criar uma conta</button>
         
      
      <Link to = "/" >Já possuo uma conta</Link>
      </Form>
     </Container>
  )
}
}

export default withRouter(Cadastro)