import React, { Component } from 'react';
import { Input,Button,List } from 'antd';
import {getChangeInputValueAction,getAddTodoItemAction,getDeleteTodoItemAction} from './store/actionCreators'
import store from './store'

class App extends Component {
  constructor(props) {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <div className="App">
        <Input
          placeholder={'todo'}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{width: "600px",marginRight:"10px"}} />
        <Button type="primary" onClick={this.handleBtnClick}>Primary</Button>
        <List
        style={{width: "600px",marginTop:"10px"}}
        bordered
        dataSource={this.state.list}
        renderItem={(item, index) => ( <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
      />
      </div>
    );
  }

  handleInputChange (e) {
    const action = getChangeInputValueAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick () {
    if(!this.state.inputValue) {
      alert('add todo item')
      return
    }
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }
}

export default App;
