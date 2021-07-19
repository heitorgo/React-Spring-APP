import React, { Component } from 'react';
import { Container, Row, Table, Button, Col, Form} from 'react-bootstrap';

class CreateUpdateUsuarios extends Component {

    constructor (props){
        super(props);
        this.state={
            email_usuario:"",
            senha_usuario:""
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSenhaHandler = this.changeSenhaHandler.bind(this);
        this.salvarUsuario = this.salvarUsuario.bind(this);
    }

    componentDidMount(){

    }

    changeEmailHandler(event){
        this.setState({email_usuario : event.target.value})
    }

    changeSenhaHandler(event){
        this.setState({senha_usuario : event.target.value})
    }

    cancelar(){
        this.props.history.push("/usuario");
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Cadastro de Usuários</h1>
                </Row>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="seuemail@dominio.com" value={this.state.email_usuario} onChange={this.changeEmailHandler}></Form.Control>
                        <Form.Text className="text-muted">Digite o seu Email</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formSenha">
                        <Form.Control type="password" placeholder="Senha" value={this.state.senha_usuario} onChange={this.changeSenhaHandler}></Form.Control>
                        <Form.Text className="text-muted">Digite o seu Email</Form.Text>
                    </Form.Group>
                    <Row className="float-right">
                        <Button variant="success" style={{margin: "10px 0px 10px 0px"}} className="btnSubmit" onClick={this.salvarUsuario}>
                            Inserir
                        </Button>
                        <Button variant="warning" style={{margin: "10px"}} onClick={this.cancelar.bind(this)} >
                            Cancelar
                        </Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdateUsuarios;