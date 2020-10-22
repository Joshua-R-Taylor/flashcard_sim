import React, {Component} from 'react'
import ClassLabel from './ClassLabel'
import getClasses from './methods/getClasses'
import {Link} from 'react-router-dom'

export default class Create extends Component {
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

    render() {
        let displayClasses = this.state.classes.map(classInfo => {
            return <ClassLabel 
                key = {classInfo.id}
                id = {classInfo.id} 
                name = {classInfo.name}
                mode = "create"
            />
        })
        return (
            <div>
                <div>
                    <header>
                        <h1>Current Classes: </h1>
                        <Link to={'/add/class/0'}>Add New Class </Link>
                    </header>
                    <div>
                        {displayClasses}
                    </div>
                </div>    
            </div>
        )
    }
}

