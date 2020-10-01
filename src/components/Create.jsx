import React, {Component} from 'react'


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            createClass: false,
            createModule: false,
            classes: []
        }
    }

    render(){
        return (
            <div>
                <h1>Create Flashcards</h1>

                <div>
                    <p>What would you like to do?</p>
                    <div>
                        {/* This will be dynamically rendered from the db of classes */}
                        <ul>
                            <li>Class One <button>Add Module</button></li>
                            <li>Class Two <button>Add Module</button></li>
                        </ul>
                        <button>Add New Class</button>
                    </div>
                </div>
            </div>
        )
    }
}

