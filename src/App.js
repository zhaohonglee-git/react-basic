import React, { Component } from 'react'
import Contact from './Contact'
import AddContact from './AddContact'

class App extends Component {
  state = {
    contactForm: [
      { name: 'Summer', age: '35', sex: 'female', id: 1 },
      { name: 'Lily', age: '20', sex: 'female', id: 2 },
      { name: 'Henry', age: '31', sex: 'male', id: 3 }
    ]
  }

  addContact = (contact) => {
    console.log(contact, '根组件打印内容')
    // 以下的代码目的：将用户从页面输入的数据更新到根组件的states数据中
    // 需要创建一不重复的id
    contact.id = Math.random()
    // 创建副本并添加新的数据进去，逐条拼接在数组上，保证原有数组不变，不用push方法，避免损坏初始的数组内容
    let contactForm = [...this.state.contactForm, contact]
    this.setState({
      contactForm: contactForm
    })
  }

  deletContact = (id) => {
    console.log(id, '根组件中打印的id')
    // 利用数组提供的fillter方法实现过滤，不会对原数组产生变化，生成一个新数组
    let contactForm = this.state.contactForm.filter(item => {
      return item.id !== id
    })
    this.setState({
      contactForm: contactForm
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>这个是React应用程序</h1>
        </header>
        <p>******</p>
        <Contact contactForm={this.state.contactForm} deletContact={this.deletContact} />
        <AddContact addContact={this.addContact} />
      </div>
    );
  }
}

export default App;
