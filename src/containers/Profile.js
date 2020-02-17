import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default class Profile extends Component {

    handleSubmitEdit = (event) => {
        event.preventDefault();
        this.props.history.push('\edit')
    }

    handleSubmitLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        this.props.history.push('\login')
    }

    render() {
        return (
            <Container className="pt-5">
                <Card body outline color="success" className="mx-auto my-2 card">

                    <Row  className="justify-content-md-center pt-4">
                        <Col>
                            <h2>Profile</h2>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center pt-5">
                        <Col lg={2}>
                            <h4>First Name:</h4>
                        </Col>
                        <Col lg={10}>
                        <h4>{localStorage.getItem('firstname')}</h4>
                        </Col>    
                    </Row>

                    <Row className="justify-content-md-center pt-4">
                        <Col lg={2}>
                            <h4>Last Name:</h4>
                        </Col>
                        <Col lg={10}>
                        <h4>{localStorage.getItem('lastname')}</h4>
                        </Col>    
                    </Row>

                    <Row className="justify-content-md-center pt-4">
                        <Col lg={2}>
                            <h4>Email:</h4>
                        </Col>
                        <Col lg={10}>
                        <h4>{localStorage.getItem('email')}</h4>
                        </Col>    
                    </Row>

                    <Row className="justify-content-md-center pt-4">
                        <Col>
                            <Button variant="outline-success" type="submit" size="lg" onClick={this.handleSubmitEdit} className="mr-4">Edit </Button>
                            <Button variant="outline-danger" type="submit" size="lg" onClick={this.handleSubmitLogout}>Logout </Button>
                         </Col >                                                      
                    </Row>

                </Card>
            </Container>
        )
    }
}
