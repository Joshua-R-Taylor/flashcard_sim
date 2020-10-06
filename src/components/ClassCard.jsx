import React, {Component} from 'react'

export default class ClassCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <li key ={this.props.id}>{this.props.name} <button onClick={() => this.props.addModule(this.props.id)}>Add Module</button></li>
            )
        }
}
