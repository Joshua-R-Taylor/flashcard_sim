import React, {Component} from 'react'


export default class Edit extends Component {
    constructor() {
        super()
        this.state = {
            className: "",
            modules: [],
            questions: [],
            answers: []
        }
    }
    render(){
        return (
            <div>
                <p>This is the Edit component</p>
            </div>
        )
    }
}