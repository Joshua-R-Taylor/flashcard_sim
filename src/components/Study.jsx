import React, {Component} from 'react'
import ClassLabel from './ClassLabel'
import getClasses from './methods/getClasses'

export default class Study extends Component {
    constructor() {
        super()
        this.state = {
            classes: []
        }
    }

    componentDidMount = async() => {
        await this.getClasses()
    }

    getClasses = async() => {
        let classes = await getClasses();
        this.setState({classes})
    }

    render(){
        let displayClasses = this.state.classes.map(classInfo => {
            return <ClassLabel 
                key = {classInfo.id}
                id = {classInfo.id} 
                name = {classInfo.name}
                mode = "study"
            />
        })
        return (
            <div>
                <header>
                    <h1>Available Classes:</h1>
                </header>
                <div>
                    {displayClasses}
                </div>
            </div>
        )
    }
}

