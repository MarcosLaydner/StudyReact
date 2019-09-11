import React, {Component } from 'react'

export default class ComponentClass extends Component {
    render() {
        return (
            <h1>Hello Class {this.props.value || 'Default'}</h1>
        )
    }
}