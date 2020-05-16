import React, { Component ,Fragment} from 'react';
import TodoItem from './TodoItem';
import aixos from 'axios';

class TodoList extends React.Component {
    
    state= {
        inputValue: '',
        list: []
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // // 组件被更新之前，它会自动执行
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    //     return true;
    // }

    // // 组件被更新之前，它会自动执行，但它在shouldComponentUpdate之后被执行
    // // 如果shouldComponentUpdate返回true才会执行
    // // 如果返回false，这个函数不会被执行
    // UNSAFE_componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }

    // // 组件更新完成之后，会被执行
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    componentDidMount() {
        aixos.get('http://mock-api.com/VnZrjrnw.mock/todoList')
            .then(res => {
                this.setState(()=> ({
                    list: [...res.data]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() { 
        console.log('parent render')
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul ref={(ul)=> {this.ul = ul}}>
                   {
                        this.getTodoItem()
                        // <li 
                        // onClick={this.handleDelete.bind(this,index)}
                        // key={index}
                        // dangerouslySetInnerHTML={{__html:item}}
                        // >
                        //     {/* {item} */}
                        // </li>
                   }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })

        const value = e.target.value;
        this.setState(()=> ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: '',
        // })

        /**
         * @param {prevState} setState修改之前的数据
         */
        this.setState((prevState)=> ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',            
        }),()=> {
            console.log(this.ul.querySelectorAll('div').length)
        })

    }

    handleDelete(index) {
        // const list = [...this.state.list];
        // list.splice(index,1)
        // this.setState({
        //     list: list
        // })

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list};
        })
    }

    getTodoItem() {       
        return this.state.list.map((item,index)=> {
            return (
                <TodoItem 
                    content={item}
                    key={index} 
                    index={index}
                    deleteItem={this.handleDelete.bind(this)}
                />
            )
        })
    }
}
 
export default TodoList;