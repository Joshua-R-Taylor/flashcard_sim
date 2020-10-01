import React, {Component} from 'react'


export default class Study extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false
        }
    }
    render(){
        return (
            <div>
                <p>This is the Study component</p>
            </div>
        )
    }
}

