import React, {Component} from 'react'
import getClasses from './methods/getClasses'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            createClass: false,
            createModule: false,
            classes: []
        }
    }

    componentDidMount = async() => {
        const classes = await getClasses();
        this.setState({classes})
    }

    render(){
        let displayClasses = this.state.classes.map(className => {
            return (
                <li key={className.id}>{className.name} <button>Add Module</button></li>
            )
        })
        return (
            <div>
                <h1>Create Flashcards</h1>

                <div>
                    <p>What would you like to do?</p>
                    <div>
                        <ul>
                            {displayClasses}
                        </ul>
                        <button>Add New Class</button>
                    </div>
                </div>
            </div>
        )
    }
}

