import React, {Component} from 'react'
import ClassLabel from './ClassLabel'
import CreateForm from './CreateForm'
import getClasses from './methods/getClasses'
// import axios from 'axios'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            classes: [],
            addingClass: false,
            addingModule: false, 
            addingCard: false,
            classId: '', 
            moduleId: ''
        }
    }

    componentDidMount = async() => {
        let classes = await getClasses();
        this.setState({classes})
    }

    // handler for add class will require addingClass, will afterwards call add module
    handleAddClass = async() => {
        this.setState({
            addingClass: true,
            addingModule: false,
            addingCard: false
        }) // placeholder test case
    }

    // handler for add module will require classId and addingModule, will afterwards call add card
    handleAddModule = async() => {
        this.setState({
            addingClass: false,
            addingModule: true,
            addingCard: false
        })
    }
    // handler for add card will require moduleId and addingCard, will afterwards call base state function
    handleAddCard = async() => {
        this.setState({
            addingClass: false,
            addingModule: false,
            addingCard: true
        })
    }

    // handler for finished adding, or some sort of return function to base state to be called after any final insert into db
    handleDefaultState = async() => {
        this.setState({
            addingClass: false,
            addingModule: false,
            addingCard: false
        })
    }

    render() {
        let displayClasses = this.state.classes.map(classInfo => {
            return <ClassLabel 
                key = {classInfo.id}
                id = {classInfo.id} 
                name = {classInfo.name}
                addModule = {this.handleAddModule}
                addCard = {this.handleAddCard}
            />
        })
        return (
            <div>
                {
                    this.state.addingClass === true || this.state.addingModule === true || this.state.addingCard === true ? 
                    <CreateForm 
                        addingClass = {this.state.addingClass}
                        addingModule = {this.state.addingModule}
                        addingCard = {this.state.addingCard}
                        classId = {this.state.classId}
                        moduleId = {this.state.moduleId}
                        addModule = {this.handleAddModule}
                    />
                    :
                    <div>
                        <header>
                            <h1>Current Classes: </h1>
                            <button onClick={() => this.handleAddClass()}>Add Class</button>
                        </header>
                        <div>
                            {displayClasses}
                        </div>
                    </div>    
                }
            </div>
        )
    }
}

