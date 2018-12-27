import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ACTIONS from '../modules/action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});


class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    generateList = () => {
        return this.props.items.map(item => (
            <ListGroupItem key={item.id}>
                {item.id} - {item.description}
                <Button onClick={this.handleDelete} value={item.id}>x</Button>
            </ListGroupItem>
        ));
    };

    handleSubmit = (event) => {
        this.props.createItem(this.state.item);
        this.state.item = '';
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDelete = event => {
        console.log('id');
        console.log(event.target.value);
        this.props.deleteItem(event.target.value);
    }

    callAPI = event => {
        console.log('call API');
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for='expItem' sm={2}>Item</Label>
                            <Col sm={10}>
                                <Input name='item' id='expItem' type='text' value={this.state.item} onChange={this.handleChange} placeholder='input' />
                            </Col>
                        </FormGroup>
                        <Button type='submit' >Add</Button>
                        <Button block={true} onClick={this.callAPI} >Test API</Button>
                    </Form>
                </div>
                <div>
                    <ListGroup>
                        {this.generateList()}
                    </ListGroup>
                </div>
            </div>
        )
    }
}

//export default ToDo;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo);