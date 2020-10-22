import React, {Component} from 'react'
import ClassLabel from './ClassLabel'
import getClasses from './methods/getClasses'
import {Link} from 'react-router-dom'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            classes: [],
            // adding: false,
            // addType: null,
            // name: null,
            // id: null
        }
    }

    componentDidMount = async() => {
        await this.getClasses()
    }

    // handleAdding = (addType, name, id) => {
    //     let adding = true
    //     this.setState({adding, addType, name, id})
    // }

    // handleFinishAdd = async () => {
    //     this.setState({adding:false, addType:null, name:null, id:null})
    //     this.getClasses()
    // }

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
                // handleAdding = {this.handleAdding}
            />
        })
        return (
            <div>
                {/* {
                    this.state.adding ?
                    <CreateForm 
                        addType = {this.state.addType}
                        name = {this.state.name}
                        id = {this.state.id}
                        handleFinishAdd = {this.handleFinishAdd}
                    />
                    : */}
                    <div>
                        <header>
                            <h1>Current Classes: </h1>
                            {/* <button onClick={() => this.handleAdding("class")}>Add New Class</button> */}
                            <Link to={'/add/class/0'}>Add New Class </Link>
                        </header>
                        <div>
                            {displayClasses}
                        </div>
                    </div>    
                {/* } */}
            </div>
        )
    }
}

