import React, { Component } from 'react'

export default class AddContact extends Component {
  state = {
    name: null,
    age: null,
    sex: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state,'子组件打印内容')
    this.props.addContact(this.state)
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id='age' onChange={this.handleChange} />
          <label htmlFor="sex">Sex:</label>
          <input type="text" id='sex' onChange={this.handleChange} />
          <button>提交表单</button>
        </form>
      </div>
    )
  }
}
