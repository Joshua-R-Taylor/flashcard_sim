import React, {Component} from 'react'
import getClasses from './methods/getClasses'
import ClassCard from './ClassCard'
import axios from 'axios'

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
        this.updateClasses()
    }

    addModule = () => {
        console.log('This is the add module method')
    }

    addClass = () => {
        // TODO --- remove test case, fully code functionality
        let name = 'test class'
        axios.post('/classes', {name}).then(res => {
            this.updateClasses()
        })
    }

    updateClasses = async () => {
        const classes = await getClasses();
        this.setState({classes})
    }

    render() {
        let displayClasses = this.state.classes.map(className => {
            return (
                <ClassCard key = {className.id} id={className.id} name={className.name} addModule={this.addModule}/>
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
                        <button onClick={() => this.addClass()}>Add New Class</button>
                    </div>
                </div>
            </div>
        )
    }
}

