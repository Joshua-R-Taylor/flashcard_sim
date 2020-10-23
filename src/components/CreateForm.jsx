import React, {Component} from 'react'
import postClass from './methods/postClass'
import postModule from './methods/postModule'
import postCards from './methods/postCards'
import {Link} from 'react-router-dom'

export default class CreateForm extends Component {
    constructor() {
        super()
        this.state = {
            className: null,
            classId: null,
            moduleName: null,
            moduleId: null,
            question: '',
            answer: '',
            cards: [],
            addType: null
        }
    }

    componentDidMount = async() => {
         await this.handleUpdateState()
    }

    handleUpdateState = async() => {
        let {addType, id} = this.props.match.params
        this.setState({addType})
        // TODO: ajax to get class/module names, set on state
        if(addType === "module") {this.setState({classId:id})}
        else {this.setState({moduleId:id})}
    }

    handleFormFill = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handlePostClass = async className => {
        const newClass = await postClass(className)
        className = newClass.data[0].name
        let classId = newClass.data[0].id
        this.setState({className})
        this.props.history.push(`/add/module/${classId}`)
        this.handleUpdateState()
    }

    handlePostModule = async moduleName => {
        const id = this.state.classId
        const newModule = await postModule(moduleName, id)
        let moduleId = newModule.data[0].id
        moduleName = newModule.data[0].title
        console.log(`New Module ID: ${moduleId} and Module Name: ${moduleName}`)
        this.setState({moduleName})
        this.props.history.push(`/add/card/${moduleId}`)
        this.handleUpdateState()
    }

    handleAddCurrentCard = () => {
        // Create a new card object, place into our current array of cards
        let {question, answer} = this.state
        let card = {question, answer}
        let cards = this.state.cards
        cards.push(card)
        // empty input forms
        this.setState({
            question: '',
            answer: '', 
            cards
        })
        // reselect the question input form for easier entry
        const input = document.getElementById("question")
        input.focus()
        input.select()
    }

    handlePostCard = async (cards, moduleId) => {
        if(this.state.question.length > 0) {
            this.handleAddCurrentCard()
            console.log(this.state.cards)
            await postCards(cards, moduleId)
        }
        else {
            console.log(this.state.cards)
            await postCards(cards, moduleId)
        }
        this.props.history.push('/study')
    }

    render() {
        const displayCards = this.state.cards.map(card => {
            return (
                <div>
                    <p><strong>Question:</strong>{card.question}</p> <br/>
                    <p><strong>Answer:</strong>{card.answer}</p> 
                </div>
            )
        })
        return(
            <div>
                {
                    this.state.addType === "class" ? 
                    <div>
                        <label>Class Name: </label>    
                        <input type="text" name="className" placeholder="Class Name" onChange={e => this.handleFormFill(e)}/>
                        <button onClick={() => this.handlePostClass(this.state.className)}>Move On to Modules</button>
                    </div>
                    :
                    this.state.addType === "module" ? 
                    <div>
                        <p>Adding a module to the <strong>{this.state.className}</strong> class</p>
                        <label>Module Name: </label>    
                        <input type="text" name="moduleName" placeholder="Module Name" onChange={e => this.handleFormFill(e)}/>
                        <button onClick={() => this.handlePostModule(this.state.moduleName)}>Move On to Cards</button>
                    </div>
                    :
                    <div>
                        <p>We are adding questions and answers to the <strong>{this.state.moduleName}</strong> module</p>
                        <label>Question Text: </label>    
                        <input type="text" id="question" name="question" placeholder="Question Text" value={this.state.question} onChange={e => this.handleFormFill(e)}/>
                        <label>Answer Text: </label>    
                        <input type="text" id="answer" name="answer" placeholder="Answer Text" value={this.state.answer} onChange={e => this.handleFormFill(e)}/>
                        <button onClick={() => this.handleAddCurrentCard()}>Add Another Card</button>
                        <button onClick={() => this.handlePostCard(this.state.cards, this.state.moduleId)}>Finish Creating Cards</button>
                        {/* TODO: add a preview of the cards in the array  */}
                        <br/>
                        <h3>Current Cards: </h3>
                        <div>
                            {displayCards}
                        </div>
                    </div>
                }
                <Link to='/create'><button>Return</button></Link>
            </div>
        )
    }
}