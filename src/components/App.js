import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <label htmlFor="textInput">Enter Text:</label>
                <input id="textInput" type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={() => alert(this.state.text)}>Show Text</button>
            </div>
        );
    }
}

export default App;
