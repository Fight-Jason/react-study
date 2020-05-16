import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import './style.css'
class App extends Component {
	constructor(props)  {
		super(props)
		this.state = {
			show: true
		}
		this.handleToggole = this.handleToggole.bind(this)
	}
	render() { 
		return (
			<Fragment>
				<CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames='fade'
					unmountOnExit
					onEntered={(el) => {el.style.color = 'blue'}}
				>
					<div>hello</div>
				</CSSTransition>
				{/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
				<button onClick={this.handleToggole}>toggle</button>
			</Fragment>       
			);
	}

	handleToggole() {
		this.setState(()=> ({
			show: this.state.show ? false : true
		}))
	}
}
 
export default App;