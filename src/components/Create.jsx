import React, {Component} from 'react'
import ClassLabel from './ClassLabel'
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

    // handler for add class will require addingClass

    // handler for add module will require classId and addingModule

    // handler for add card will require moduleId and addingCard

    render() {
        let displayClasses = this.state.classes.map(classInfo => {
            return <ClassLabel 
                key = {classInfo.id}
                id = {classInfo.id} 
                name = {classInfo.name}
                // function for adding modules here
            />
        })
        return (
            <div>
                {
                    this.state.addingClass === true || this.state.addingModule === true || this.state.addingCard === true ? 
                    <div> This shouldn't show yet </div>
                    :
                    <div>
                        <header>
                            <h1>Current Classes: </h1>
                            <button /* click handler for adding class and loading form here */>Add Class</button>
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

