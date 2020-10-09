import React, {Component} from 'react'
// import axios from 'axios'

export default class CreateForm extends Component {
    constructor() {
        super()
        this.state = {
            addingClass: false,
            addingModule: false,
            addingCard: false,
            classId: '',
            moduleId: '',
            className: '',
            moduleName: '',
            question: '',
            answer: ''
        }
    }

    componentDidMount = async() => {
        await this.setState({
            addingClass: this.props.addingClass, 
            addingModule: this.props.addingModule, 
            addingCard: this.props.addingCard
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.addingClass ? 
                    <div> We're adding a class! </div> 
                    : 
                    this.state.addingModule ? 
                    <div> We're adding a module! </div> 
                    :
                    <div> We're adding a card! </div>
                }
            </div>
        )
    }
}