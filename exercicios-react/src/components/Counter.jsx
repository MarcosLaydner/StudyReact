import React, {Component } from 'react'

export default class Counter extends Component {
    state = {
        number: this.props.number
    }

    plusOne = () => {
        this.setState({number: this.state.number + 1})
    }

    minusOne= () => {
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
            <div>
                <div>Number: {this.state.number}</div>
                <button onClick={this.plusOne}>Inc</button>
                <button onClick={this.minusOne}>Dec</button>
            </div>
        )
    }
}

// Para passar parametros tem que usar arrow
// <button onClick={() => this.minusOne(10)}>Dec</button>