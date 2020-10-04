import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input,Button,List } from 'antd';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

import './App.css';

class TodoList extends Component {
  render () {
    return (
      <div className="App">
        <Input
          placeholder={'todo'}
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          style={{width: "600px",marginRight:"10px"}} />
        <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
        <List
        style={{width: "600px",marginTop:"10px"}}
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => ( <List.Item onClick={this.props.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
      />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange (e) {
      dispatch(getInputChangeAction(e.target.value))
    },
    handleBtnClick () {
      dispatch(getAddItemAction())
    },
    handleItemDelete (index) {
      dispatch(getDeleteItemAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
