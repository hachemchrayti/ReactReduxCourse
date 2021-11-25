import React, { Component } from 'react'

export default class AddNinja extends Component
{
    state = {
        name: '',
        age: null,
        belt: ''
    }

    HandleChange = (e) =>
    {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        //console.log(this.state)
        this.props.AddNinja(this.state);
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' type='text' onChange={this.HandleChange} />
                    <label htmlFor='age'>Age</label>
                    <input id='age' name='age' type='text' onChange={this.HandleChange} />
                    <label htmlFor='belt'>Belt</label>
                    <input id='belt' name='belt' type='text' onChange={this.HandleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
