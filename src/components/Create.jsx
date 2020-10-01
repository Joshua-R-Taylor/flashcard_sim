import React, {Component} from 'react'


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            className: "",
            moduleName: ""

        }
    }

    /* 
        A few routes to go here. I can either: 
            1) have a single form requiring class and module names, then do some checks to make sure the class/module doesn't yet exist, OR
            2) have separate buttons for creating a new class (then checking to see if it exists) or creating new modules within an existing class - and displaying a list of existing classes
               so, something like... 
                <ul> 
                    <li> Class One <button> Add Module </button> </li> 
                    <li> Class Two <button> Add Module </button> </li> 
                </ul> 
                <button> Add New Class </button>

        EDIT: partial to option 2, will be moving forward with it
    */

    render(){
        return (
            <div>
                <p>This is the Create component</p>
            </div>
        )
    }
}

