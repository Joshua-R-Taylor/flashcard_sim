import React, {Component} from 'react'
import getModules from './methods/getModules'
import {Link} from 'react-router-dom'

export default class ClassLabel extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '', 
            modules: [],
            mode: null
        }
    }

    componentDidMount = async () => {
        await this.setState({
            id: this.props.id,
            name: this.props.name,
            mode: this.props.mode
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
            return <p key={module.id}>
                <strong>{module.title}</strong> <br/>
                {
                    this.state.mode === "create" ? 
                    <Link to={`/add/card/${module.id}`}><button>Add Cards</button></Link>
                    :
                    this.state.mode === "study" ?
                    <Link to={`/review/module/${module.id}`}><button>Study Module</button></Link>
                    :
                    <Link to={`/edit/module/${module.id}`}><button>Edit Module</button></Link>
                }
                </p>
        })
        return (
            <div>
                <header>
                    <h1 onClick={() => this.handleExpand()}> <span id={`${this.props.id}_${this.props.name}`}>{'>'}</span> {this.state.name} </h1>
                    {
                        this.state.mode === "create" ?
                        <Link key={this.props.id} to={`/add/module/${this.props.id}`}><button>Add a Module</button></Link>
                        :
                        this.state.mode === "study" ?
                        <Link to={`/review/class/${this.props.id}`}><button>Study Class</button></Link>
                        :
                        <Link to={`/edit/class/${this.props.id}`}><button>Edit Class</button></Link>
                    }
                </header>
                <ul style={{display:"none"}} id={`${this.props.id}_module_list`}>
                    {displayModules}
                </ul>
            </div>
        )
    }
}