import React from 'react';

import { connect } from 'react-redux';

const TodoList = (props) => {
    const { inputValue, list , changeInputValue , handleClick , handleItemDelete} = props;
    return (
        <div>
            <div>
                <input 
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleClick}> 提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li key={index} onClick={()=> {handleItemDelete(index)}}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }

            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleItemDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            debugger;
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);