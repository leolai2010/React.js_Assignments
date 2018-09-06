import React, { Component } from 'react';
//simple rendering of searchbar
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term:'' };
        this.onInputChange = this.onInputChange.bind(this); //remember to bind this for the callback function
        //this will work on the input field if not binded in constructor
        //onChange={event => this.onInputChange(event.target.value)}
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){ //fetch weather data once clicked
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}