import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component{
    state = {
        modal:false,
        name:''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({ [e.target.name]:e.target.value });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            price: this.state.price
        }
        this.props.addItem(newItem);
        this.toggle();
    }
    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                Item: <Input type="text" name="name" id="item" onChange={this.onChange}/>
                                Price: <Input type="text" name="price" id="price" onChange={this.onChange}/>
                                <Button color="dark" style={{marginTop:'2rem'}} block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    item: state.item
});
export default connect(mapStateToProps, {addItem})(ItemModal);
