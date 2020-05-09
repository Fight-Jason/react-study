/**
 * 环境中已经注入了 React-redux，你可以直接使用 connect，或者 ReactRedux.connect
 */
import { connect } from 'react-redux'
const userReducer = /* TODO */

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  render () {
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: <input type='text' /></div>
          <div>Age: <input type='number' /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' /></label>
            <label>Female: <input type='radio' name='gender' value='female' /></label>
          </div>
          <button>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>{/* TODO */}</div>
      </div>
    )
  }
}