import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    //adding the field variable allows for tracking of changes
    renderTitleField(field) {
        return(
            <div>
                <input
                    // onChange={field.input.onChange}
                    type="text"
                    {...field.input} // contains event handler and props
                />
            </div>
        );
    }
    render() {
        return(
            <form>
                <Field 
                    name="title"
                    component={this.renderTitleField} // field only know how to interact with Redux BUT not JSX
                    // adding a component to show JSX blob
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm' //unique string tied to this form
})(PostsNew);