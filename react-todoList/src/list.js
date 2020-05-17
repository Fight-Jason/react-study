import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { Input, Button , List} from 'antd'
import store from './store'
// import aixos from 'axios';
// import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './store/actionsTypes'
import { getTodoList, getInputChangeAction, getAddItemAction ,getDeleteItemAction,initListAction } from './store/actionsCreators'
import TodoListUI from './listUI'


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
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
        // aixos.get('http://mock-api.com/VnZrjrnw.mock/todoList')
        // .then(res=> {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action)
        // })
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
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}

 
export default TodoList;