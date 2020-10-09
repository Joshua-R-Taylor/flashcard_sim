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
            answer: '',
            cards: []
        }
    }

    componentDidMount = async() => {
        await this.setState({
            addingClass: this.props.addingClass, 
            addingModule: this.props.addingModule, 
            addingCard: this.props.addingCard
        })
    }

    handleFormFill = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.addingClass ? 
                    <div> 
                        <form>
                            <label>Class Name: </label>    
                            <input type="text" name="className" placeholder="Class Name" onChange={e => this.handleFormFill(e)}/>
                            {/* this onclick will also call changeToModule from props to switch to the module form  */}
                            <button onClick={() => this.props.returnToDefault()}>Add Modules</button>
                        </form> 
                    </div> 
                    : 
                    this.state.addingModule ? 
                    <div> 
                        <form>
                            <label>Module Name: </label> 
                            <input type="text" name="moduleName" placeholder="Module Name" onChange={e => this.handleFormFill(e)}/>
                            {/* this onclick will also call changeToCard from props to switch to the card form  */}
                            <button onClick={() => this.props.returnToDefault()}>Add Cards</button>
                        </form>
                    </div> 
                    :
                    <div> 
                        <form>
                            <label>Card Front: </label>
                            <input type="text" name="question" placeholder="Question Text" onChange={e => this.handleFormFill(e)}/>
                            <label>Card Back: </label>
                            <input type="text" name="answer" placeholder="Answer Text" onChange={e => this.handleFormFill(e)}/>
                            <button onClick={() => this.props.returnToDefault()}>Add Another Card</button>
                            {/* this onclick will submit to db and call returnToDefault from props to return to default view  */}
                            <button onClick={() => this.props.returnToDefault()}>Finish!</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}