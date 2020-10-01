import React, {Component} from 'react'


export default class Study extends Component {
    constructor() {
        super()
        this.state = {
            className: "",
            moduleName: "",
            numOfQuestions: "",
            questions: [],
            displayQuestion: "",
            answer: "",
            flipped: false
        }
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

    render(){
        return (
            <div>
                <span>
                    <h3>You're Studying for className</h3>
                    <p>This is question questionNumber/totalQuestions</p>
                </span>
                <div>
                    {/* This will conditionally render the question, or the answer, and handle a "click to flip the card" method */}
                </div>
                <span>
                    <button>Next Card</button>
                </span>
            </div>
        )
    }
}

