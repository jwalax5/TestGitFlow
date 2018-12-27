import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expEmail: '',
            expPwd: ''
        };
    }

    validateForm() {
        return this.state.expEmail.length > 0 && this.state.expPwd.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    checkInput = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for='expEmail' sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input autoFocus name='email' id='expEmail' type='email' onChange={this.handleChange} placeholder='email' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='expPwd' sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type='password' name='passwword' id='expPwd' onChange={this.handleChange} placeholder='password' />
                        </Col>
                    </FormGroup>
                    <Button block disabled={!this.validateForm()} type='submit' onClick={this.checkInput}>Login</Button>
                </Form>
            </div>
        );
    }

}

export default Login;