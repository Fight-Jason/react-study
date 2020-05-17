import React from 'react';
import { Input, Button , List} from 'antd'

// 无状态组件
// 当一个组件只有render方法时，建议采用无状态组件
// 性能优于普通UI组件，普通UI组件会有类继承属性生命周期函数和render方法，而无状态组件是纯函数
const TodoListUI = (props) => {
    return ( 
        <div style={{marginTop: '10px',marginLeft: '10px'}}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder='todo info' 
                    style={{width: '300px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>查询</Button>
            </div>
            <List
                style={{marginTop: '10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => <List.Item onClick={()=> {props.handleItemDelete(index)}}>{item}</List.Item>}/>
        </div>
     );    
}

// 普通UI组件
// class TodoListUI extends Component {

//     render() { 
//         return ( 
//             <div style={{marginTop: '10px',marginLeft: '10px'}}>
//                 <div>
//                     <Input 
//                         value={this.props.inputValue} 
//                         placeholder='todo info' 
//                         style={{width: '300px'}}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>查询</Button>
//                 </div>
//                 <List
//                     style={{marginTop: '10px',width:'300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => <List.Item onClick={(index)=> {this.props.handleItemDelete(index)}}>{item}</List.Item>}/>
//             </div>
//          );
//     }
// }
 
export default TodoListUI;