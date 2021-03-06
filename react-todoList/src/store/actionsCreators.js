import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST } from './actionsTypes'
import aixos from 'axios';

export const getInputChangeAction =  (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = (data) => ({
    type: GET_INIT_LIST,
    data
})

export const getTodoList = ()=> {
    return (dispatch) => {
        aixos.get('http://mock-api.com/VnZrjrnw.mock/todoList')
        .then(res=> {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action)
        })
    }
}