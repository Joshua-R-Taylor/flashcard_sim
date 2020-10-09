import React, {Component} from 'react'
import getModules from './methods/getModules'


export default class ClassLabel extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '', 
            modules: []
        }
    }

    componentDidMount = async () => {
        await this.setState({
            id: this.props.id,
            name: this.props.name
        })
        let modules = await getModules(`${this.state.id}`)
        this.setState({modules})
    }

    handleExpand = () => {
        if(this.state.modules.length === 0) return
        let expandElement = document.getElementById(`${this.state.id}_${this.state.name}`)
        if(expandElement.innerText === '>') {
            expandElement.innerText = 'v'
        }
        else {
            expandElement.innerText = '>'
        }

        let moduleList = document.getElementById(`${this.state.id}_module_list`)
        if(moduleList.style.display === "none") {
            moduleList.style.display = ""
        }
        else {
            moduleList.style.display = "none"
        }
    }

    render() {
        let displayModules = this.state.modules.map(module => {
            console.log(module)
            return <li key={module.id}>{module.title} <button onClick={() => this.props.addCard()}>Add Card</button></li>
        })
        return (
            <div>
                <header>
                    <h1 onClick={() => this.handleExpand()}> <span id={`${this.props.id}_${this.props.name}`}>{'>'}</span> {this.state.name} </h1>
                    <button onClick={() => this.props.addModule()}>Add Module</button>
                </header>
                <ul style={{display:"none"}} id={`${this.props.id}_module_list`}>
                    {displayModules}
                </ul>
            </div>
        )
    }
}