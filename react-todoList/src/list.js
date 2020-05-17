import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button , List} from 'antd'
import store from './store'
// import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './store/actionsTypes'
import { getInputChangeAction, getAddItemAction ,getDeleteItemAction } from './store/actionsCreators'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
class TodoList extends Component {
    
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action)
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
        // console.log('handleStoreChange')
    }

    render() { 
        return ( 
            <div style={{marginTop: '10px',marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder='todo info' 
                        style={{width: '300px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>查询</Button>
                </div>
                <List
                    style={{marginTop: '10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}/>
            </div>
         );
    }
}

 
export default TodoList;