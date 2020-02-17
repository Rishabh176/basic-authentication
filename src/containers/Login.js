import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default class Login extends Component {
    state={
        email: '',
        password: '',
        errors:{
            emailError: '',
            passwordError: '',
        }
    }

    handleChange=(event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    
    }

    validate=()=>{
        let isError = false;

        if(this.state.password.length < 8){
            isError= true;
            this.state.errors.passwordError='password is too short'
        }
        else{
            this.state.errors.passwordError=''
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){
            this.state.errors.emailError=''
        }
        else{
            isError=true;
            this.state.errors.emailError="please enter the correct email"
        }
        this.setState({
            ...this.state,
            ...this.state.errors
        })
        return isError;
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            errors: {}
        })
        const err=this.validate();
        const email = localStorage.getItem('email')
        const password= localStorage.getItem('password')
        if((email === this.state.email) && (password ===this.state.password)){
            this.props.history.push('/profile')
        }
        else{
            alert('incorrect details')
        }
    }

    handleSubmitSignup = (event) => {
        event.preventDefault();
        this.props.history.push('\signup')
    }

    
    render() {
        return (
            <React.Fragment>
                <Container className="pt-5">
                    <Card body outline color="success" className="mx-auto my-2 card">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <h2>Login In</h2>
                            </Form.Group>
                            <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <Col lg={2}>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                                        <Form.Label className="error">{(this.state.errors.emailError)? this.state.errors.emailError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                            </Form.Group>
                                
                            <Form.Group>
                                <Row className="justify-content-md-centerr pt-1">
                                    <Col lg={2}>
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                                        <Form.Label className="error">{(this.state.errors.passwordError)? this.state.errors.passwordError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row className="justify-content-md-center pt-2">
                                    <Col>
                                        <Button variant="outline-warning" type="submit" size="lg" className="mr-4">Log In </Button>
                                        <Button variant="outline-primary" type="submit" size="lg" onClick={this.handleSubmitSignup}>Sign up </Button>
                                    </Col>                           
                                </Row>
                            </Form.Group>
                        </Form>
                    </Card>
                </Container>
                 
            </React.Fragment>
        )
    }
}
