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
            classes: [],
            moduleClassId: ''
        }
    }

    componentDidMount = async() => {
        this.updateClasses()
    }

    addClass = () => {
        // TODO --- remove test case, fully code functionality
        let name = 'test class'
        axios.post('/classes', {name}).then(res => {
            this.updateClasses()
        })
    }

    handleAddClass = () => {
        this.setState({
            createClass: true,
            createModule: false
        })
    }

    handleAddModule = id => {
        this.setState({
            createClass: false,
            createModule: true,
            moduleClassId: id
        })
    }

    updateClasses = async () => {
        const classes = await getClasses();
        this.setState({classes})
    }

    render() {
        let displayClasses = this.state.classes.map(className => {
            return (
                <ClassCard key = {className.id} id={className.id} name={className.name} addModule={this.handleAddModule}/>
            )
        })
        return (
            <div>
                <h1>Create Flashcards</h1>

                <div>
                    <p>What would you like to do?</p>
                    {
                        this.state.createClass === false && this.state.createModule === false ?
                        <div>
                            <ul>
                                {displayClasses}
                            </ul>
                            <button onClick={() => this.handleAddClass()}>Add New Class</button>
                        </div>
                        :
                        this.state.createClass === true ?
                        <div>
                            <p>This is the Create Class Form</p>
                            {/* Make a classform component here and below to handle creation of new stuff */}
                        </div>
                        :
                        <div>
                            <p>This is the Create Module Form</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

