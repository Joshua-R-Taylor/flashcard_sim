import React, {Component} from 'react'
import getClasses from './methods/getClasses'
import ClassCard from './ClassCard'

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

    addModule = () => {
        console.log('This is the add module method')
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
                        <button>Add New Class</button>
                    </div>
                </div>
            </div>
        )
    }
}

