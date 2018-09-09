import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
 
class PostsNew extends Component{
    //adding the field variable allows for tracking of changes
    renderField(field) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger':''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    // onChange={field.input.onChange}
                    type="text"
                    {...field.input} // contains event handler and props
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }
    onSubmit(values){
        console.log(values);
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });
    }
    render() {
        const{ handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title" //this name has to match validation function name for it to be connected!
                    component={this.renderField} // field only know how to interact with Redux BUT not JSX
                    // adding a component to show JSX blob
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    //console.log(values) -> {title:'xxx', categories:'xxx', content:'xxx'}
    const errors = {};
    //Validate the inputs from 'values'
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if(!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if(!values.content) {
        errors.content = "Pleaes enter some content";
    }
    //If errors is empty, the form is fine to submit
    //If errors has any properties, redux form assumes form is invalid
    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm' //unique string tied to this form
})(
    connect(null,{ createPost })(PostsNew)
);