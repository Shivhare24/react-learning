import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'Angular'
        }
    }

    handleUsername = event =>{
        this.setState({
            username: event.target.value
        })
    }

    handleComment = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} has commented ${this.state.comment} on the topic ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div><br />
                <button type='submit'>Submit</button>
            </form>
            
        )
    }
}

export default Form
