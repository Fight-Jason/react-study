import React, { Component } from 'react';
import Clock from './Clock'
class Index extends Component {
    constructor() {
        super()
        this.state = { 
            isShowClock: true ,
            content: '<h1>react 插入innerHTML</h1>',
            color: 'blue'
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowClock : !this.state.isShowClock
        })
    }
    componentDidMount() {
        console.log(this.clock)
    }
    render() { 
        return ( 
            <div>
                { this.state.isShowClock ? <Clock ref={(clock) => this.clock = clock} /> : null }
                <button
                onClick= {this.handleShowOrHide.bind(this)}
                >
                    显示时钟
                </button>
                <div dangerouslySetInnerHTML={{__html: this.state.content}}>
                </div>
                <h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
            </div>
        );
    }
}
 
export default Index;