import React, { Component } from 'react';
import propTypes from 'prop-types';
 
class TodoItem extends Component {
    constructor(props) {
        super(props); //继承父类要调用super
        this.handleClick = this.handleClick.bind(this)
    }

    // 一个组件要从父组件接受参数
    // 只要父组件render函数被重新执行，子组件这个生命周期函数就会被执行
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('child componentWillReceiveProps')
    // }

    // // 当组件即将被从页面中剔除的时候，会被执行
    // componentWillUnmount() {
    //     console.log('child componentWillUnmount')
    // }

    // 
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        }else {
            return false;
        }
    }

    render() { 
        console.log('child render')
        const {content} = this.props;
        // jsx -> createElement -> 虚拟DOM（JS对象）-> 真实DOM结构
        return ( 
            <div onClick={this.handleClick} key={this.props.index}>
               {content}
            </div>
         );
    }

    handleClick() {
        const {deleteItem,index} = this.props;
        deleteItem(index)
        // this.props.deleteItem(this.props.index)
    }
}

TodoItem.propTypes = {
    // test: propTypes.string.isRequired,
    content: propTypes.string,
    deleteItem: propTypes.func,
    index: propTypes.number
    
}

// TodoItem.defaultProps = {
//     test: 'hello world'
// }

// const handleClick = (index) => {
//     console.log(this,index)
// }
// const TodoItem = (content) => {
//     return <div onClick={handleClick}>{content}</div>
// }
 
export default TodoItem;