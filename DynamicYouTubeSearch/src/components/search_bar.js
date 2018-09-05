import React, { Component } from 'react';
//class-based component: adds more functionality in comparison
class SearchBar extends Component {
    //state is a plain javascript object that is used to record and react to user events. 
    //Each class based component that we define has its own state object.
    //Whenever a component state is changed, component immediately re-renders.
    //forces children to re-render as well. 
    constructor(props){
        super(props); //will error if not super
        this.state = { term:'' }; //term = search-term 
    }
    //ES6
    render() {
        return (
        <div className="search-bar">
            <input
                value={this.state.term} //control component
                onChange={event => this.onInputChange(event.target.value)} //this.setState({ term: event.target.value })}
            />
        </div>
        )
    }
    // render() {
    //     return <input onChange={this.onInputChange} />; //render and return always required!
    // }
    // onInputChange(event) { //event handler
    //     console.log(event.target.value); //detects input and console logs it (dynamic: onChange is listening to this function)
    // }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}
// //function-based component
// const SearchBar = () => {
//     return <input />;
// };
export default SearchBar;