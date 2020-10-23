import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Change extends Component {
    constructor() {
        super()
        this.state = {
            classes: []
        }
    }

    render() {
        return (
            <div>
                We change things here
            </div>
        )
    }
}