import React, {Component} from 'react'
import getCards from './methods/getCards'

export default class Review extends Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            cardsRemaining: null,
            cardsFinished: null,
            type: null,
            id: null
        }
    }

    componentDidMount = async () => {
        const {type, id} = this.props.match.params
        this.setState({
            type,
            id
        })
        this.handleGetCards(type, id)
        const cardsRemaining = this.state.cards.length
        const cardsFinished = 0;
        this.setState({cardsRemaining, cardsFinished})
    }

    handleGetCards = async (type, id) => {
        const cards = await getCards(type, id)
        console.log(cards)
        this.setState({cards})
    }

    /*
    Will be doing something fancy here to make sure that the questions are randomized, but that you progress through
    the entire deck of flash cards. In other words, if we start with flashcard #4, then we click "next card", 4 is 
    no longer available for viewing (i.e., isn't a random card that could show again)

    POSSIBLE SOLUTION: 
    Hold the number of questions in state (by array length), set up a randomizer function with that info. Randomly generate a question. 
    Once the question is generated, display the element at that index, remove it from the array of questions, and decrement the number 
    of questions remaining. Repeat. 
    
    */
    
    render() {
        return(
            <div>
                This is the review component <br/>
                We're receiving the following for url parameters: <br/>
                Type of review: {this.props.match.params.type} <br/>
                ID of {this.props.match.params.type}: {this.props.match.params.id}
            </div>
        )
    }
}