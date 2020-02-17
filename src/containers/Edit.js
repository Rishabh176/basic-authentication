import React, { Component } from 'react'
import {history, NavLink} from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default class Edit extends Component {
    state={
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        errors:{
            emailError: '',
            firstNameError: '',
            lastNameError: '',
            passwordError: '',
            confirmPasswordError: ''
        }
    }
    
    handleChange=(event)=> {
        this.setState({    
            [event.target.name]:event.target.value
        })
    }

    validate=()=>{
        let isError = false;

        if(this.state.firstName.length === 0){
            isError= true;
            this.state.errors.firstNameError='firstname cannot be left empty'
        }
        else{
            this.state.errors.firstNameError=''
        }
        if(this.state.lastName.length === 0){
            isError= true;
            this.state.errors.lastNameError='lastname cannot be left empty'
        }
        else{
            this.state.errors.lastNameError=''
        }
        if(this.state.password.length < 8){
            isError= true;
            this.state.errors.passwordError='password is too short'
        }
        else{
            this.state.errors.passwordError=''
        }
        if(this.state.password !== this.state.confirmPassword){
            isError=true;
            this.state.errors.confirmPasswordError='password does not matches'
        }
        else{
            this.state.errors.confirmPasswordError=''
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
        const {firstName, lastName, email, password}=this.state
        if(!err){
            localStorage.setItem('firstname',firstName)
            localStorage.setItem('lastname',lastName)
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
            alert('details have been edited succesfully')
            this.props.history.push('\profile')
        }
        else{
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <Container className="pt-5">
                    <Card body outline color="success" className="mx-auto my-2 card">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <h2>Edit</h2>
                            </Form.Group>
                        
                            <Form.Group>
                                <Row className="justify-content-md-center pt-4">
                                    <Col  lg={2}>
                                        <Form.Label htmlFor="firstname">First Name</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                                        <Form.Label className="error">{(this.state.errors.firstNameError)? this.state.errors.firstNameError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                            </Form.Group>
                            
                            <Form.Group>
                                <Row className="justify-content-md-center pt-1">
                                    <Col lg={2}>
                                        <Form.Label htmlFor="lastname">Last Name</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                                        <Form.Label className="error">{(this.state.errors.lastNameError)? this.state.errors.lastNameError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                            </Form.Group>
                            
                            <Form.Group>
                                <Row className="justify-content-md-center pt-1">
                                    <Col lg={2}>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="email" type="text" value={this.state.email} onChange={this.handleChange} />
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
                                        <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                                        <Form.Label className="error">{(this.state.errors.passwordError)? this.state.errors.passwordError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                            </Form.Group>
                        
                        <Form.Group>
                            <Row className="justify-content-md-centerr pt-1">
                                    <Col lg={2}>
                                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                                    </Col>
                                    <Col lg={10}>
                                        <Form.Control name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                                        <Form.Label className="error">{(this.state.errors.confirmPasswordError)? this.state.errors.confirmPasswordError: ''}</Form.Label>
                                    </Col>    
                                </Row>
                        </Form.Group>

                            <Form.Group>
                                <Row className="justify-content-md-center pt-2">
                                    <Col>
                                        <Button variant="outline-success" type="submit" size="lg">Edit</Button>
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
